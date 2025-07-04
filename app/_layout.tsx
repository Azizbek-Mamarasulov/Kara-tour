import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

import CustomSplash from "@/components/CustomSplash";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (!fontsLoaded || isLoading) {
    return <CustomSplash />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack initialRouteName="(tabs)">
        {/* Main tabs */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        {/* Modal screen */}
        <Stack.Screen
          name="(modals)/hotel"
          options={{
            presentation: "modal",
            headerShown: true,
            title: "Hotel Details",
          }}
        />
        <Stack.Screen
          name="(modals)/place"
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
