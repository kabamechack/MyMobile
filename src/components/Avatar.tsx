import React from 'react';
import {Text, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';

interface AvatarProps {
  uri?: string;
  name?: string;
  size?: number;
}

const Avatar = ({ uri, name = 'User', size = 50 }: AvatarProps) => {
  const initials = name.charAt(0).toUpperCase();

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      style={{ 
        width: size, 
        height: size, 
        borderRadius: size / 2, 
        borderColor: COLORS.border,
        borderWidth: 1,
        backgroundColor: '#F3F4F6' 
      }}
      className="justify-center items-center overflow-hidden"
    >
      {uri ? (
        <Image 
          source={{ uri }} 
          className="w-full h-full" 
          resizeMode="cover"
        />
      ) : (
        <Text style={{ color: COLORS.muted }} className="font-bold">
          {initials}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Avatar;
