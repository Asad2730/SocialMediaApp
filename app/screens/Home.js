import React, { useEffect } from 'react'
import { View, Image, StyleSheet, FlatList,SafeAreaView  } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../utils/colors'
import { useDispatch, useSelector } from 'react-redux'
import { url } from '../utils/constants'
import { getUsersRequested } from '../mediaStore/apiRequest'



const Item = ({ image }) => (
  <View style={styles.item}>  
     <Image
       style={styles.circularImage}
       source={{ uri: `${url}images/${image}` }}
       resizeMode="contain" 
     />
 </View>
);



export default function Home({ navigation }) {

  const user = useSelector((state) => state.auth.userAuth)
  const users = useSelector((state) => state.auth.users)
  const loading = useSelector((state) => state.auth.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (loading) {
      dispatch(getUsersRequested());
    }

  }, [loading, dispatch])
  


  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.imageWrapper}>
        {user.imageUrl ? (
          <Image
            style={styles.circularImage}
            source={{ uri: `${url}images/${user.imageUrl}` }}
          />
        ) : (null)}
      </View>

      <View style={styles.secondary_container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <Item image={item.ImageUrl} />}
          keyExtractor={item => item.ID}
        />
      </View>

    </SafeAreaView >
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
    position: 'absolute',
    top: hp('6%'),
    left: wp('6%'),
  },
 
  item: {
    width:'100%', 
    height: 300, 
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  circularImage: {
    width: '100%',
    height: '100%',
  },
  secondary_container: {
    right:hp('2%'),
    paddingTop: hp('15%'),
  },
});
