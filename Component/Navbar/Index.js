import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FontAwesome,
  Feather,
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  MaterialIcons,
  EvilIcons,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";

const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navbarItem}
        onPress={() => props.setKey(1)}
      >
        <Ionicons
          name="home"
          size={20}
          color={props.keys === 1 ? "#622DF7" : "#666666"}
        />
        <Text
          style={{
            color: `${props.keys === 1 ? "#622DF7" : "#666666"}`,
            fontSize: 10,
          }}
        >
          Trang chủ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarItem}
        onPress={() => props.setKey(2)}
      >
        <SimpleLineIcons
          name="star"
          size={20}
          color={props.keys === 2 ? "#622DF7" : "#666666"}
        />
        <Text
          style={{
            color: `${props.keys === 2 ? "#622DF7" : "#666666"}`,
            fontSize: 10,
          }}
        >
          Khám phá
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarItem}
        onPress={() => props.setKey(3)}
      >
        <Ionicons
          name="heart"
          size={20}
          color={props.keys === 3 ? "#622DF7" : "#666666"}
        />
        <Text
          style={{
            color: `${props.keys === 3 ? "#622DF7" : "#666666"}`,
            fontSize: 10,
          }}
        >
          Theo dõi
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarItem}
        onPress={() => props.setKey(4)}
      >
        <Ionicons
          name="md-chatbox-ellipses-outline"
          size={20}
          color={props.keys === 4 ? "#622DF7" : "#666666"}
        />
        <Text
          style={{
            color: `${props.keys === 4 ? "#622DF7" : "#666666"}`,
            fontSize: 10,
          }}
        >
          Thư riêng
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarItem}
        onPress={() => props.setKey(5)}
      >
        <Ionicons
          name="person"
          size={20}
          color={props.keys === 5 ? "#622DF7" : "#666666"}
        />
        <Text
          style={{
            color: `${props.keys === 5 ? "#622DF7" : "#666666"}`,
            fontSize: 10,
          }}
        >
          Tôi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    marginBottom: 20,
  },
  navbarItem: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    padding: 5,
  },
});

export default Navbar;
