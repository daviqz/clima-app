import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../interfaces/rootStackParamList";

import LoginStyles from "./LoginStyles";
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";

const Login: React.FC<NativeStackScreenProps<RootStackParamList, "Login">> = ({
  navigation,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goToHome = () => {
    setUsername("");
    setPassword("");
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={LoginStyles.container}>
      <Image style={LoginStyles.sunImage} source={sun} />
      <View style={LoginStyles.box}>
        <Image style={LoginStyles.cloudImage} source={cloud} />
        <Text style={LoginStyles.headerText}>Entrar</Text>
        <View>
          <AntDesign
            name="user"
            size={24}
            color="#6d64b6"
            style={LoginStyles.iconInput}
          />
          <TextInput
            style={LoginStyles.input}
            onChangeText={setUsername}
            placeholder="Usuário"
            value={username}
            placeholderTextColor="#b2add7"
          />
        </View>
        <View>
          <AntDesign
            name="lock"
            size={24}
            color="#6d64b6"
            style={LoginStyles.iconInput}
          />
          <TextInput
            style={LoginStyles.input}
            onChangeText={setPassword}
            placeholder="Senha"
            value={password}
            placeholderTextColor="#b2add7"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={LoginStyles.button} onPress={goToHome}>
          <Text style={LoginStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
