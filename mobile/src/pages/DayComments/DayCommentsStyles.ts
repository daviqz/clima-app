import { StyleSheet } from "react-native";

import { darkColor } from "../../colors";

const DayCommentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    width: "100%",
    padding: 7,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 25,
    height: "96%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: darkColor,
    fontFamily: "Poppins_500Medium",
  },
  commentContainer: {
    flexDirection: "row",
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 6,
  },
  boxComment: {
    justifyContent: "space-between",
  },
  user: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
  },
  comment: {
    fontSize: 14,
    fontFamily: "Poppins_300Light",
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
});

export default DayCommentsStyles;
