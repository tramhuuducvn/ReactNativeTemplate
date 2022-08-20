import { StyleSheet } from "react-native";
import * as Config from '../config'

const styles = StyleSheet.create({
    root: {
        flex: 1, 
        backgroundColor: '#000000a0'
    },

    spaceAround: { 
        flex: 1,
        backgroundColor: '#00ff0050'
    },

    emojiContainer: {
        height: Config.EMOJI_PANE_HEIGHT,
        backgroundColor: '#fff',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderRadius: 8,
        flexDirection: "row"
    }
})

export default styles;