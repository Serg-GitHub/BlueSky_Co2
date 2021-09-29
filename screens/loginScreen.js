import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react'
import { StyleSheet, fontFamily, Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity, } from 'react-native'
import { auth } from '../firebase.js'


const loginScreen = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const navigation = useNavigation()

    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged(user=>{
            if (user){
                navigation.replace('Home')
            }
        }) 
        return unsubscribe
    },[])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered With:', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }



    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <Text style={styles.text}>WELCOME</Text>
        <View style={styles.inputContainer}>
        <TextInput
            placeholder="email"
            value={email}
            onChangeText={text=>setEmail(text)}
            style={styles.input}
        />
                <TextInput
            placeholder="password"
            value={password}
            onChangeText={text=>setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button,styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>

    )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#001315'
        },
        inputContainer: {
        width: '18%',
        },
        input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        },
        buttonContainer: {
        width: '30%',   
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        

        },
        button: {
        backgroundColor: "#5cb85c",
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,

        },
        buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#5cb85c",
        borderWidth: 2,
             

        },
        buttonOutlineText: {

        },
        buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        },
        text: {
            color: 'white',
            fontFamily: 'sans-serif-thin',
            fontSize: 40,
            fontWeight: 'bold',
            justifyContent: 'space-around',
        },
    
})
