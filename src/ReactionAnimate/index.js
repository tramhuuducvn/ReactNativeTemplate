import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LikeIcon from '../assets/svg/LikeIcon';
import styles from './styles';
import ReactionPanel from './ReactionPanel';

const App = () => {
  const [showReactionPanel, setShowReactionPanel] = useState(false)

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setShowReactionPanel(prevState => !prevState)
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
      
      {
        showReactionPanel && <ReactionPanel _style={{top: -90, left: 20}}/>
      }
    </View>
  );
};


export default App;
