import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Option } from '../../shared/models/IFeedQuestion';
import { styles } from './styles';

export const Options = ({ options }: { options: Option[] }) => {
  return (
    <>
      {options.map(option => (
        <TouchableOpacity key={option.id} style={styles.option}>
          <Text style={styles.optionText}>{option.answer}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
