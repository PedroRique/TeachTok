import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 5.5,
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: 'white',
  },
  followBtn: {
    backgroundColor: '#28B18F',
    color: 'white',
    textAlign: 'center',
    width: 22,
    height: 22,
    borderRadius: 11,
    overflow: 'hidden',
    position: 'absolute',
    bottom: -5.5,
    right: 11,
  },
  followBtnText: {
    color: 'white',
    textAlign: 'center',
  },
});
