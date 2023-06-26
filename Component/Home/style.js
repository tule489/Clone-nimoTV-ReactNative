import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  searchingInput: {
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 3,
    backgroundColor: "#EEEEEE",
    borderColor: "#FFF",
    opacity: 0.5,
  },
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  navbarItem: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
  active: {
    fontWeight: "800",
    color: "#000",
    fontSize: 20,
  },
});

export default styles;
