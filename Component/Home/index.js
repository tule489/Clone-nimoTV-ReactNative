import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
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
import styles from "./style";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
    url: "https://pic-bstarstatic.akamaized.net/ugc/e8d0f25d71f98d5261f81d05b4ce7832.jpg",
  },
  {
    url: "https://www.savebutonu.com/wp-content/uploads/2021/01/default_share_img.png",
  },
  {
    url: "https://image.thanhnien.vn/1200x630/Uploaded/2022/hgjokv/2019_03_24/giai-dau-nimotv-hinh-1_datq.jpg",
  },
];

const DATA = [
  {
    key: 1,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 2,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 3,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 4,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 5,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 6,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 7,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 8,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 9,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
  {
    key: 10,
    name: "MixiGaming",
    title: "Hí anh em",
    view: "54.4k",
    tag: "GTA5",
    image: require("../../Assets/1.png"),
  },
];

const Item = ({ name, title, view, tag, image }) => (
  <View style={{ width: "49%" }}>
    <View>
      <Image source={image} style={{ width: "100%", height: 100 }} />
      <View style={{ position: "absolute", bottom: 4, left: 4 }}>
        <Text style={{ color: "#EEEEEE", fontSize: 10 }}>{name}</Text>
      </View>
      <View style={{ position: "absolute", bottom: 4, right: 4 }}>
        <Text style={{ color: "#FFF", fontSize: 10 }}>
          <Fontisto name="fire" color={"#C0C0C0"} /> {view}
        </Text>
      </View>
    </View>
    <View style={{ padding: 8 }}>
      <Text style={{ color: "#000" }}>{title}</Text>
      <View
        style={{
          borderWidth: 1,
          opacity: 0.5,
          paddingHorizontal: 5,
          paddingVertical: 3,
          width: 50,
          borderRadius: 4,
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 10 }}>{tag} </Text>
        <View style={{ position: "absolute", top: 3, right: 5 }}>
          <MaterialIcons name="keyboard-arrow-right" />
        </View>
      </View>
    </View>
  </View>
);

const Home = () => {
  const [key, setKey] = useState(1);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      name={item.name}
      view={item.view}
      tag={item.tag}
      image={item.image}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      <View>
        <TextInput placeholder="Tìm kiếm" style={styles.searchingInput} />
        <View style={{ position: "absolute", top: 10, left: 19 }}>
          <Fontisto name="search" color={"#BEBEBE"} size={15} />
        </View>
      </View>
      <ScrollView style={styles.navbar} horizontal={true}>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(1)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 1 ? styles.active : ""}>Đề xuất</Text>
          </Text>
          {key === 1 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(2)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 2 ? styles.active : ""}>NimoShow</Text>
          </Text>
          {key === 2 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(3)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 3 ? styles.active : ""}>GTA5</Text>
          </Text>
          {key === 3 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(4)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 4 ? styles.active : ""}>LMHT</Text>
          </Text>
          {key === 4 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(5)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 5 ? styles.active : ""}>FIFA Game</Text>
          </Text>
          {key === 5 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(6)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 6 ? styles.active : ""}>PUBG</Text>
          </Text>
          {key === 6 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => setKey(7)}>
          <Text style={{ fontSize: 16, color: "#999999", marginBottom: 5 }}>
            <Text style={key === 7 ? styles.active : ""}>Game Offline</Text>
          </Text>
          {key === 7 && (
            <View style={{ display: "flex", alignItems: "center" }}>
              <View
                style={{ width: 15, borderWidth: 2, borderRadius: 8 }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
      <Slideshow
        position={position}
        dataSource={dataSource}
        height={120}
        arrowLeft={<Image />}
        arrowRight={<Image />}
      />
      <View style={{ height: 20 }}></View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </ScrollView>
  );
};

export default Home;
