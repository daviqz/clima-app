import { StyleSheet } from "react-native";

import { lightColor } from "../../colors";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textCity: {
    fontSize: 25,
    fontFamily: "Poppins_400Regular",
    color: "white",
    marginTop: 10,
    marginBottom: 5,
  },
  textFullDate: {
    fontSize: 20,
    fontFamily: "Poppins_300Light",
    color: "white",
    marginBottom: 5,
  },
  currentTemperature: {
    fontSize: 90,
    fontFamily: "Poppins_700Bold",
    color: "white",
  },
  divider: {
    color: "white",
    fontSize: 28,
    marginTop: -20,
    marginBottom: 5,
  },
  currentState: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    marginBottom: 7,
  },
  rangeTemperature: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    marginBottom: 40,
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
    fontSize: 16,
  },
  dayForecast: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  buttonUp: {
    backgroundColor: lightColor,
    alignItems: "center",
    paddingTop: 5
  },
});

export default HomeStyles;
