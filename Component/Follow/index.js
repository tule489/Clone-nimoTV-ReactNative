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
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Live from "./Live";
import Post from "./Post";
import styles from "./style";

const Follow = () => {
  const [key, setKey] = useState(1);

  return (
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
      <View>
        <TextInput placeholder="Tìm kiếm" style={styles.searchingInput} />
        <View style={{ position: "absolute", top: 10, left: 19 }}>
          <Fontisto name="search" color={"#BEBEBE"} size={15} />
        </View>
      </View>
      <View>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(1)}>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text
                style={{
                  color: `${key === 1 ? "#000" : "#717171"}`,
                  fontSize: 18,
                  fontWeight: `${key === 1 ? "800" : ""}`,
                }}
              >
                Post
              </Text>
              <View
                style={{
                  width: 25,
                  borderWidth: 2,
                  marginTop: 10,
                  borderRadius: 8,
                  borderColor: `${key === 1 ? "#000" : "transparent"}`,
                }}
              ></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(2)}>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text
                style={{
                  color: `${key === 2 ? "#000" : "#717171"}`,
                  fontSize: 18,
                  fontWeight: `${key === 2 ? "800" : ""}`,
                }}
              >
                Live
              </Text>
              <View
                style={{
                  width: 25,
                  borderWidth: 2,
                  marginTop: 10,
                  borderRadius: 8,
                  borderColor: `${key === 2 ? "#000" : "transparent"}`,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {(key === 1 && <Post />) || (key === 2 && <Live />)}
    </ScrollView>
  );
};

export default Follow;
