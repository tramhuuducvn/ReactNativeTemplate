import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function EmojiButton({emoji}) {
  return (
    <TouchableOpacity
      style={styles.containter}
    >
      <Image 
        source={emoji}
        style={styles.emoji}
      />
    </TouchableOpacity>
  )
}