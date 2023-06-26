import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { exp } from "react-native/Libraries/Animated/Easing";

const Me = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.head}>
        <View style={styles.headtop}>
          <TouchableOpacity
            style={{ display: "flex", flexDirection: "row" }}
            onPress={() => props.setKey(10)}
          >
            <Image
              style={styles.Logohead}
              source={require("./assets/tu.png")}
            />
            <View>
              <Text style={styles.txtacont}>Tú Lê</Text>
              <Text style={{ color: "#ADADAD", fontSize: 12 }}>
                ID:1480226802
              </Text>
            </View>
          </TouchableOpacity>
          <MaterialCommunityIcons name="line-scan" size={35} color="blue" />
        </View>
        <View style={styles.headbottom}>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons name="clock" size={30} color="#51E9D5" />
            <Text style={{ marginTop: 20 }}>Xem lịch sử</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Fontisto name="shopping-bag" size={30} color="#579EFE" />
            <Text>Túi của tôi</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons name="crown" size={30} color="#FFAA36" />
            <Text>Royal</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="wallet" size={30} color="#FF9B4C" />
            <Text>Ví của tôi</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "30%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/1.jpg")}
            />
            <Text style={styles.txtitem}>Trung tâm SK</Text>
          </View>
          <View>
            <AntDesign name="right" size={13} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "32%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/bxh.png")}
            />
            <Text style={styles.txtitem}>Bảng xếp hạng</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "34%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/sdv.png")}
            />
            <Text style={styles.txtitem}>Sảnh danh vọng</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "31%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/chd.png")}
            />
            <Text style={styles.txtitem}>Cửa hàng đậu</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "35%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/ttf.png")}
            />
            <Text style={styles.txtitem}>Trung tâm Family</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
      </View>
      <View style={styles.between}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "37%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/stream.png")}
            />
            <Text style={styles.txtitem}>Trung tâm Stream</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "27%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/td.png")}
            />
            <Text style={styles.txtitem}>Tuyển dụng Stream</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
      </View>
      <View style={styles.sukien}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "25%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/lv.png")}
            />
            <Text style={styles.txtitem}>Lv user tôi</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "29%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/video.png")}
            />
            <Text style={styles.txtitem}>Video của tôi</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "28%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/sub.png")}
            />
            <Text style={styles.txtitem}>Subs của tôi</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "27%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/qua.png")}
            />
            <Text style={styles.txtitem}>Quà của tôi/Thành Tựu</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
      </View>
      <View style={styles.forter}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "15%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/caidat.png")}
            />
            <Text style={styles.txtitem}>Cài đặt</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "21%",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{ width: 35, height: 35, marginLeft: -10 }}
              source={require("./assets/troigiup.png")}
            />
            <Text style={styles.txtitem}>Trợ giúp và phản hồi</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "21%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/chamsoc.png")}
            />
            <Text style={styles.txtitem}>Bot chăm sóc khách hàng</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "21%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/thamgia.png")}
            />
            <Text style={styles.txtitem}>Tham gia vào nhóm chính thức</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "25%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("./assets/gioithieu.png")}
            />
            <Text style={styles.txtitem}>Giới thiệu về chúng tôi</Text>
          </View>
          <View>
            <AntDesign name="right" size={15} color="#CDCDCD" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // right: -18,
    backgroundColor: "lightgray",
  },
  head: {
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    marginBottom: 5,
  },
  Logohead: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "cover",
    marginRight: 7,
  },
  txtacont: {
    fontWeight: "bold",
    fontSize: 16,
  },
  txtitem: {
    width: 200,
  },
  headtop: {
    flexDirection: "row",
    height: 50,
    alignContent: "center",
    justifyContent: "space-between",
    display: "flex",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  headbottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  body: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    // borderWidth: 1,
    marginBottom: 5,
  },
  between: {
    backgroundColor: "#FFFFFF",
    // borderWidth: 1,
    marginBottom: 5,
  },
  sukien: {
    backgroundColor: "#FFFFFF",
    marginBottom: 5,
  },
  forter: {
    backgroundColor: "#FFFFFF",
  },
});

export default Me;
