import { StyleSheet } from "react-native";

import { darkColor } from "../../colors";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkColor,
    padding: 18,
  },
  sunImage: {
    position: "absolute",
    left: 20,
    top: 80,
    width: 90,
    height: 90,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 25,
    marginTop: 60
  },
  cloudImage: {
    position: "absolute",
    right: 0,
    top: -60,
  },
  headerText: {
    fontSize: 25,
    marginTop: 15,
    color: darkColor,
    marginBottom: 20,
    fontFamily: "Poppins_500Medium",
    letterSpacing: 1,
  },
  iconInput: {
    position: "absolute",
    zIndex: 99,
    top: 17,
    left: 10
  },
  input: {
    height: 60,
    borderColor: "gray",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginBottom: 15,
    color: darkColor,
    fontFamily: "Poppins_500Medium",
    paddingHorizontal: 45,
    paddingTop: 3
  },
  button: {
    backgroundColor: darkColor,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },
});

export default LoginStyles;
