import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 1. Header Component */}

      {/* 2. Main Body Content */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-semibold text-black">
          Home Screen Content
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
