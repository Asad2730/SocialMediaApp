import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { View, Image, StyleSheet, SafeAreaView, Text } from 'react-native'
import { colors } from '../utils/colors'
import { useSelector } from 'react-redux'
import { url } from '../utils/constants'


export default function UserProfile({ navigation }) {

  const user = useSelector((state) => state.auth.userAuth)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondary_container}>
        {user.imageUrl ? (
          <Image
            style={styles.circularImage}
            source={{ uri: `${url}images/${user.imageUrl}` }}
            resizeMode="contain"
          />
        ) : (null)}
      </View>
      {user ? (
        <View style={styles.secondary_container}>
           <Text style={styles.myText}>{user.name}</Text>
          <Text style={styles.myText}>{user.email}</Text>
         
        </View>
      ) : (null)

      }
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_color,
    width: wp('100%'),
  },

  circularImage: {
    width: '100%',
    height: '100%',
  },
  secondary_container: {

    alignItems: 'center',
    justifyContent: 'center',
    height: hp('40%'),
    width: wp('100%')
  },
  myText: {
    fontSize: hp('3%'),
    color: colors.primary_dark,
  },
});