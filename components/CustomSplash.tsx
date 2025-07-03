import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync();

interface CustomSplashProps {
  onFinish: () => void;
}

export default function CustomSplash({ onFinish }: CustomSplashProps) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const { width: screenWidth } = useWindowDimensions();

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate asset loading or any prep you want
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(async () => {
        await SplashScreen.hideAsync();
        onFinish(); // tell parent we are done
      });
    }
  }, [appIsReady]);

  return (
    <Animated.View
      style={[styles.splashContainer, { opacity: fadeAnim }]}
      onLayout={onLayoutRootView}
    >
      <View style={[styles.iconsRow, { maxWidth: screenWidth * 0.8 }]}>
        <Image
          source={require("@/assets/images/splash-screen/logo-agentlik.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/splash-screen/logo-tsue.png")}
          style={styles.icon}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/splash-screen/logo-vazirlik.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    flex: 1,
    height: 60,
    marginHorizontal: 10,
  },
});
