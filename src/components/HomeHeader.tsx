import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS } from '../theme/colors';
import Avatar from './Avatar';

interface AppHeaderProps {
  title?: string;
  isHome?: boolean;
}

const AppHeader = ({ title, isHome }: AppHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center px-5 py-3 bg-white">
      {isHome ? (
        // Show Avatar on Home
        <Avatar uri="https://i.pravatar.cc" name="John Doe" />
      ) : (
        // Show Back Arrow on other screens
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={COLORS.text} />
        </TouchableOpacity>
      )}

      <Text className="text-lg font-bold text-black">{title}</Text>

      <TouchableOpacity className="p-2 relative">
        <Ionicons name="notifications-outline" size={26} color={COLORS.text} />
        <View className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;









