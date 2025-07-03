import TitleWithIcon from "@/components/places/TitleWithIcon";
import PriceItem from "@/components/pricing/PriceItem";
import ProportionalImage from "@/components/ProportionalImage";
import ProportionalImage2 from "@/components/ProportionalImage2";
import AppText from "@/components/ui/AppText";
import { hotels } from "@/constants/hotels";
import { places } from "@/constants/places";
import { pricing } from "@/constants/pricing";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, TouchableNativeFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        <View style={{ paddingHorizontal: 12, paddingVertical: 7 }}>
          <AppText style={{ fontSize: 24, fontWeight: "bold" }}>Joylar</AppText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {places.slice(0, 3).map((place, index) => (
            <TouchableNativeFeedback
              key={index}
              onPress={() =>
                router.push({
                  pathname: "/(modals)/(places)/details",
                  params: { id: place.id, title: place.title },
                })
              }
            >
              <View
                key={index}
                style={{
                  margin: 10,
                  borderRadius: 10,
                  overflow: "hidden",
                  backgroundColor: "white",
                  elevation: 2,
                  height: 300, // fixed width for horizontal cards
                  maxWidth: 250,
                  flex: 1,
                }}
              >
                <ProportionalImage
                  imageStyle={{ flex: 8, maxHeight: 270 }}
                  resizeMode="cover"
                  uri={place.image}
                  style={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                />
                <TitleWithIcon
                  containerStyle={{ flex: 2, maxHeight: 50 }}
                  title={place.title}
                  rating={place.rating}
                />
              </View>
            </TouchableNativeFeedback>
          ))}

          {/* See More button with vertical big height but thin width */}
          <TouchableNativeFeedback
            onPress={() => router.push("/(tabs)/(places)")}
          >
            <View
              style={{
                margin: 10,
                width: 40,
                backgroundColor: "#FF7F50",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                elevation: 2,
              }}
            >
              <MaterialIcons name="chevron-right" size={32} color="white" />
            </View>
          </TouchableNativeFeedback>
        </ScrollView>

        {/* hotels */}
        <View style={{ paddingHorizontal: 12, paddingVertical: 7 }}>
          <AppText style={{ fontSize: 24, fontWeight: "bold" }}>
            Mehmonxonalar
          </AppText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotels.slice(0, 3).map((hotel, index) => (
            <TouchableNativeFeedback
              key={index}
              onPress={() => {
                router.push({
                  pathname: "/(modals)/(hotels)/details",
                  params: { id: hotel.id },
                });
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  backgroundColor: "white",
                  elevation: 2,
                  height: 300,
                  maxWidth: 250,
                  margin: 10,
                  flex: 1,
                }}
              >
                <ProportionalImage2
                  imageStyle={{ flex: 8 }}
                  source={hotel.images[0]}
                  resizeMode="cover"
                />
                <TitleWithIcon
                  containerStyle={{ flex: 2, maxHeight: 50 }}
                  title={hotel.title}
                  rating={hotel.rating}
                />
              </View>
            </TouchableNativeFeedback>
          ))}

          {/* See More button with vertical big height but thin width */}
          <TouchableNativeFeedback
            onPress={() => router.push("/(tabs)/(hotels)")}
          >
            <View
              style={{
                margin: 10,
                width: 40,
                backgroundColor: "#FF7F50",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                elevation: 2,
              }}
            >
              <MaterialIcons name="chevron-right" size={32} color="white" />
            </View>
          </TouchableNativeFeedback>
        </ScrollView>

        <View style={{ paddingHorizontal: 12, paddingVertical: 7 }}>
          <AppText style={{ fontSize: 24, fontWeight: "bold" }}>
            Tur Paketlar
          </AppText>
        </View>
        <ScrollView
          contentContainerStyle={{ marginBottom: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {pricing.slice(0, 3).map((price, index) => (
            <View key={index} style={{ padding: 10, minWidth: 350 }}>
              <PriceItem
                key={price.price}
                price={price.price}
                features={price.features}
              />
            </View>
          ))}

          {/* See More button with vertical big height but thin width */}
          <TouchableNativeFeedback
            onPress={() => router.push("/(tabs)/(pricing)")}
          >
            <View
              style={{
                width: 40,
                margin: 10,
                backgroundColor: "#FF7F50",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                elevation: 2,
              }}
            >
              <MaterialIcons name="chevron-right" size={32} color="white" />
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
