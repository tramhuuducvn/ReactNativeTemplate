import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const {width, height} = Dimensions.get('window');

export default function Demo() {
    const [y, setY] = useState(0);
    console.log('Y_', y);
    return (
        <View
            onTouchStart={(event)=>{
                const layout = event.nativeEvent;
                setY(layout.pageY - layout.locationY);
                console.log('LAYOUT__', layout);
            }}
            style={styles.button}
        >
            {/* <TouchableOpacity
                style={styles.button}
            >
                <Text>Get Y</Text>
            </TouchableOpacity> */}
        </View>   
    )
}

const styles = StyleSheet.create({
    root: {
        width: width,
        height: height*3,
        backgroundColor: '#ccc'
    },

    button: {
        backgroundColor: '#ffaa00',
        padding: 100,
        borderRadius: 10
    }
});