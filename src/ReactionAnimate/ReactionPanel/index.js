import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { AngryEmoji } from '../../assets/gif'

export default function ReactionPanel({_style}) {

    return (
        <View style={[styles.container, _style]}>
            <Text>ReactionPanel</Text>
            <Image 
                source={AngryEmoji}
                style={{width: 70,height: 70}}
            />
        </View>
    )
}