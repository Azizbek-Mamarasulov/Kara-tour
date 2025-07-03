import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import AppText from "../ui/AppText";
import RatingStars from "./RatingStars";

interface TitleWithIconProps {
  title: string;
  rating: number;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function TitleWithIcon({
  title,
  rating,
  containerStyle,
}: TitleWithIconProps) {
  return (
    <View
      style={[
        {
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        containerStyle,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="place" size={18} color="#333" />
        <AppText
          style={{
            fontSize: 18,
            marginLeft: 8,
            color: "#1A1A1A",
            fontFamily: "Roboto_700Bold",
          }}
        >
          {title}
        </AppText>
      </View>
      <RatingStars rating={rating} />
    </View>
  );
}
