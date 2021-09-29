import { StyleSheet } from "react-native";

import { darkColor } from "../../colors";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkColor,
    padding: 5,
  },
  sunImage: {
    position: "absolute",
    left: 20,
    top: 120,
    width: 90,
    height: 90,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 25,
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
    zIndex: 99,
    top: 41,
    left: 10,
  },
  input: {
    height: 60,
    borderColor: "gray",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginBottom: 5,
    color: darkColor,
    fontFamily: "Poppins_500Medium",
    fontWeight: "bold",
    paddingHorizontal: 45,
  },
  button: {
    backgroundColor: darkColor,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
});

export default LoginStyles;
