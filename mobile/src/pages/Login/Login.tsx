import React, { useState, memo } from "react";
import { Text, View, TextInput, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../interfaces/rootStackParamList";

import { darkColor, lightColor } from "../../colors";
import LoginStyles from "./LoginStyles";
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";
import api, { BASE_URL } from "../../services/api";
import { storeLoggedUser } from "../../services/asyncStorage";
import { signIn } from "../../store/Actions";
import { connect } from "react-redux";

const Login: React.FC<
  NativeStackScreenProps<RootStackParamList, "Login"> & { signInDispatch: any }
> = ({ navigation, signInDispatch }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const goToHome = () => {
    if (name !== "" && password !== "") {
      setIsLoading(true);
      api
        .post(`${BASE_URL}/user/login`, { name, password })
        .then(async (response) => {
          if (response.data.message) {
            setIsLoading(false);
            Alert.alert("Atenção", response.data.message);
          } else {
            await storeLoggedUser(response.data);
            signInDispatch(response.data);
            setName("");
            setPassword("");
            setIsLoading(false);
            navigation.navigate("Home");
          }
        });
    } else {
      setIsLoading(false);
      Alert.alert("Atenção", "Usuário e senha são obrigatórios!");
    }
  };

  return (
    <View style={LoginStyles.container}>
      <Image style={LoginStyles.sunImage} source={sun} />
      <View style={LoginStyles.box}>
        <Image style={LoginStyles.cloudImage} source={cloud} />
        <Text style={LoginStyles.headerText}>Entrar</Text>
        <View>
          <AntDesign
            name="user"
            size={24}
            color={darkColor}
            style={LoginStyles.iconInput}
          />
          <TextInput
            style={LoginStyles.input}
            onChangeText={setName}
            placeholder="Usuário"
            value={name}
            placeholderTextColor={lightColor}
          />
        </View>
        <View>
          <AntDesign
            name="lock"
            size={24}
            color={darkColor}
            style={LoginStyles.iconInput}
          />
          <TextInput
            style={LoginStyles.input}
            onChangeText={setPassword}
            placeholder="Senha"
            value={password}
            placeholderTextColor={lightColor}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={LoginStyles.button}
          onPress={goToHome}
          disabled={isLoading}
        >
          <Text style={LoginStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  signInDispatch: (loggedUser: any) => dispatch(signIn(loggedUser)),
});

export default connect(null, mapDispatchToProps)(memo(Login));
