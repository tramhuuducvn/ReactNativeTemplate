import { View, Text, Modal } from 'react-native'
import React, { memo } from 'react'
import styles from './styles'

interface Props{
  isVisible: boolean,
}

const EmojisPane = ({isVisible = false}: Props) => {

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.rect}>
    
      </View>
    </Modal>
  )
}

export default memo(EmojisPane);