import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

interface RatingStarsProps {
  rating: number; // rating value 0-5
  maxStars?: number; // optional max stars, default 5
  size?: number; // star icon size, default 20
}

export default function RatingStars({
  rating,
  maxStars = 5,
  size = 18,
}: RatingStarsProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(maxStars)].map((_, i) => (
        <MaterialIcons
          key={i}
          name={i < rating ? "star" : "star-border"}
          size={size}
          color={i < rating ? "#FFD700" : "#CCC"} // gold or gray
        />
      ))}
    </View>
  );
}
