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
import { Text, View, Image, FlatList } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

const DATA = [
  {
    key: 1,
    name: "AliciaMeow",
    avatar: require("../../Assets/avatar_1.png"),
    title: "Highlight PUBG",
    time: "Hôm qua",
    videoID: "eTXawmbxfls",
  },
  {
    key: 2,
    name: "AliciaMeow",
    avatar: require("../../Assets/avatar_1.png"),
    title: "Highlight PUBG",
    time: "Hôm qua",
    videoID: "eTXawmbxfls",
  },
  {
    key: 3,
    name: "AliciaMeow",
    avatar: require("../../Assets/avatar_1.png"),
    title: "Highlight PUBG",
    time: "Hôm qua",
    videoID: "eTXawmbxfls",
  },
];

const Item = ({ name, title, time, videoID, avatar }) => (
  <View style={{ marginBottom: 10 }}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          source={avatar}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <Text style={{ fontWeight: "800", fontSize: 18 }}>{name}</Text>
        <Text style={{ fontSize: 12, color: "#717171" }}>{time}</Text>
      </View>
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Entypo name="dots-three-horizontal" size={20} />
      </View>
    </View>
    <View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{title}</Text>
      </View>
      <YoutubeIframe height={200} videoId={videoID}></YoutubeIframe>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#F8F8F8",
      }}
    >
      <View
        style={{
          display: "flex",
          width: "33.33%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EvilIcons name="share-google" size={25} />
        <Text style={{ fontWeight: "600" }}>Chia sẻ</Text>
      </View>
      <View
        style={{
          display: "flex",
          width: "33.33%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="chatbox-ellipses-outline"
          size={20}
          style={{ marginRight: 5 }}
        />
        <Text>0</Text>
      </View>
      <View
        style={{
          display: "flex",
          width: "33.33%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="like2" size={20} style={{ marginRight: 5 }} />
        <Text>0</Text>
      </View>
    </View>
  </View>
);

const Post = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      name={item.name}
      videoID={item.videoID}
      avatar={item.avatar}
      time={item.time}
    />
  );

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Post;
