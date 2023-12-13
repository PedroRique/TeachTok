import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { styles } from '../pages/Feed/styles';

export const FeedPost = ({ post }: { post: number }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={[
        styles.feedItem,
        {
          height: Dimensions.get('window').height - tabBarHeight,
        },
      ]}>
      <Text>{post}</Text>
    </View>
  );
};
