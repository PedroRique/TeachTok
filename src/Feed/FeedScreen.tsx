import React from 'react';
import { Dimensions, FlatList, ListRenderItem, Text, View } from 'react-native';
import { styles } from './styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const FeedScreen = () => {
  const list = [1, 2, 3, 4];
  const tabBarHeight = useBottomTabBarHeight();

  const renderItem: ListRenderItem<number> | null | undefined = ({ item }) => (
    <View
      style={[
        styles.feedItem,
        {
          height: Dimensions.get('window').height - tabBarHeight,
        },
      ]}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={renderItem} pagingEnabled />
    </View>
  );
};
