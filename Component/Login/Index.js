import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.h1}>
          <View style={styles.login}>
            <Ionicons
              name="chevron-back"
              size={30}
              color="black"
              style={{ marginLeft: 10 }}
              onPress={() => props.setKey(5)}
            />
            <Text style={styles.txtdn}>Đăng nhập</Text>
          </View>
        </View>
        <View style={styles.h2}>
          <View style={styles.content}>
            <View style={styles.contentTop}>
              <View style={styles.contentTopLeft}>
                <Image style={styles.logo} source={require("./assets/1.png")} />
                <Image style={styles.logo} source={require("./assets/2.png")} />
              </View>
              <View style={styles.contentTopRight}>
                <TextInput
                  style={styles.usernameInput}
                  placeholder="Nhập số điẹn thoại di động"
                />
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Nhập mật khẩu"
                />
              </View>
            </View>
            <View style={styles.contentBottom}>
              <View style={styles.signUpButton}>
                <Text style={{ color: "#FFFFFF" }}>Đăng ký</Text>
              </View>
              <View style={styles.loginButton}>
                <TouchableOpacity onPress={() => props.setKey(1)}>
                  <Text style={{ color: "#C0C0C0" }}>Đăng nhập</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TextInput
                style={styles.forgotpasswordInput}
                placeholder="Quên mật khẩu"
              />
            </View>
            <View style={styles.under}>
              <Text style={{ textAlign: "center" }}>
                Bạn đăng nhập có nghĩa đồng ý
                <Text style={styles.innerText}> Thỏa Thuận Người Dùng </Text>
                và
                <Text style={styles.innerText}> Chính Sách Bảo Mật </Text>
                của chúng tôi
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txtdn: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  head: {},
  h1: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
    marginTop: 50,
  },
  h2: {
    width: "100%",
    padding: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  contentTop: {
    width: "100%",
    height: 180,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  contentTopLeft: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: -20,
  },
  login: {
    width: 235,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    left: -70,
    fontSize: 36,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    flexDirection: "row",
    height: 55,
    width: 200,
    alignItems: "center",
    left: -15,
  },
  logo: {
    width: 50,
    height: 40,
  },
  usernameInput: {
    width: 200,
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 50,
  },
  passwordInput: {
    width: 200,
    borderBottomWidth: 1,
    padding: 10,
  },
  contentBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    fontSize: 26,
  },
  signUpButton: {
    width: 120,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#894DFD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: 120,
    height: 50,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f3f3f3",
    borderColor: "#894DFD",
    borderWidth: 1,
  },
  forgotpasswordInput: {
    width: 120,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 70,
    right: -200,
  },
  under: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    marginTop: 380,
    right: -5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  // baseText: {},
  innerText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
