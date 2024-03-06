import { StyleSheet } from "react-native";
export const headerStyles = StyleSheet.create({
    container: {
    backgroundColor: "#2f95dc",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
});
