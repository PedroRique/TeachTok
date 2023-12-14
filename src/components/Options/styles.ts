import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  option: {
    backgroundColor: '#ffffff66',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  optionText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17,
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  feedbackBackground: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  wrongBackground: {
    backgroundColor: '#ff000066',
  },
  rightBackground: {
    backgroundColor: '#00ff0066',
  },
});
