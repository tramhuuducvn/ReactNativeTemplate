import { View, Text , Modal, Pressable}from 'react-native'
import React from 'react'
import styles from './styles'
import ReactionPanel from '../ReactionPanel'

export default function ReactionModal({showReactionPanel = false, hideReactionPanel}) {
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showReactionPanel}
        >
            <Pressable
                onPress={hideReactionPanel}
                style={styles.root}
            >
                <ReactionPanel _style={{top: 100, left: 10}}/>
            </Pressable>
        </Modal>
    )
}