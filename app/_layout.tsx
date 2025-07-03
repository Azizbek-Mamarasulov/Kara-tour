import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        {/* Main tabs */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        {/* Modal screen */}
        <Stack.Screen
          name="(modal)/(hotels)/details"
          options={{
            presentation: "modal",
            headerShown: true,
            title: "Hotel Details",
          }}
        />
        <Stack.Screen
          name="(modal)/(places)/details"
          options={{
            presentation: "modal",
            headerShown: true,
            title: "Place Details",
          }}
        />
      </Stack>
    </View>
  );
}
