import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        padding: 4,
        flexDirection: 'row',
    },
    
    reaction: {
        position: 'absolute',
    },
    
    contentAbove: {
        width: '100%',
        height: 500,
    },

    contentBelow: {
        width: '100%',
        height: 800,
    },
    
    text: {
        color: '#000',
        marginHorizontal: 4
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
    },

    buttonPressed: {
        backgroundColor: '#00ffff77',
    },
});

export default styles;