import {StyleSheet} from 'react-native';
import * as Config from '../../config';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    emoji: {
        width: Config.EMOJI_SIZE,
        height: Config.EMOJI_SIZE,
        backgroundColor: '#fff',
        borderRadius: 8,
    }
})

export default styles