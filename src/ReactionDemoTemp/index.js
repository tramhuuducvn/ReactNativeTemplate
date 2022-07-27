import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LikeIcon from './assets/svg/LikeIcon';
import styles from './styles';
import ReactionPanel from './ReactionPanel';
import ReactionModal from './ReactionModal';

const ReactionAnimate = () => {
  const [showReactionPanel, setShowReactionPanel] = useState(false)
  const likeButtonRef = useRef(null);
  console.log('ReactionAnimate');

  const handleShowReactionPanel = ()=> {
    console.log(likeButtonRef.current); 
    setShowReactionPanel(prevState => !prevState);
  }

  return (
    <>
      <View style={styles.container}>
        <Pressable
          ref={likeButtonRef}
          onPress={handleShowReactionPanel}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#ccc' : 'white',
            },
            styles.reactionButton,
          ]}>
          
          <View style={styles.reactionButtonContent}
            
          >
            <LikeIcon />
            <Text style={styles.reactText}>Like</Text>
          </View>
        </Pressable>
        <ReactionModal showReactionPanel={showReactionPanel} hideReactionPanel={handleShowReactionPanel} />
      </View>
    </>
  );
};


export default ReactionAnimate;
