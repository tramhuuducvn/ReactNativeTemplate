import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import styles from './styles';
import LikeIcon from './assets/svg/LikeIcon';

export default function Reactions() {
  const [y, setY] = useState<any>(null);
  const onPressReactions = ()=>{
    console.log('On press', y);
  }

  const onLongPressReactions = ()=>{
    console.log('On long press', y);
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

    </>
  )
}