import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../ui/AppText";

// Define a union type for autocomplete
export type FacilityLabel =
  | "Free WiFi"
  | "Non-smoking rooms"
  | "Free parking"
  | "Facilities for disabled guests"
  | "Family rooms"
  | "Room service"
  | "Tea/coffee maker in all rooms"
  | "Breakfast";

// Default list using typed labels
const DEFAULT_FACILITIES: FacilityLabel[] = [
  "Free WiFi",
  "Non-smoking rooms",
  "Free parking",
  "Facilities for disabled guests",
  "Family rooms",
  "Room service",
  "Tea/coffee maker in all rooms",
  "Breakfast",
];

// Map keywords to MaterialIcons
const iconMap: { [key: string]: keyof typeof MaterialIcons.glyphMap } = {
  wifi: "wifi",
  smoke: "smoke-free",
  parking: "local-parking",
  disabled: "accessible",
  family: "family-restroom",
  room: "room-service",
  tea: "coffee",
  coffee: "coffee",
  breakfast: "free-breakfast",
  shuttle: "airport-shuttle",
};

interface Props {
  items?: FacilityLabel[]; // Typed for autocompletion
}

function getIconForLabel(label: string): keyof typeof MaterialIcons.glyphMap {
  const lower = label.toLowerCase();
  for (const key in iconMap) {
    if (lower.includes(key)) return iconMap[key];
  }
  return "check"; // default fallback icon
}

export default function AvailableFacilities({ items }: Props) {
  const facilities = items || DEFAULT_FACILITIES;

  return (
    <View style={styles.container}>
      {facilities.map((label, idx) => (
        <View key={idx} style={styles.item}>
          <MaterialIcons name={getIconForLabel(label)} size={20} color="#444" />
          <AppText style={styles.text}>{label}</AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: "#222",
  },
});
