import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
// import { Animated } from "react-native";
const DATA = [
  {
    id: "1",
    title: "Nimo Express",
    chat: "[v]Linn2tuii",
    nameicon: "star",
    time: "Hôm qua 20:00",
  },
  {
    id: "2",
    title: "Tin người lạ",
    nameicon: "user",
    time: "Hôm qua 14:15",
  },
];
export default function Letter() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.item1}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#29dfee",
          }}
        >
          <AntDesign
            name={item.nameicon}
            size={24}
            style={{ paddingHorizontal: 10, color: "#fff" }}
          />
        </View>
      </View>
      <View style={styles.item2}>
        <Text style={{ color: "#fff", fontWeight: "900" }}>{item.title}</Text>
        <Text style={{ color: "#3e3e3e" }}>{item.chat}</Text>
      </View>
      <View style={styles.item3}>
        <Text style={{ color: "#3e3e3e" }}>{item.time}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, position: "relative", color: "#fff" }}>
          Tin nhắn của tôi
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 5,
            top: 20,
          }}
        >
          <Ionicons
            name="md-chatbox-outline"
            size={24}
            style={styles.header_icon}
          />
          <AntDesign name="setting" size={24} style={styles.header_icon} />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom_start}>
          <View style={styles.bottom_start_button}>
            <View style={styles.bottom_start_icon}>
              <AntDesign name="heart" size={24} style={styles.header_icon} />
            </View>
            <Text
              style={{ color: "#fff", alignItems: "center", paddingTop: 10 }}
            >
              Theo dõi mới
            </Text>
          </View>
          <View style={styles.bottom_start_button}>
            <View style={styles.bottom_start_icon1}>
              <AntDesign name="like1" size={24} style={styles.header_icon} />
            </View>
            <Text
              style={{ color: "#fff", alignItems: "center", paddingTop: 10 }}
            >
              Like
            </Text>
          </View>
          <View style={styles.bottom_start_button}>
            <View style={styles.bottom_start_icon1}>
              <Ionicons
                name="chatbox-ellipses"
                size={24}
                style={styles.header_icon}
              />
            </View>
            <Text style={{ color: "#fff", alignItems: "center" }}>
              Bình luận
            </Text>
          </View>
          <View style={styles.bottom_start_button}>
            <View style={styles.bottom_start_icon3}>
              {/* <AntDesign name="heart" size={24} style={styles.header_icon}/> */}
              <Text style={{ fontSize: 27, color: "#fff" }}>@</Text>
            </View>
            <Text style={{ color: "#fff", alignItems: "center" }}>@ Tôi</Text>
          </View>
        </View>
        <View style={styles.bottom_chat}>
          <FlatList
            style={{ height: 400 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.nav}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  component: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  header_icon: {
    paddingHorizontal: 10,
    color: "#fff",
  },
  bottom_start: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  bottom_start_button: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_start_icon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#7938df",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_start_icon1: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#eb4771",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_start_icon2: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#4da8f1",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_start_icon3: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#e47f4b",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  item1: {
    flex: 1,
  },
  item2: {
    flex: 3,
    paddingVertical: 10,
    paddingLeft: 9,
  },
  item3: {
    flex: 1.7,
    paddingVertical: 10,
  },
});
