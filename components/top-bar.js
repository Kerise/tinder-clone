import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import {FontAwesome5, FontAwesome} from '@expo/vector-icons'

const selectedColor = "#f06795"
const nonSelectedColor = "#5c5c5c"
 
const TopBar = () => {
    return (
    <View style ={styles.container}>
        <FontAwesome5 name='fire' size={27} color={selectedColor} />
        <FontAwesome name='comments' size={27} color={nonSelectedColor} />
        <FontAwesome name='user' size={27} color={nonSelectedColor} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,

    }
})

export default TopBar;