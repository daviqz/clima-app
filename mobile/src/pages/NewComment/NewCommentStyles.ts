import { StyleSheet } from "react-native";

import { darkColor } from "../../colors";

const NewCommentStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkColor,
    padding: 18,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 25,
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    marginTop: 10,
    color: darkColor,
    marginBottom: 10,
    fontFamily: "Poppins_400Regular",
    letterSpacing: 1,
  },
  input: {
    height: 120,
    borderColor: "gray",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginBottom: 5,
    color: darkColor,
    fontFamily: "Poppins_400Regular",
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dotted",
    borderWidth: 3,
    borderColor: darkColor,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "contain",
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
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
});

export default NewCommentStyles;
