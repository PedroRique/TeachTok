import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IOption } from '../../shared/models/IOption';
import { styles } from './styles';

export const Options = ({
  options,
  onSelect,
}: {
  options: IOption[];
  onSelect: (option: IOption) => void;
}) => {
  return (
    <>
      {options.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.option}
          onPress={() => onSelect(option)}>
          <Text style={styles.optionText}>{option.answer}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
