import { View, Text, Pressable, SafeAreaView, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './styles';
import LikeIcon from './assets/svg/LikeIcon';
import EmojisPane from './EmojisPane';
import * as Config from './config';

export default function Reactions() {
  const [topPane, setTopPane] = useState<any>(null);
  const emojisPaneRef = useRef<any>();
  const [selectedEmoji, setSelectedEmoji] = useState<any>();
  
  const onPressReactions = ()=>{
    console.log('On press', topPane);
  }

  const onLongPressReactions = ()=>{
    emojisPaneRef.current.show();
  }

  const getTopPane = (event: any)=>{
    const layout = event.nativeEvent;
    const y = layout.pageY - layout.locationY;
    
    if(y < 2*Config.EMOJI_PANE_HEIGHT){
      setTopPane(y + Config.EMOJI_PANE_HEIGHT - 16);
    }
    else {
      setTopPane(y - Config.EMOJI_PANE_HEIGHT - 16);
    }
  }
  
  console.log('Screen re-render');
  
  return (
    <ScrollView>
      <View style={styles.contentAbove} />
      <View style={styles.root}>
              <View onTouchStart={getTopPane}>
                <Pressable
                  // onPress={onPressReactions}
                  onLongPress={onLongPressReactions}
                  style={({pressed})=>[
                    pressed && styles.buttonPressed,
                    styles.button
                  ]}
                >
                    <LikeIcon />
                    <Text style={styles.text}>Like</Text>
                </Pressable>
              </View>
          </View>
          <EmojisPane ref={emojisPaneRef} _style={{top: topPane}}/>
      <View style={styles.contentBelow} />
    </ScrollView>
  )
}