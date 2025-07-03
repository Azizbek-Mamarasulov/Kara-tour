import { Image, StyleSheet, View } from "react-native";

export default function CustomSplash() {
  return (
    <View style={styles.splashContainer}>
      <View style={styles.iconsRow}>
        <Image
          source={require("@/assets/images/splash-screen/logo-vazirlik.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/splash-screen/logo-raqamlik.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/splash-screen/logo-tsue.png")}
          style={[styles.icon]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  iconsRow: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 400,
    width: "80%",
  },
  icon: {
    width: 180,
    height: 90,
    marginVertical: 15,
    resizeMode: "contain",
  },
});
