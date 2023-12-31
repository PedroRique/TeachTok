import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bookmarks from '../../../assets/icons/Bookmarks.svg';
import ChevronRightIcon from '../../../assets/icons/ChevronRight.svg';
import Comments from '../../../assets/icons/Comments.svg';
import Like from '../../../assets/icons/Like.svg';
import PlaylistIcon from '../../../assets/icons/Playlist.svg';
import Share from '../../../assets/icons/Share.svg';
import { IFeedQuestion } from '../../shared/models/IFeedQuestion';
import { IOption } from '../../shared/models/IOption';
import { IQuestionReveal } from '../../shared/models/IQuestionReveal';
import { AvatarFollowButton } from '../AvatarFollowButton/AvatarFollowButton';
import { Options } from '../Options/Options';
import { QuantityIndicator } from '../QuantityIndicator/QuantityIndicator';
import { styles } from './styles';

export const FeedQuestion = ({ question }: { question: IFeedQuestion }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const [correctOptions, setCorrectOptions] = useState<IOption[]>([]);

  const getAnswer = useCallback(() => {
    return fetch(
      `https://cross-platform.rp.devfactory.com/reveal?id=${question.id}`,
    )
      .then(response => response.json())
      .then((json: IQuestionReveal) => {
        setCorrectOptions(json.correct_options);
      })
      .catch(error => {
        console.error(error);
      });
  }, [question]);

  useEffect(() => {
    getAnswer();
  }, [getAnswer]);

  const renderDescription = (text: string) => {
    return text.split(' ').map((word, index) => {
      if (word.startsWith('#')) {
        return (
          <Text key={index} style={styles.boldText}>
            {word + ' '}
          </Text>
        );
      }
      return <Text key={index}>{word + ' '}</Text>;
    });
  };

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
        <SafeAreaView style={[styles.flexOne, styles.safeAreaContainer]}>
          <View style={styles.questionContainer}>
            <View style={styles.flexOne}>
              <Text
                style={styles.questionText}
                numberOfLines={5}
                adjustsFontSizeToFit>
                {question.question}
              </Text>

              <Options
                options={question.options}
                correctOptions={correctOptions}
              />

              <Text style={styles.questionUserName}>{question.user.name}</Text>
              <Text style={styles.questionDescription}>
                {renderDescription(question.description)}
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
