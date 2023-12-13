import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { IFeedQuestion } from '../../shared/models/IFeedQuestion';
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
      <ImageBackground
        source={{ uri: question.image }}
        style={styles.imageBackground}
        resizeMode="cover">
        <Text>{question.question}</Text>
        <Text>{question.description}</Text>
      </ImageBackground>
    </View>
  );
};
