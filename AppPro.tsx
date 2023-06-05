/* eslint-disable prettier/prettier */
//! <====== PROJECT 1   ========>
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native';

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.container} >
            <Text style={isDarkMode ? styles.whiteText : styles.darkText} >Hello World</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    whiteText: {
        color:'#FFFFFF',
    },
    darkText: {
        color:'#000000',
    },
});

export default AppPro;
