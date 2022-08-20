import { View, Text, Modal, TouchableOpacity, Pressable, FlatList } from 'react-native';
import React, { forwardRef, memo, useImperativeHandle, useState } from 'react';
import styles from './styles';
import EmojiButton from './EmojiButton';
import { Emojis, HeartEmoji } from '../assets/Emojis';

const EmojisPane = (props: any, ref: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = ()=>{
    setIsVisible(true);
  }

  const hideModal = ()=>{
    setIsVisible(false);
    console.log('Hide Emojis Pane');
  }

  useImperativeHandle(ref, ()=>({
    show: showModal,
    hide: hideModal,
  }))

  console.log('Emojis Pane Re-render', props);
  
  const renderEmojiButton = (item) => {
    return <EmojiButton key={item.id} emoji={item} />
  }

  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.root}>
        <Pressable
          onPress={hideModal}
          style={styles.spaceAround}
        >
          <View style={[styles.emojiContainer, props._style]} >
            {
              Emojis.map((item)=>{
                return (renderEmojiButton(item))
              })
            }
          </View>
        </Pressable>
      </View>
    </Modal>
  )
}

export default memo(forwardRef(EmojisPane));
