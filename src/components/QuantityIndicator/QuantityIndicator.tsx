import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';

export const QuantityIndicator = ({
  quantity,
  icon: Icon,
}: {
  quantity: number;
  icon: React.FC<SvgProps>;
}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Icon fill="white" />
      <Text style={styles.quantityText}>{quantity}</Text>
    </TouchableOpacity>
  );
};
