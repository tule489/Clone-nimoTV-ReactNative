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
    backgroundColor: "#fff",
  },
  navbarItem: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
});

export default styles;
