import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const AvatarFollowButton = ({
  avatarImage,
}: {
  avatarImage: string;
}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image style={styles.avatarImage} source={{ uri: avatarImage }} />
      <View style={styles.followBtn}>
        <Text style={styles.followBtnText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};
