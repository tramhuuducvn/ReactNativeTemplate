import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LikeIcon from './assets/svg/LikeIcon';
import styles from './styles';
import ReactionPanel from './ReactionPanel';

const ReactionAnimate = () => {
  const [showReactionPanel, setShowReactionPanel] = useState(false)
  console.log('ReactionAnimate');

  const handleShowReactionPanel = ()=> {
    // if(showReactionPanel){
    //   setTimeout(()=>{
    //     setShowReactionPanel(false);
    //   }, 2000)
    // }
    // else {
    //   setShowReactionPanel(true);
    // }
      setShowReactionPanel(prevState => !prevState);

  }

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={handleShowReactionPanel}
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
        { showReactionPanel && <Pressable onPress={handleShowReactionPanel} style={styles.dimBackground}></Pressable>}
        { showReactionPanel && <ReactionPanel _style={{top: -65, left: 20}}/> }
      </View>
    </>
  );
};


export default ReactionAnimate;
