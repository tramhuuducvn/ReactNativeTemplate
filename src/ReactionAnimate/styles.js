import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fff'
  },

  reactionButton: {
    borderRadius: 30,
    padding: 8,
    marginRight: 10
  },

  reactionButtonContent: {
    flexDirection: 'row',
  },

  reactText: {
    marginLeft: 4,
    color: '#000',
  },

  reactionPanel: {
    position: 'absolute',
    top: -40,
    left: 20,
    backgroundColor: '#f00',
    padding: 10,
    borderRadius: 30,
  },

  dimBackground: {
    position: 'absolute',
    backgroundColor: '#00000000',
    top: -height,
    left: 0,
    right: 0,
    bottom: -height,
  }
});

export default styles;
