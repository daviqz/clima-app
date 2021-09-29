import { StyleSheet } from "react-native";

const DayCommentsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    width: "100%",
    padding: 7,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
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

export default DayCommentsStyles;
