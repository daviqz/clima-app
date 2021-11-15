import { StyleSheet } from "react-native";

import { darkColor } from "../../colors";

const HistoryCommentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    width: "100%",
    padding: 17,
    backgroundColor: darkColor,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    padding: 25,
    height: "96%",
  },
  title: {
    fontSize: 20,
    color: darkColor,
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  dateBox: {
    marginBottom: 20,
  },
  date: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
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
    fontFamily: "Poppins_400Regular",
  },
  comment: {
    fontSize: 14,
    fontFamily: "Poppins_300Light",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

export default HistoryCommentsStyles;
