import {StyleSheet} from 'react-native';

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
    borderRadius: 30
  }
});



export default styles;
