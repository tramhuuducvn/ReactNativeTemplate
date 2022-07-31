import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React, { forwardRef, memo, useImperativeHandle, useState } from 'react';
import styles from './styles';

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
  
  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={isVisible}
    >
      <TouchableOpacity 
        onPress={hideModal}
        style={[styles.rect, props._style]}
      >
        <Text>Hide</Text>
      </TouchableOpacity>
    </Modal>
  )
}

export default memo(forwardRef(EmojisPane));
