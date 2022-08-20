import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeartEmoji } from '../../assets/Emojis';
import styles from './styles';

const EmojiButton = ({emoji})=>{
  return (
    <TouchableOpacity>
        <Image 
            source={emoji.src}
            style={styles.emoji}
        />
    </TouchableOpacity>
  )
}

export default EmojiButton;