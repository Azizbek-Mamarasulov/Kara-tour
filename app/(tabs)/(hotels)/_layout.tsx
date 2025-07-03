import { Stack } from "expo-router";
import React from "react";

function HotelsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Mehmonxonalar" }} />
      <Stack.Screen name="details" options={{ title: "Mehmonxona Haqida"}} />
    </Stack>
  );
}

export default HotelsLayout;
