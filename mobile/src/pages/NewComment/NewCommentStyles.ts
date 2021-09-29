import { StyleSheet } from "react-native";

const NewCommentStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d64b6",
    padding: 5,
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "100%",
    padding: 25,
  },
  headerText: {
    fontSize: 25,
    marginTop: 15,
    color: "#6d64b6",
    marginBottom: 20,
    fontFamily: "Poppins_500Medium",
    letterSpacing: 1,
  },
  input: {
    height: 150,
    borderColor: "gray",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginBottom: 5,
    color: "#6d64b6",
    fontFamily: "Poppins_500Medium",
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dotted",
    borderWidth: 3,
    borderColor: "#6d64b6",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "contain",
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

export default NewCommentStyles;
