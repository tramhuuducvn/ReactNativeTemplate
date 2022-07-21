import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LikeIcon from '../assets/svg/LikeIcon';

const App = () => {
  const likePanel = useRef(null);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log('OnPress');
          console.log(likePanel.current); 
        }}
        onLongPress={() => {
          console.log('On Long Press');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#ccc' : 'white',
          },
          styles.reactionButton,
        ]}>
        <View style={styles.reactionButtonContent}>
          <LikeIcon />
          <Text style={styles.reactText}>Like</Text>
        </View>
      </Pressable>
      <View 
        ref={likePanel}
        style={styles.reactionPanel}>
        <Text>Show Reaction Panel</Text>
      </View>
    </View>
  );
};

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
    marginLeft: 4
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

export default App;
