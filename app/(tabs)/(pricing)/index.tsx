import PriceItem from "@/components/pricing/PriceItem";
import { pricing } from "@/constants/pricing";
import { ScrollView, View } from "react-native";

function Index() {
  return (
    <ScrollView>
      {pricing.map((price, index) => (
        <View key={index} style={{ margin: 10 }}>
          <PriceItem
            key={price.price}
            price={price.price}
            features={price.features}
          />
        </View>
      ))}
    </ScrollView>
  );
}

export default Index;
