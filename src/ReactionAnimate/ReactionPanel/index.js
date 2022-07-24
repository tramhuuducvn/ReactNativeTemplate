import { View, Text, Image, FlatList, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styles from './styles'
import Emojis from '../assets/Emojis';
import EmojiButton from './EmojiButton';

export default function ReactionPanel({_style}) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start();
    }

    const fadeOut = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }).start();
    }

    useEffect(()=>{
        console.log('Re-Render');
        fadeIn();
        return ()=>{
            console.log('Hide');
        }
    }, [])

    const renderEmoji = ({item})=>{
        return <EmojiButton emoji={item.src}/>
    }

    return (
        <Animated.FlatList
            data={Emojis} 
            keyExtractor={item => item.id}
            renderItem={renderEmoji}
            horizontal={true}
            style={[styles.container, _style, {
                opacity: fadeAnim,
                transform: [
                    {
                        scale: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                    })},
                    {
                        translateY: fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [50, 1]
                        })
                    }
                ]

            }]}
        />
    )
}