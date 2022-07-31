import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react'
import styles from './styles';
import LikeIcon from './assets/svg/LikeIcon';
import EmojisPane from './EmojisPane';


export default function Reactions() {
  const [y, setY] = useState<any>(null);
  const emojisPaneRef = useRef<any>();
  const onPressReactions = ()=>{
    console.log('On press', y);
  }

  const onLongPressReactions = ()=>{
    console.log('Show Emoji Pane', y);
    emojisPaneRef?.current?.show();
  }

  const getY = (event)=>{
    const layout = event.nativeEvent;
    setY(layout.pageY - layout.locationY);
  }
  
  console.log('Screen re-render');
  
  return (
    <>
      <View style={styles.root}>
          <View onTouchStart={getY}>
            <Pressable
              // onPress={onPressReactions}
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
      <EmojisPane ref={emojisPaneRef} _style={{top: y}}/>
    </>
  )
}