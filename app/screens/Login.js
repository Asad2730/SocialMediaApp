import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../utils/colors'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useDispatch } from 'react-redux'
import { login } from '../mediaStore/authSlice'

export default function Login({ navigation }) {

    const dispacth = useDispatch()

    const [form, setForm] = useState({
        email: { value: '', placeholder: 'example@gmail.com', type: 'email-address' },
        password: { value: '', placeholder: 'your password', secure: true, }
    });


    const handleLogin = () => {
        let obj = { email: form.email.value, password: form.password.value }
        dispacth(login())
    }

    return (
        <View style={styles.container}>
            <View style={styles.secondary_container}>
                <Text style={styles.myText}>SignIn</Text>
            </View>
            <View style={styles.input_container}>

                {
                    Object.entries(form).map(([key, item], index) => (
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
                    children={'Login'}
                    onClick={handleLogin}
                />

                <CustomButton
                    children={'Signup'}
                    onClick={() => navigation.navigate('signUp')}
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
        height: hp('40%'),
        width: wp('100%')
    },
    myText: {
        fontSize: hp('5%'),
        color: colors.primary_dark,

    },
    input_container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('10%'),
        width: wp('100%'),
    },

});