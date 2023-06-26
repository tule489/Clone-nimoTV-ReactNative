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
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { Text, View, Image, FlatList } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

const DATA = [
  {
    key: 1,
    name: "Meta TFT",
    time: "11/12/2022",
    avatar: require("../../Assets/logo_TFT.png"),
    videoID: "GMBf5gz53JU",
  },
  {
    key: 2,
    name: "Meta TFT",
    time: "11/12/2022",
    avatar: require("../../Assets/logo_TFT.png"),
    videoID: "GMBf5gz53JU",
  },
  {
    key: 3,
    name: "Meta TFT",
    time: "11/12/2022",
    avatar: require("../../Assets/logo_TFT.png"),
    videoID: "GMBf5gz53JU",
  },
];

const DATA_1 = [
  {
    key: 1,
    name: "Pino",
    title: "Ước bụttttt ♪ ~",
    view: "38021",
    image: require("../../Assets/pino.png"),
    avatar: require("../../Assets/logo_pino.png"),
  },
  {
    key: 2,
    name: "Pino",
    title: "Ước bụttttt ♪ ~",
    view: "38021",
    image: require("../../Assets/pino.png"),
    avatar: require("../../Assets/logo_pino.png"),
  },
  {
    key: 3,
    name: "Pino",
    title: "Ước bụttttt ♪ ~",
    view: "38021",
    image: require("../../Assets/pino.png"),
    avatar: require("../../Assets/logo_pino.png"),
  },
  {
    key: 4,
    name: "Pino",
    title: "Ước bụttttt ♪ ~",
    view: "38021",
    image: require("../../Assets/pino.png"),
    avatar: require("../../Assets/logo_pino.png"),
  },
  {
    key: 5,
    name: "Pino",
    title: "Ước bụttttt ♪ ~",
    view: "38021",
    image: require("../../Assets/pino.png"),
    avatar: require("../../Assets/logo_pino.png"),
  },
];

const Item = ({ name, time, videoID, avatar }) => (
  <View style={{ width: 200, backgroundColor: "#FFF", marginRight: 10 }}>
    <YoutubeIframe height={120} videoId={videoID}></YoutubeIframe>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
        paddingLeft: 10,
      }}
    >
      <Image
        source={avatar}
        style={{
          width: 40,
          height: 40,
          resizeMode: "contain",
          marginRight: 10,
        }}
      />
      <View style={{ display: "flex", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "800" }}>{name}</Text>
        <Text style={{ color: "#C0C0C0", fontSize: 12 }}>{time}</Text>
      </View>
    </View>
  </View>
);

const Item_1 = ({ name, title, view, avatar, image }) => (
  <View style={{ width: 200, marginRight: 10 }}>
    <View>
      <Image
        source={image}
        style={{
          width: "100%",
          resizeMode: "cover",
          height: 100,
        }}
      />
      <View
        style={{
          padding: 3,
          backgroundColor: "rgba(0,0,0,0.65)",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          width: 50,
          position: "absolute",
          top: 0,
          left: 6,
        }}
      >
        <Text style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}>
          GTA5
        </Text>
      </View>
      <View
        style={{
          padding: 3,
          backgroundColor: "#FE6560",
          borderBottomLeftRadius: 5,
          width: 50,
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Text style={{ color: "#FFF", textAlign: "center", fontSize: 10 }}>
          Dự đoán
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 5,
          right: 8,
        }}
      >
        <Octicons
          name="people"
          size={15}
          color={"#FFF"}
          style={{ marginRight: 3 }}
        />
        <Text style={{ color: "#FFF", fontSize: 12, fontWeight: "800" }}>
          {view}
        </Text>
      </View>
    </View>
    <View
      style={{
        padding: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFF",
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
            marginRight: 6,
          }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: "800" }}>{title}</Text>
        <Text style={{ fontSize: 12, color: "#9E9E9E" }}>{name}</Text>
      </View>
    </View>
  </View>
);

const Live = () => {
  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      time={item.time}
      videoID={item.videoID}
      avatar={item.avatar}
    />
  );

  const renderItem_1 = ({ item }) => (
    <Item_1
      name={item.name}
      title={item.title}
      view={item.view}
      image={item.image}
      avatar={item.avatar}
    />
  );

  return (
    <View style={{ width: "100%" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ marginLeft: 10, marginBottom: 20 }}>
          <Text style={{ fontWeight: "800" }}>Streamer có view cao nhất</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", alignItems: "center", width: 80 }}>
            <Image
              source={require("../../Assets/logo_mixi.png")}
              style={{ width: 55, height: 55, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 12 }}>MixiGaming</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center", width: 80 }}>
            <Image
              source={require("../../Assets/logo_boongminz.png")}
              style={{ width: 55, height: 55, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 12 }}>Boongminz</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center", width: 80 }}>
            <Image
              source={require("../../Assets/snake.png")}
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ fontSize: 12 }}>Snake</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center", width: 80 }}>
            <Image
              source={require("../../Assets/lobo_rambo.png")}
              style={{
                width: 55,
                height: 55,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ fontSize: 12 }}>Rambo</Text>
          </View>
        </View>
      </View>
      <View style={{ marginVertical: 30 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="live-tv"
              size={25}
              color={"#FE625F"}
              style={{ marginRight: 7 }}
            />
            <Text style={{ fontWeight: "800", fontSize: 20 }}>
              Đang live{" "}
              <Text style={{ color: "#A4A4A4", fontWeight: "normal" }}>
                (2)
              </Text>
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons name="bell" size={25} color={"#68A8FD"} />
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#F5F5F5" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "49%" }}>
            <View>
              <Image
                source={require("../../Assets/live_ali.png")}
                style={{
                  width: "100%",
                  resizeMode: "contain",
                  height: 100,
                }}
              />
              <View
                style={{
                  padding: 3,
                  backgroundColor: "rgba(0,0,0,0.65)",
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  width: 50,
                  position: "absolute",
                  top: 0,
                  left: 6,
                }}
              >
                <Text
                  style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                >
                  GTA5
                </Text>
              </View>
              <View
                style={{
                  padding: 3,
                  backgroundColor: "#FE6560",
                  borderBottomLeftRadius: 5,
                  width: 50,
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                <Text
                  style={{ color: "#FFF", textAlign: "center", fontSize: 10 }}
                >
                  Dự đoán
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 5,
                  right: 8,
                }}
              >
                <Octicons
                  name="people"
                  size={15}
                  color={"#FFF"}
                  style={{ marginRight: 3 }}
                />
                <Text
                  style={{ color: "#FFF", fontSize: 12, fontWeight: "800" }}
                >
                  140802
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 5,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#FFF",
              }}
            >
              <View>
                <Image
                  source={require("../../Assets/avatar_1.png")}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    borderRadius: 50,
                    marginRight: 6,
                  }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "800" }}>ƯỚC BỤT :(</Text>
                <Text style={{ fontSize: 12, color: "#9E9E9E" }}>
                  AliciaMeow
                </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "49%" }}>
            <View>
              <Image
                source={require("../../Assets/live_ali.png")}
                style={{
                  width: "100%",
                  resizeMode: "contain",
                  height: 100,
                }}
              />
              <View
                style={{
                  padding: 3,
                  backgroundColor: "rgba(0,0,0,0.65)",
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  width: 50,
                  position: "absolute",
                  top: 0,
                  left: 6,
                }}
              >
                <Text
                  style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}
                >
                  GTA5
                </Text>
              </View>
              <View
                style={{
                  padding: 3,
                  backgroundColor: "#FE6560",
                  borderBottomLeftRadius: 5,
                  width: 50,
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                <Text
                  style={{ color: "#FFF", textAlign: "center", fontSize: 10 }}
                >
                  Dự đoán
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 5,
                  right: 8,
                }}
              >
                <Octicons
                  name="people"
                  size={15}
                  color={"#FFF"}
                  style={{ marginRight: 3 }}
                />
                <Text
                  style={{ color: "#FFF", fontSize: 12, fontWeight: "800" }}
                >
                  140802
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 5,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#FFF",
              }}
            >
              <View>
                <Image
                  source={require("../../Assets/avatar_1.png")}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    borderRadius: 50,
                    marginRight: 6,
                  }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "800" }}>ƯỚC BỤT :(</Text>
                <Text style={{ fontSize: 12, color: "#9E9E9E" }}>
                  AliciaMeow
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingLeft: 40, paddingTop: 20 }}>
          <Text style={{ fontWeight: "800", fontSize: 20 }}>
            Video đề xuất cho bạn
          </Text>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              horizontal
            />
          </View>
        </View>
        <View style={{ paddingLeft: 40, paddingVertical: 20 }}>
          <Text style={{ fontWeight: "800", fontSize: 20 }}>
            Đề xuất cho bạn
          </Text>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={DATA_1}
              renderItem={renderItem_1}
              keyExtractor={(item) => item.key}
              horizontal
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Live;
