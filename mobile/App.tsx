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

import CustomDrawer from "./src/components/CustomDrawer/CustomDrawer";
import LogoutButton from "./src/components/LogoutButton/LogoutButton";

import SplashScreen from "./src/pages/SplashScreen/SplashScreen";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import HistoryComments from "./src/pages/HistoryComments/HistoryComments";

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
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
      api
        .get(getForecastUrl(coords.latitude, coords.longitude))
        .then((result) => {
          setAppIsLoading(false);
          console.log(result);
        });
    })();
  }, []);

  if (appIsLoading || !fontsLoaded) {
    return <SplashScreen />;
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
              fontFamily: 'Poppins_500Medium'
            },
            headerTitle: "Clima App",
            headerRight: () => <LogoutButton />,
            headerTintColor: "#ffffff",
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
              },
              drawerIcon: () => (
                <AntDesign name="home" size={20} color="black" />
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
              },
              drawerIcon: () => (
                <MaterialIcons name="login" size={20} color="black" />
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
              },
              drawerIcon: () => (
                <Ionicons name="chatbox-outline" size={20} color="black" />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
