import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={{
          title: "Asosiy",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(hotels)"
        options={{
          title: "Mehmonxonalar",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="hotel" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(places)"
        options={{
          headerShown: false,
          title: "Joylar",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="place" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: "Turlar",
          headerTitle: "Tur paketlarning narxlari",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="flight" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
