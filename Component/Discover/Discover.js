import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  SafeAreaView,
  FlatList,
  SectionList,
  ScrollView,
  Dimensions,
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
import Icon from "react-native-vector-icons/FontAwesome5";
import YoutubeIframe from "react-native-youtube-iframe";

const DATA = [
  {
    id: "1",
    title: "GTA V SVBT",
    img: require("../assets/img1.jpg"),
    img1: require("../assets/img1.jpg"),
    steamer: "Độ Mixi",
    amount: "54.6k",
    day: "2022/11/10",
    time: "00:54",
    category: "Clip",
    videoID: "g-W0t_xCL1Y",
  },
  {
    id: "2",
    title: "Nimo Express",
    img: require("../assets/img1.jpg"),
    img1: require("../assets/img1.jpg"),
    steamer: "Độ Mixi",
    amount: "54.6k",
    day: "2022/11/10",
    time: "00:54",
    category: "Clip",
    videoID: "hqBjda_bf3I",
  },
  {
    id: "3",
    title: "Nimo Express",
    img: require("../assets/img1.jpg"),
    img1: require("../assets/img1.jpg"),
    steamer: "Độ Mixi",
    amount: "54.6k",
    day: "2022/11/10",
    time: "00:54",
    category: "Clip",
    videoID: "hqBjda_bf3I",
  },
  {
    id: "4",
    title: "Nimo Express",
    img: require("../assets/img1.jpg"),
    img1: require("../assets/img1.jpg"),
    steamer: "Độ Mixi",
    amount: "54.6k",
    day: "2022/11/10",
    time: "00:54",
    category: "Clip",
    videoID: "hqBjda_bf3I",
  },
];
const DATA1 = [
  {
    id: "1",
    title: "ALL",
  },
  {
    id: "2",
    title: "GTA5",
  },
  {
    id: "3",
    title: "Liveshow",
  },
  {
    id: "4",
    title: "Game Offline",
  },
  {
    id: "5",
    title: "League of Legends",
  },
  {
    id: "6",
    title: "PUBG",
  },
  {
    id: "7",
    title: "PUBG Mobile",
  },
];
const DATA2 = [
  {
    id: "1",
    title: "Tym ❤️",
    img: require("../assets/girl5.jpg"),
    img1: require("../assets/girl5.jpg"),
    steamer: "[Salt] Suna",
    day: "8 ngày trước",
    amountlike: "88",
    amountconment: "44",
  },
  {
    id: "2",
    title: "Được buổi săn mây 😝",
    img: require("../assets/girl6.jpg"),
    img1: require("../assets/girl6.jpg"),
    steamer: "Hanna",
    day: "8 ngày trước",
    amountlike: "888",
    amountconment: "99",
  },
];
const DATA4 = [
  {
    id: 1,
    title: "Restream hôm qua",
    game: "LMHT",
    img: require("../assets/img.jpg"),
    steamer: "Độ Mixi",
    amount: "50000",
  },
  {
    id: 2,
    title: "Bụt oii Cứu Béeeeeeee",
    game: "PUBG",
    img: require("../assets/romba.jpg"),
    steamer: "RamBo",
    amount: "47.2k",
  },
  {
    id: 3,
    title: "[MISTHY] Misthy Desu",
    game: "GTA5",
    img: require("../assets/misthy.jpg"),
    steamer: "MISTHY",
    amount: "16.1k",
  },
  {
    id: 4,
    title: "from Nhism with love",
    game: "GTA5",
    img: require("../assets/nhim.jpg"),
    steamer: "Nhism",
    amount: "47.2k",
  },
  {
    id: 5,
    title: "dev đã way lại r đây",
    game: "GTA5",
    img: require("../assets/dev.jpg"),
    steamer: "Dev",
    amount: "47.2k",
  },
  {
    id: 6,
    title: "Mohamep LeKhoi ",
    game: "FIFA FO4",
    img: require("../assets/lekhoi.jpg"),
    steamer: "LeKhoi",
    amount: "47.2k",
  },
  {
    id: 7,
    title: "Kayel Sever MixiCity  ",
    game: "GTA5",
    img: require("../assets/kl7.jpg"),
    steamer: "KL7",
    amount: "47.2k",
  },
  {
    id: 8,
    title: "Đứa con hư, chồng tệ",
    img: require("../assets/senna.jpg"),
    game: "GTA5",
    steamer: "Senahihi",
    amount: "47.2k",
  },
  {
    id: 9,
    title: " Mong gặp Bụt",
    game: "NimoShow",
    img: require("../assets/girl2.jpg"),
    steamer: "Naabi nè",
    amount: "47.2k",
  },
  {
    id: 10,
    title: "Chất gây nghiện cấm",
    game: "NimoShow",
    img: require("../assets/girl1.jpg"),
    steamer: "Katie BB",
    amount: "47.2k",
  },
];
const DATA5 = [
  {
    id: "1",
    title: "Biến hình #[SALT] Meow #Game Live ##followme#Liveshow",
    img: require("../assets/girl.jpg"),
    steamer: "Độ Mixi",
    amountlike: "999",
  },
  {
    id: "2",
    title: "Biến hình #[SALT] Meow #Game Live ##followme#Liveshow",
    img: require("../assets/girl8.jpg"),
    steamer: "Độ Mixi",
    amountlike: "999",
  },
  {
    id: "3",
    title: "Biến hình #[SALT] Meow #Game Live ##followme#Liveshow",
    img: require("../assets/images.jpg"),
    steamer: "Độ Mixi",
    amountlike: "999",
  },
];
export default function Discover() {
  const renderItem = ({ item }) => (
    <View>
      <View style={{ padding: 5 }}>
        <View style={styles.item_img}>
          {/* <Image style={{ width:150, height: 100 ,position:"relative"}} source={item.img} /> */}
          <YoutubeIframe
            height={100}
            width={150}
            videoId={item.videoID}
          ></YoutubeIframe>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              paddingHorizontal: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-start",
              }}
            >
              <Entypo
                name="controller-play"
                size={15}
                style={styles.header_icon1}
              />
              <Text style={{ color: "#fff", backgroundColor: "#3e3e3e" }}>
                {item.amount}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1.3,
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ color: "#fff", backgroundColor: "#3e3e3e" }}>
                {item.time}
              </Text>
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              top: 0,
              right: 20,
              color: "#fff",
              fontSize: 12,
              backgroundColor: "#3061ff",
              paddingHorizontal: 2,
            }}
          >
            {item.category}
          </Text>
        </View>
        <View style={{ backgroundColor: "#252525", paddingVertical: 10 }}>
          <Text
            style={{ color: "#fff", marginHorizontal: 5, marginBottom: 10 }}
          >
            {item.title}
          </Text>
          <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#3e3e3e",
                borderRadius: 50,
                marginRight: 7,
              }}
            >
              <Image
                style={{ width: 30, height: 30, borderRadius: 50 }}
                source={item.img}
              />
            </View>
            <View>
              <Text style={{ color: "#3e3e3e", fontSize: 12 }}>
                {item.steamer}
              </Text>
              <Text style={{ color: "#3e3e3e", fontSize: 12 }}>{item.day}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  const renderItem1 = ({ item }) => (
    <View
      style={{
        backgroundColor: "#101010",
        padding: 7,
        marginHorizontal: 5,
        borderRadius: 50,
      }}
    >
      <Text style={{ color: "#3e3e3e" }}>{item.title}</Text>
    </View>
  );
  const renderItem2 = ({ item }) => (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#3e3e3e",
        padding: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#3e3e3e",
              borderRadius: 50,
              marginRight: 7,
            }}
          >
            <Image
              style={{ width: 35, height: 35, borderRadius: 50 }}
              source={item.img}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ color: "#fff", fontSize: 15 }}>{item.steamer}</Text>
            <Text style={{ color: "#3e3e3e", fontSize: 12 }}>{item.day}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              padding: 7,
              color: "#6947fb",
              borderWidth: 1,
              borderColor: "#6947fb",
            }}
          >
            Theo dõi
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "#fff", paddingVertical: 20 }}>{item.title}</Text>
        <View style={{}}>
          <Image style={{ width: 250, height: 250 }} source={item.img} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <AntDesign name="sharealt" size={18} style={styles.header_icon} />
          <Text style={{ color: "#fff" }}>Chia sẻ</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={18}
            style={styles.header_icon}
          />
          <Text style={{ color: "#fff" }}>{item.amountconment}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <AntDesign name="like2" size={18} style={styles.header_icon} />
          <Text style={{ color: "#fff" }}>{item.amountlike}</Text>
        </View>
      </View>
    </View>
  );
  const renderItem4 = ({ item }) => (
    <View style={{ flex: 1, padding: 5 }}>
      <View style={{ width: "100%", padding: 5 }}>
        <View style={{ width: "100%" }}>
          <Image
            style={{ width: "100%", height: 100, position: "relative" }}
            source={item.img}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{
                color: "#fff",
                flex: 1,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
              }}
            >
              {item.steamer}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1.3,
                justifyContent: "flex-end",
              }}
            >
              <AntDesign name="user" size={15} style={styles.header_icon} />
              <Text
                style={{
                  color: "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}
              >
                {item.amount}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "#1b1b1b", paddingVertical: 10 }}>
          <Text
            style={{
              color: "#fff",
              marginHorizontal: 5,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          >
            {item.title}
          </Text>
          <View style={{ flexDirection: "row", marginHorizontal: 5 }}>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#3e3e3e",
              }}
            >
              <Text
                style={{
                  color: "#3e3e3e",
                  fontSize: 12,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                }}
              >
                {item.game}
              </Text>
              <AntDesign
                name="right"
                size={12}
                style={{
                  color: "#3e3e3e",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </View>
            <Text></Text>
          </View>
        </View>
      </View>
    </View>
  );
  const renderItem5 = ({ item }) => (
    <View style={{ width: "100%", position: "relative" }}>
      <View style={{ width: "100%" }}>
        <Image style={{ width: screenwidth, height: 680 }} source={item.img} />
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "column",
          bottom: 0,
          left: 0,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
            source={item.img}
          />
          <Text
            style={{
              color: "#fff",
              marginHorizontal: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          >
            {item.steamer}
          </Text>
          <View
            style={{
              flexDirection: "row",
              padding: 7,
              backgroundColor: "#622ef3",
              borderRadius: 20,
            }}
          >
            <AntDesign name="plus" size={16} style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Theo dõi</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={{
              color: "#c1b0db",
              shadowColor: "#c1b0db",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          >
            {item.title}
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "column",
          bottom: "30%",
          right: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <AntDesign
            name="like1"
            size={30}
            style={{
              color: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          />
          <Text
            style={{
              color: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          >
            {item.amountlike}
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="comment-processing"
            size={30}
            style={{
              color: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          />
          <Text
            style={{
              color: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          >
            Đánh giá
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <FontAwesome
            name="share"
            size={30}
            style={{
              color: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          />
          <Text
            style={{
              color: "#fff",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            }}
          >
            Chia sẻ
          </Text>
        </View>
      </View>
    </View>
  );
  let screenwidth = Dimensions.get("window").width;
  let screnheight = Dimensions.get("window").height;
  // const[viewactive, setviewactive] = useState(0);
  // onchange = (nativeEvent) => {
  //     if(nativeEvent){
  //         const slice = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
  //         if(slice != viewactive ){
  //             setviewactive(slice);
  //         }
  //     }
  // }
  // key={e} style={viewactive == header1 ? styles.pageactive : styles.page}
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.header1}>
        <Text style={{ fontSize: 18, position: "relative", color: "#fff" }}>
          Live
        </Text>
        <Text style={{ fontSize: 18, position: "relative", color: "#7e7e7e" }}>
          Cộng đồng
        </Text>
        <Text style={{ fontSize: 18, position: "relative", color: "#7e7e7e" }}>
          Recommend
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: 0,
          }}
        >
          <AntDesign
            name="search1"
            size={24}
            style={{ paddingHorizontal: 10, color: "#fff" }}
          />
        </View>
      </View>
      {/* onScroll ={(nativeEvent) => onchange(nativeEvent)} */}
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flex: 1, width: screenwidth, marginBottom: 30 }}>
          <SafeAreaView style={{ backgroundColor: "black" }}>
            <View style={{ marginTop: 30 }}>
              <View style={styles.bottom_chat}>
                <FlatList
                  data={DATA4}
                  renderItem={renderItem4}
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                />
              </View>
            </View>
            <View style={styles.nav}></View>
          </SafeAreaView>
        </View>
        <View style={{ flex: 1, width: screenwidth }}>
          <SafeAreaView style={styles.component}>
            <View style={styles.header}>
              <View style={{ marginVertical: 20 }}>
                <FlatList
                  horizontal
                  data={DATA1}
                  renderItem={renderItem1}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>

            <ScrollView>
              <View style={{ marginBottom: 20 }}>
                <FlatList
                  horizontal
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View style={styles.bottom_post}>
                <FlatList
                  data={DATA2}
                  renderItem={renderItem2}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </ScrollView>

            <View style={styles.nav}></View>
          </SafeAreaView>
        </View>
        <View style={{ flex: 1, width: screenwidth }}>
          <SafeAreaView
            style={{ width: "100%", height: "100%", backgroundColor: "black" }}
          >
            <View style={styles.bottom}>
              <View style={styles.bottom_chat}>
                <ScrollView
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                >
                  <FlatList
                    data={DATA5}
                    renderItem={renderItem5}
                    keyExtractor={(item) => item.id}
                  />
                </ScrollView>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageactive: {
    color: "#fff",
  },
  page: {
    color: "#7e7e7e",
  },
  component: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    marginLeft: -10,
    marginTop: 10,
    backgroundColor: "transparent",
    paddingTop: 20,
  },
  header_icon: {
    paddingHorizontal: 10,
    color: "#fff",
  },
  header_icon1: {
    color: "#fff",
    backgroundColor: "#3e3e3e",
  },
  // bottom:{
  //     marginTop:30,
  //     width:"100%",
  // },
  // bottom_video:{
  //     width:"100%",
  // },
  // item:{
  //     width:"70%",
  //     // padding:5,
  //     // flexDirection: "row",

  // },
  // item1:{
  //     width:"100%",
  //     padding:5
  // },
  // item_img:{
  //     width:"100%"
  // }
});
