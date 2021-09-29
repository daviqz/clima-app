import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../interfaces/rootStackParamList";

import NewCommentStyles from "./NewCommentStyles";
import { darkColor, lightColor } from "../../colors";

const NewComment: React.FC<
  NativeStackScreenProps<RootStackParamList, "NewComment">
> = ({ navigation }) => {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState<{ localUri: string | null }>({
    localUri: null,
  });

  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setImage({ localUri: pickerResult.uri });
  };

  const goToHome = () => {
    setComment("");
    setImage({ localUri: null });
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={NewCommentStyles.container}>
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
            {image.localUri ? (
              <Image
                source={{ uri: image.localUri }}
                style={NewCommentStyles.thumbnail}
              />
            ) : (
              <Feather name="camera" size={24} color={darkColor} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={NewCommentStyles.button} onPress={goToHome}>
          <Text style={NewCommentStyles.buttonText}>Comentar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewComment;
