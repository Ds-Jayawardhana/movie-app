import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-5xl text-gray-100">Welcome!</Text>
      {/* <Link href="/onboard">
        <Text className="mt-4 text-blue-500">Onboard</Text>
      </Link>
      <Link href="/Movie/avengers">
        <Text className="mt-4 text-blue-500">Avenger Movie</Text>
      </Link> */}
    </View>
  );
}
