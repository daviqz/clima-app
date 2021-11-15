import React, { useState, memo } from "react";
import { Text, View, TextInput, Image, Alert, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../interfaces/rootStackParamList";

import NewCommentStyles from "./NewCommentStyles";
import { darkColor, lightColor } from "../../colors";
import api, { BASE_URL } from "../../services/api";
import { connect } from "react-redux";

const NewComment: React.FC<
  NativeStackScreenProps<RootStackParamList, "NewComment"> & {
    loggedUser?: any;
  }
> = ({ loggedUser, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState<any>(null);

  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Erro", "Erro ao acessar a galera!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult);

    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // if (!result.cancelled) {
    //   setImage(result);
    // }
  };

  const createFormData = (photo: any, body: any) => {
    const formData: any = new FormData();
    const photoName =
      photo.fileName ||
      `foto${Math.floor(Math.random() * 16853)}-${loggedUser.id}`;

    formData.append("file", {
      name: `${photoName}.jpg`,
      type: photo.type,
      uri:
        Platform.OS === "android"
          ? photo.uri
          : photo.uri.replace("file://", ""),
    });

    Object.keys(body).forEach((key) => {
      formData.append(key, String(body[key]));
    });

    return formData;
  };

  const goToHome = async () => {
    if (comment !== "" && image) {
      setIsLoading(true);
      api
        .post(
          `${BASE_URL}/comment`,
          createFormData(image, { id_user: loggedUser.id, comment })
        )
        .then(() => {
          setComment("");
          setImage(null);
          setIsLoading(false);
          Alert.alert("Sucesso", "Comentário adicionado com sucesso!");
          navigation.navigate("Home");
        });
    } else {
      setIsLoading(false);
      Alert.alert("Atenção", "Comentário e imagem são obrigatórios!");
    }
  };

  return (
    <View style={NewCommentStyles.container}>
      <View style={NewCommentStyles.box}>
        <Text style={NewCommentStyles.headerText}>Novo comentário</Text>
        <TextInput
          style={NewCommentStyles.input}
          onChangeText={setComment}
          placeholder="Comentário"
          value={comment}
          placeholderTextColor={lightColor}
          multiline
          numberOfLines={5}
          blurOnSubmit
        />
        <TouchableOpacity onPress={openImagePickerAsync}>
          <View style={NewCommentStyles.imageContainer}>
            {image ? (
              <Image
                source={{ uri: image.uri }}
                style={NewCommentStyles.thumbnail}
              />
            ) : (
              <Feather name="camera" size={24} color={darkColor} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={NewCommentStyles.button}
          onPress={goToHome}
          disabled={isLoading}
        >
          <Text style={NewCommentStyles.buttonText}>Comentar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = ({ loggedUser }: any) => ({
  loggedUser,
});

export default connect(mapStateToProps, null)(memo(NewComment));
