import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { IFeedQuestion } from '../../shared/models/IFeedQuestion';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlaylistIcon from '../../../assets/icons/Playlist.svg';
import ChevronRightIcon from '../../../assets/icons/ChevronRight.svg';

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
        <SafeAreaView>
          <Text style={styles.questionText}>{question.question}</Text>

          {question.options.map(option => (
            <View key={option.id} style={styles.questionOption}>
              <Text style={styles.questionOptionText}>{option.answer}</Text>
            </View>
          ))}

          <Text style={styles.questionUserName}>{question.user.name}</Text>
          <Text style={styles.questionDescription}>{question.description}</Text>
          <View style={styles.questionPlaylist}>
            <PlaylistIcon />
            <Text style={styles.questionPlaylistText}>
              Playlist • {question.playlist}
            </Text>
            <ChevronRightIcon />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
