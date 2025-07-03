import React from "react";
import { View } from "react-native";
import AppText from "../ui/AppText";
import FeatureList, { FeatureProps } from "./FeatureList";

interface PriceProps extends FeatureProps {
  price: string;
}

function PriceItem({ features, price }: PriceProps) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AppText style={{ fontSize: 18, fontWeight: "bold" }}>
          Uch Kunlik
        </AppText>
        <View
          style={{ backgroundColor: "#ff704d", padding: 5, borderRadius: 10 }}
        >
          <AppText style={{ color: "white" }}>{price} so'm</AppText>
        </View>
      </View>
      <FeatureList features={features} />
    </View>
  );
}

export default PriceItem;
