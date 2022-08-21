import { View, Text, Animated, Easing } from 'react-native'
import React, {useEffect, useRef} from 'react'
import styles from './style'

export default function Fade() {
    const animation = useRef(new Animated.Value(0)).current;
    
    const fadeIn = Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease
    });

    const fadeOut = Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear
    });

    useEffect(()=>{
        // Animated.loop(Animated.sequence([fadeIn, fadeOut])).start();
        // Animated.sequence([fadeIn, fadeOut]).start();
        fadeIn.start();
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.rect,
                    {
                        // opacity: animation,
                        transform: [{scale: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0]
                        })}]
                    }
                ]}
            />
        </View>
    )
}