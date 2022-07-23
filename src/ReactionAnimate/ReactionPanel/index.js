import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Emojis from '../assets/Emojis';
import EmojiButton from './EmojiButton';

export default function ReactionPanel({_style}) {

    useEffect(()=>{
        console.log('ReactionPanel Mounted');

        return ()=>{
            console.log('ReactionPanel UnMounted');
        }
    }, [])

    const renderEmoji = ({item})=>{
        return <EmojiButton emoji={item.src}/>
    }

    return (
        <FlatList
            data={Emojis} 
            keyExtractor={item => item.id}
            renderItem={renderEmoji}
            horizontal={true}
            style={[styles.container, _style]}
        />
    )
}