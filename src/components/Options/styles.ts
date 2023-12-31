import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  option: {
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
    width: '90%',
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
  neutralBackground: {
    backgroundColor: '#ffffff66',
  },
  wrongBackground: {
    backgroundColor: '#DC5F5FB2',
  },
  rightBackground: {
    backgroundColor: '#28B18FB2',
  },
  feedbackGif: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
  },
  rightGif: {
    top: -10,
    transform: [{ scaleX: -1 }],
  },
  wrongGif: {
    top: 10,
    transform: [{ scaleY: -1 }],
  },
});
