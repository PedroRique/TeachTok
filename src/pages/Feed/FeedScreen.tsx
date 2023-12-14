import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { FeedQuestion } from '../../components/FeedQuestion/FeedQuestion';
import { IFeedQuestion } from '../../shared/models/IFeedQuestion';
import { styles } from './styles';

export const FeedScreen = () => {
  const [questions, setQuestions] = useState<IFeedQuestion[]>([]);

  const getNextQuestion = useCallback(() => {
    return fetch('https://cross-platform.rp.devfactory.com/for_you')
      .then(response => response.json())
      .then((json: IFeedQuestion) => {
        setQuestions(prevQuestions => [...prevQuestions, json]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getNextQuestion();
  }, [getNextQuestion]);

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={({ item }) => <FeedQuestion question={item} />}
        onEndReached={getNextQuestion}
        pagingEnabled
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
};
