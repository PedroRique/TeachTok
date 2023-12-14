import React, { useMemo, useState } from 'react';
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
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<IOption>();

  const optionsWithResult: IOptionWithResult[] = useMemo(() => {
    return options.map(option => ({
      ...option,
      isCorrect: correctOptions.some(
        correctOption => correctOption.id === option.id,
      ),
      isSelected: selectedAnswer?.id === option.id,
    }));
  }, [options, correctOptions, selectedAnswer]);

  const selectAnswer = (option: IOption) => {
    setRevealAnswer(true);
    setSelectedAnswer(option);
  };

  return (
    <>
      {optionsWithResult.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.option}
          onPress={() => selectAnswer(option)}>
          {revealAnswer && (
            <>
              {option.isCorrect && (
                <Animated.View
                  style={[styles.feedbackBackground, styles.rightBackground]}
                />
              )}
              {!option.isCorrect && option.isSelected && (
                <Animated.View
                  style={[styles.feedbackBackground, styles.wrongBackground]}
                />
              )}
            </>
          )}
          <Text style={styles.optionText}>{option.answer}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
