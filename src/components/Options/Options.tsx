import React, { useMemo } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { IOption, IOptionWithResult } from '../../shared/models/IOption';
import { styles } from './styles';

export const Options = ({
  options,
  correctOptions,
}: {
  options: IOption[];
  correctOptions: IOption[];
}) => {
  const optionsWithResult: IOptionWithResult[] = useMemo(() => {
    return options.map(option => ({
      ...option,
      isCorrect: correctOptions.some(
        correctOption => correctOption.id === option.id,
      ),
    }));
  }, [options, correctOptions]);

  const checkAnswer = (option: IOption) => {
    correctOptions.some(correctOption => correctOption.id === option.id);
  };

  return (
    <>
      {optionsWithResult.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.option}
          onPress={() => checkAnswer(option)}>
          {option.isCorrect && (
            <Animated.View
              style={[styles.feedbackBackground, styles.rightBackground]}
            />
          )}
          {!option.isCorrect && (
            <Animated.View
              style={[styles.feedbackBackground, styles.wrongBackground]}
            />
          )}
          <Text style={styles.optionText}>{option.answer}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
