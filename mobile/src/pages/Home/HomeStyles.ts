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
    marginTop: 25,
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  textFullDate: {
    fontSize: 20,
    fontFamily: "Poppins_300Light",
    color: "white",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  currentTemperature: {
    fontSize: 80,
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
    fontFamily: "Poppins_400Regular",
    fontSize: 25,
    marginBottom: 0,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  rangeTemperature: {
    color: "white",
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    marginBottom: 10,
  },
  containerForecast: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  boxForecastItem: {
    alignItems: "center",
  },
  iconForecast: {
    width: 60,
    height: 60,
  },
  rangeTemperatureForecast: {
    fontFamily: "Poppins_400Regular",
    marginVertical: 5,
    fontSize: 16,
  },
  dayForecast: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize",
  },
  buttonUp: {
    backgroundColor: lightColor,
    alignItems: "center",
    paddingTop: 5,
  },
});

export default HomeStyles;
