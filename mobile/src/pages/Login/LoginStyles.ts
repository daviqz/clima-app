import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d64b6",
    padding: 5,
  },
  sunImage: {
    position: "absolute",
    left: 20,
    top: 30,
    width: 90,
    height: 90,
  },
  title1: {
    fontSize: 30,
    fontFamily: "Poppins_500Medium",
    color: "#ffffff",
  },
  title2: {
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: "#ffffff",
    marginBottom: 70,
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "100%",
    padding: 25,
    marginBottom: 90,
  },
  cloudImage: {
    position: "absolute",
    right: 0,
    top: -60,
  },
  headerText: {
    fontSize: 25,
    marginTop: 15,
    color: "#6d64b6",
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
    marginBottom: 10,
    color: "#6d64b6",
    fontFamily: "Poppins_500Medium",
    fontWeight: "bold",
    paddingHorizontal: 45,
  },
  button: {
    backgroundColor: "#6d64b6",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
});

export default LoginStyles;
