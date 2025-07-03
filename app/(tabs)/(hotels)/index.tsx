import TitleWithIcon from "@/components/places/TitleWithIcon";
import ProportionalImage from "@/components/ProportionalImage2";
import { hotels } from "@/constants/hotels";
import { useRouter } from "expo-router";
import { ScrollView, TouchableNativeFeedback, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView>
      {hotels.map((hotel) => (
        <TouchableNativeFeedback
          key={hotel.id}
          onPress={() => {
            router.push({ pathname: "/details", params: { id: hotel.id } });
          }}
        >
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
              margin: 10,
              backgroundColor: "white",
              elevation: 2,
            }}
          >
            <ProportionalImage source={hotel.images[0]} />
            <TitleWithIcon title={hotel.title} rating={hotel.rating} />
          </View>
        </TouchableNativeFeedback>
      ))}
    </ScrollView>
  );
}
