import { StyleSheet } from "react-native";

import { darkColor } from "../../colors";

const HistoryCommentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    width: "100%",
    padding: 17,
    backgroundColor: darkColor,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    marginBottom: 10,
  },
  date: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
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
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default HistoryCommentsStyles;
