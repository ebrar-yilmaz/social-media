import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'


const App = () => {

  const ozkan = "https://i.hizliresim.com/gukyune.jpg"
  const ebrar = "https://i.hizliresim.com/p5zccg0.jpg"
  const annem = "https://i.hizliresim.com/61sgue3.jpg"
  const babam = "https://i.hizliresim.com/ry1h35d.jpg"
  const ibo = "https://i.hizliresim.com/13m0mp1.jpg"
  const melike = "https://i.hizliresim.com/fr9miq6.jpg"

  const [fontsLoaded] = useFonts({
    yazitipi: require("./assets/Fonts/Satisfy-Regular.ttf")
  })

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "lightgreen" }}>
        <View style={styles.conteiner}>
          <Image
            source={{ uri: ozkan }}
            style={styles.Image}
          />
          <View>
            <Text style={styles.welcome}> Hoş Geldin Özkan Yılmaz</Text>
          </View>
        </View>
        <ScrollView style={styles.box2} >


          <View style={styles.box3}>
            <Image
              source={{ uri: ebrar }}
              style={styles.Image2}
            />
            <Text style={{ fontFamily: "yazitipi", fontSize: 25, marginLeft: 15, marginTop: 7 }}> Ebrar</Text>
            <View style={{ width: "75%", height: 38, borderWidth: 2, alignSelf: "center", marginTop: 35, marginLeft: -75, }}>
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 12 }}>hayat çok zoe</Text>
            </View>
          </View>

          <View style={styles.box4}>
            <Image
              source={{ uri: annem }}
              style={styles.Image3}
            />
            <Text style={{ fontFamily: "yazitipi", fontSize: 25, marginLeft: 15, marginTop: 7 }}> Annem</Text>
            <View style={{ width: "75%", height: 38, borderWidth: 2, alignSelf: "center", marginTop: 35, marginLeft: -75, }}>
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 12 }}>acaba oğlum diploma aldı mı</Text>
            </View>
          </View>

          <View style={styles.box5}>
            <Image
              source={{ uri: babam }}
              style={styles.Image4}
            />
            <Text style={{ fontFamily: "yazitipi", fontSize: 25, marginLeft: 15, marginTop: 7 }}> Babam</Text>
            <View style={{ width: "75%", height: 38, borderWidth: 2, alignSelf: "center", marginTop: 35, marginLeft: -75, }}>
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 12 }}>oğlum koltuk parasını ödedi mi</Text>
            </View>
          </View>

          <View style={styles.box6}>
            <Image
              source={{ uri: ibo }}
              style={styles.Image5}
            />
            <Text style={{ fontFamily: "yazitipi", fontSize: 25, marginLeft: 15, marginTop: 7 }}> İbo</Text>
            <View style={{ width: "75%", height: 38, borderWidth: 2, alignSelf: "center", marginTop: 35, marginLeft: -36, }}>
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 12 }}>bana kim deri ceket bakacak acaba</Text>
            </View>
          </View>

          <View style={styles.box7}>
            <Image
              source={{ uri: melike }}
              style={styles.Image6}
            />
            <Text style={{ fontFamily: "yazitipi", fontSize: 25, marginLeft: 15, marginTop: 7 }}> Melike</Text>
            <View style={{ width: "75%", height: 38, borderWidth: 2, alignSelf: "center", marginTop: 35, marginLeft: -75, }}>
              <Text style={{ fontSize: 18, marginLeft: 12, marginTop: 12 }}>i love you özkan</Text>
            </View>
          </View>

        </ScrollView>

      </View>
    </SafeAreaView >

  )
}

export default App


const styles = StyleSheet.create({



  conteiner: {

    flexDirection: "row",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "lightgreen",
    marginRight: 99

  },


  Image: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginLeft: 35

  },
  welcome: {
    fontSize: 26,
    fontFamily: "yazitipi",
    justifyContent: "center",
    alignItems: "center",


  },

  box2: {

    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderRadius: 18,
    alignSelf: "center",
    marginTop: -1,
    backgroundColor: "pink"
  },
  box3: {
    flexDirection: "row",
    marginTop: "4%",
    height: "17%",
    width: "97%",
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 25
  },

  Image2: {

    height: 55,
    width: 55,
    borderRadius: 55,
    alignSelf: "flex-start",
    marginTop: 7,
    marginLeft: 15
  },

  box4: {
    flexDirection: "row",
    marginTop: "4%",
    height: "17%",
    width: "97%",
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 25
  },

  Image3: {
    height: 55,
    width: 55,
    borderRadius: 55,
    alignSelf: "flex-start",
    marginTop: 7,
    marginLeft: 15
  },

  box5: {
    flexDirection: "row",
    marginTop: "4%",
    height: "17%",
    width: "97%",
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 25,
  },

  Image4: {
    height: 55,
    width: 55,
    borderRadius: 55,
    alignSelf: "flex-start",
    marginTop: 7,
    marginLeft: 15
  },

  box6: {
    flexDirection: "row",
    marginTop: "4%",
    height: "17%",
    width: "97%",
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 25
  },
  Image5: {
    height: 55,
    width: 55,
    borderRadius: 55,
    alignSelf: "flex-start",
    marginTop: 7,
    marginLeft: 15
  },
  box7: {
    flexDirection: "row",
    marginTop: "4%",
    height: "17%",
    width: "97%",
    borderWidth: 2,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 25
  },


  Image6: {
    height: 55,
    width: 55,
    borderRadius: 55,
    alignSelf: "flex-start",
    marginTop: 7,
    marginLeft: 15
  },

})
