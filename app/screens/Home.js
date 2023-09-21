import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../utils/colors'
import { useDispatch, useSelector } from 'react-redux'
import { url } from '../utils/constants'
import { getUsersRequested } from '../mediaStore/apiRequest'

export default function Home({ navigation }) {

  const user = useSelector((state) => state.auth.userAuth)
  const users = useSelector((state) => state.auth.users)
  const loading = useSelector((state)=> state.auth.loading)
  const dispatch = useDispatch()

  useEffect(()=>{
     if(loading){
        dispatch(getUsersRequested());  
     }
     
  },[loading,dispatch])

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
      {user.imageUrl ? (
          <Image
            style={styles.circularImage}
            source={{ uri: `${url}images/${user.imageUrl}` }}
          />
        ) : ( null)}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_color,
    width: wp('100%'),
  },
  imageWrapper: {
    width: 75,
    height: 75,
    borderRadius: 75,
    overflow: 'hidden',
    backgroundColor: 'black',
    position: 'absolute',  // Position it absolutely
    top: hp('6%'),         // Adjust the top and left values as needed
    left: wp('6%'),
  },
  circularImage: {
    width: '100%',
    height: '100%',
  },

});