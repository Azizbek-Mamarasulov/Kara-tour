import AppText from "@/components/ui/AppText"; // Adjust path if needed
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export interface FeatureProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureProps) {
  return (
    <View>
      {features.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <MaterialIcons
            name="check-circle"
            size={22}
            color="green"
            style={{ marginRight: 8 }}
          />
          <AppText style={{ fontSize: 16 }}>{item}</AppText>
        </View>
      ))}
    </View>
  );
}
