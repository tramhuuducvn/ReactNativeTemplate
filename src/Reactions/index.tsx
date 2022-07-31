import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import styles from './styles';
import LikeIcon from './assets/svg/LikeIcon';
import EmojisPane from './EmojisPane';

export default function Reactions() {
  const [y, setY] = useState<any>(null);
  const [showEmojisPane, setShowEmojisPane] = useState(false);
  const onPressReactions = ()=>{
    console.log('On press', y);
  }

  const onLongPressReactions = ()=>{
    console.log('On long press', y);
    setShowEmojisPane(true);
  }

  const getY = (event)=>{
    const layout = event.nativeEvent;
    setY(layout.pageY - layout.locationY);
  }
  
  return (
    <>
      <View style={styles.root}>
          <View onTouchStart={getY}>
            <Pressable
              onPress={onPressReactions}
              onLongPress={onLongPressReactions}
              style={({pressed})=>[
                pressed && styles.buttonPressed,
                styles.button
              ]}
            >
                <LikeIcon />
                <Text style={styles.text}>Text</Text>
            </Pressable>
          </View>
      </View>
      <EmojisPane isVisible={showEmojisPane} />
    </>
  )
}