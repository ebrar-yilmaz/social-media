import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'


const App = () => {
    const ozkan = "https://www.hizliresim.com/gukyune"
    return (
        <SafeAreaView>
            <Image
                source={{ uri: ozkan }}
                style={styles.Image}
            />
            <View>
                <Text>App</Text>
            </View>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({})