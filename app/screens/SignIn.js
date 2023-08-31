import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../utils/colors'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux'
import { signupRequested } from '../mediaStore/apiRequest'



export default function SignUp({ navigation }) {
    
    
    const dispatch = useDispatch();

    const [imageUrl, setImage] = useState(null);

    const [form, setForm] = useState({
        email: { value: '', placeholder: 'user email', type: 'email-address'},
        name: { value: '', placeholder: 'user name', },
        password: { value: '', placeholder: 'user password', secure: true, }
    });


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const handleSignIn = () => {
        const { email, password, name } = form;
        dispatch(signupRequested({ email: email.value, password: password.value, name: name.value, imageUrl }));       
    }

    return (
        <View style={styles.container}>
            <View style={styles.secondary_container}>
                <Text style={styles.myText}>SignUp</Text>
            </View>
            <View style={styles.input_container}>

                <Pressable onPress={pickImage} style={styles.imageWrapper}>
                    {imageUrl ? (
                        <Image source={{ uri: imageUrl }} style={styles.circularImage} />
                    ) : (
                        <View style={styles.placeholder} />
                    )}
                </Pressable>

                {
                    Object.entries(form).map(([key,item],index) => (
                        <View key={key}>
                            <CustomInput 
                               OnChange={setForm}
                               Secure={item.secure}
                               Type={item.type}
                               PlaceHolder={item.placeholder}
                               Field={key}
                            />
                        </View>
                    ))
                }

                <CustomButton
                    children={'Create'}
                    onClick={handleSignIn}
                />

                <CustomButton
                    children={'Go to -> Login'}
                    onClick={() => navigation.navigate('login')}
                />


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_color,
        width: wp('100%')
    },
    secondary_container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('30%'),
        width: wp('100%')
    },
    myText: {
        fontSize: hp('5%'),
        color: colors.primary_dark,

    },
    input_container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('40%'),
        width: wp('100%'),
    },
    imageWrapper: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        backgroundColor: 'black',
    },
    circularImage: {
        width: '100%',
        height: '100%',
    },
    placeholder: {
        flex: 1,
    },
});