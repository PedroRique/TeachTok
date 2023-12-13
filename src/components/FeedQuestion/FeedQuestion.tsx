import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { IFeedQuestion } from '../../shared/models/FeedQuestion';
import { styles } from './styles';

export const FeedQuestion = ({ question }: { question: IFeedQuestion }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={[
        styles.feedItem,
        {
          height: Dimensions.get('window').height - tabBarHeight,
        },
      ]}>
      <Text>{question.description}</Text>
    </View>
  );
};
