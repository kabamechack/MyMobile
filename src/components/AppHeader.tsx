import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme/colors';
import Avatar from './Avatar'; 

interface HeaderProps {
  title: string;
  isHome?: boolean;
}

const AppHeader = ({ title, isHome }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center px-5 py-3 bg-white" style={{ height: 60 }}>
      {/* LEFT SIDE: Avatar if Home, Back Arrow if not */}
      {isHome ? (
        <Avatar uri="https://i.pravatar.cc" name="John Doe" />
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <Ionicons name="chevron-back" size={28} color={COLORS.primary} />
        </TouchableOpacity>
      )}

      {/* CENTER: Title */}
  
      {/* CENTER: Only show text if NOT Home */}
      <View className="flex-1 items-center">
        {!isHome && (
          <Text className="text-lg font-bold text-black">{title}</Text>
        )}
      </View>

      {/* RIGHT SIDE: Notification Bell */}
      <TouchableOpacity className="p-2 relative">
        <Ionicons name="notifications-outline" size={26} color={COLORS.text} />
        <View className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
