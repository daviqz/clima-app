import React, { useEffect, useState } from "react";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { LogBox } from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/interfaces/rootStackParamList";

import api from "./src/services/api";
import { getForecastUrl } from "./src/utils";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomDrawer from "./src/components/CustomDrawer/CustomDrawer";
import LogoutButton from "./src/components/LogoutButton/LogoutButton";

import SplashScreen from "./src/pages/SplashScreen/SplashScreen";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import HistoryComments from "./src/pages/HistoryComments/HistoryComments";
import NewComment from "./src/pages/NewComment/NewComment";
import { darkColor } from "./src/colors";

LogBox.ignoreAllLogs(true);

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  const [infoText, setInfoText] = useState("Buscando sua localização...");
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true);
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setInfoText("Buscando as informações do clima...");
      api
        .get(getForecastUrl(coords.latitude, coords.longitude))
        .then((result) => {
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
              fontFamily: "Poppins_500Medium",
            },
            headerTitle: "Clima App",
            headerRight: () => <LogoutButton />,
            headerTintColor: "white",
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
                fontFamily: 'Poppins_400Regular',
                paddingTop: 4
              },
              drawerIcon: () => (
                <AntDesign name="home" size={20} color={darkColor} />
              ),
            }}
          />
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              drawerLabel: "Entrar",
              drawerLabelStyle: {
                marginLeft: -15,
                color: darkColor,
                fontFamily: 'Poppins_400Regular',
                paddingTop: 4
              },
              drawerIcon: () => (
                <MaterialIcons name="login" size={20} color={darkColor} />
              ),
            }}
          />
          <Drawer.Screen
            name="NewComment"
            component={NewComment}
            options={{
              drawerLabel: "Novo comentário",
              drawerLabelStyle: {
                marginLeft: -15,
                color: darkColor,
                fontFamily: 'Poppins_400Regular',
                paddingTop: 4
              },
              drawerIcon: () => (
                <Ionicons name="chatbox-outline" size={20} color={darkColor} />
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
                fontFamily: 'Poppins_400Regular',
                paddingTop: 4
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
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
