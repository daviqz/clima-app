import React, { useEffect, useState, memo } from "react";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Alert, LogBox, View } from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../interfaces/rootStackParamList";

import api from "../services/api";
import { getForecastUrl } from "../utils";
import { getLoggedUser, storeData } from "../services/asyncStorage";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import LogoutButton from "../components/LogoutButton/LogoutButton";

import SplashScreen from "../pages/SplashScreen/SplashScreen";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import HistoryComments from "../pages/HistoryComments/HistoryComments";
import NewComment from "../pages/NewComment/NewComment";
import { darkColor } from "../colors";
import { restoreLoggedUser } from "../store/Actions";
import { connect } from "react-redux";

LogBox.ignoreAllLogs(true);

const Drawer = createDrawerNavigator<RootStackParamList>();

const Routes = ({ loggedUser, restoreLoggedUserDispatch }: any) => {
  const [infoText, setInfoText] = useState("Buscando sua localização...");
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Erro",
          "Permissão para acessar a localização foi negada. Vá até as configurações e habilite!"
        );
        return;
      }

      const user = await getLoggedUser();
      restoreLoggedUserDispatch(user);

      const { coords } = await Location.getCurrentPositionAsync({});
      setInfoText("Buscando as informações do clima...");
      api
        .get(getForecastUrl(coords.latitude, coords.longitude))
        .then((result) => {
          storeData(result.data);
          setAppIsLoading(false);
        });
    })();
  }, []);

  if (appIsLoading || !fontsLoaded) {
    return <SplashScreen infoText={infoText} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "Poppins_400Regular",
            },
            headerTitle: "Clima App",
            headerRight: () => (loggedUser ? <LogoutButton /> : <View />),
            headerTintColor: "white",
            unmountOnBlur: true,
          }}
          drawerContent={(props: DrawerContentComponentProps) => (
            <CustomDrawer {...props} />
          )}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              drawerLabel: "Início",
              drawerLabelStyle: {
                marginLeft: -15,
                color: darkColor,
                fontFamily: "Poppins_400Regular",
                paddingTop: 4,
              },
              drawerIcon: () => (
                <AntDesign name="home" size={20} color={darkColor} />
              ),
            }}
          />
          {!loggedUser && (
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{
                drawerLabel: "Entrar",
                drawerLabelStyle: {
                  marginLeft: -15,
                  color: darkColor,
                  fontFamily: "Poppins_400Regular",
                  paddingTop: 4,
                },
                drawerIcon: () => (
                  <MaterialIcons name="login" size={20} color={darkColor} />
                ),
              }}
            />
          )}
          {loggedUser && (
            <>
              <Drawer.Screen
                name="NewComment"
                component={NewComment}
                options={{
                  drawerLabel: "Novo comentário",
                  drawerLabelStyle: {
                    marginLeft: -15,
                    color: darkColor,
                    fontFamily: "Poppins_400Regular",
                    paddingTop: 4,
                  },
                  drawerIcon: () => (
                    <Ionicons
                      name="chatbox-outline"
                      size={20}
                      color={darkColor}
                    />
                  ),
                }}
              />
              <Drawer.Screen
                name="HistoryComments"
                component={HistoryComments}
                options={{
                  drawerLabel: "Histórico",
                  drawerLabelStyle: {
                    marginLeft: -15,
                    color: darkColor,
                    fontFamily: "Poppins_400Regular",
                    paddingTop: 4,
                  },
                  drawerIcon: () => (
                    <MaterialCommunityIcons
                      name="history"
                      size={20}
                      color={darkColor}
                    />
                  ),
                }}
              />
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = ({ loggedUser }: any) => ({
  loggedUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  restoreLoggedUserDispatch: (loggedUser: any) =>
    dispatch(restoreLoggedUser(loggedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Routes));
