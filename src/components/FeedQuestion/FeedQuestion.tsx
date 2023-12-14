import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bookmarks from '../../../assets/icons/Bookmarks.svg';
import ChevronRightIcon from '../../../assets/icons/ChevronRight.svg';
import Comments from '../../../assets/icons/Comments.svg';
import Like from '../../../assets/icons/Like.svg';
import PlaylistIcon from '../../../assets/icons/Playlist.svg';
import Share from '../../../assets/icons/Share.svg';
import { IFeedQuestion } from '../../shared/models/IFeedQuestion';
import { QuantityIndicator } from '../QuantityIndicator/QuantityIndicator';
import { styles } from './styles';
import { AvatarFollowButton } from '../AvatarFollowButton/AvatarFollowButton';

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
        style={styles.flexOne}
        resizeMode="cover">
        <SafeAreaView style={styles.flexOne}>
          <View style={styles.questionContainer}>
            <View style={styles.flexOne}>
              <Text style={styles.questionText}>{question.question}</Text>

              {question.options.map(option => (
                <View key={option.id} style={styles.questionOption}>
                  <Text style={styles.questionOptionText}>{option.answer}</Text>
                </View>
              ))}

              <Text style={styles.questionUserName}>{question.user.name}</Text>
              <Text style={styles.questionDescription}>
                {question.description}
              </Text>
            </View>

            <View style={styles.sidebarContainer}>
              <AvatarFollowButton avatarImage={question.user.avatar} />
              <QuantityIndicator icon={Like} quantity={87} />
              <QuantityIndicator icon={Comments} quantity={2} />
              <QuantityIndicator icon={Bookmarks} quantity={203} />
              <QuantityIndicator icon={Share} quantity={17} />
            </View>
          </View>

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
