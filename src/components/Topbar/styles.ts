import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    position: 'absolute',
    zIndex: 1,
    flex: 1,
    width: '100%',
  },
  topbarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    alignItems: 'center',
    height: 55,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  timerText: { color: '#ffffff99', marginLeft: 4 },
  forYouContainer: { alignItems: 'center' },
  forYouText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  forYouBar: { width: 30, height: 4, backgroundColor: 'white' },
  searchContainer: {
    width: 60,
    alignItems: 'flex-end',
  },
});
