import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6d64b6",
  },
  textCity: {
    fontSize: 33,
    fontFamily: "Poppins_400Regular",
    color: "#ffffff",
    marginBottom: 5,
  },
  textFullDate: {
    fontSize: 20,
    fontFamily: "Poppins_300Light",
    color: "#ffffff",
    marginBottom: 20,
  },
  currentTemperature: {
    fontSize: 100,
    fontFamily: "Poppins_700Bold",
    color: "#ffffff",
  },
  divider: {
    color: "#ffffff",
    fontSize: 28,
    marginBottom: 25,
  },
  currentState: {
    color: "#ffffff",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    marginBottom: 7,
  },
  rangeTemperature: {
    color: "#ffffff",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    marginBottom: 80,
  },
  containerForecast: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  boxForecastItem: {
    alignItems: "center",
  },
  rangeTemperatureForecast: {
    fontFamily: "Poppins_500Medium",
    marginVertical: 5,
    fontSize: 16
  },
  dayForecast: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  buttonUp: {
    backgroundColor: "#b2add7",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeStyles;
