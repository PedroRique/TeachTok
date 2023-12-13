import React from 'react';
import { FlatList, View } from 'react-native';
import { FeedPost } from '../../components/FeedPost';
import { styles } from './styles';

export const FeedScreen = () => {
  const list = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <FeedPost post={item} />}
        pagingEnabled
      />
    </View>
  );
};
