import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  feedItem: {},
  flexOne: {
    flex: 1,
  },
  questionContainer: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 8,
    paddingTop: 40,
    columnGap: 12,
  },
  questionText: {
    backgroundColor: '#00000099',
    borderRadius: 8,
    overflow: 'hidden',
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    width: '70%',
    padding: 8,
    marginBottom: 'auto',
  },
  questionOption: {
    backgroundColor: '#ffffff66',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  questionOptionText: {
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
  questionUserName: {
    color: 'white',
    marginTop: 24,
    fontWeight: '500',
    fontSize: 15,
  },
  questionDescription: {
    color: 'white',
    fontWeight: '400',
    fontSize: 13,
  },
  questionPlaylist: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161616',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  questionPlaylistText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
    marginRight: 'auto',
  },
  sidebarContainer: { marginTop: 'auto', rowGap: 15 },
});
