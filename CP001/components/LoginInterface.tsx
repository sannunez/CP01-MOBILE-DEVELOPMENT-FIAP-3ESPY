import { useState } from "react"
import { View, Text, Pressable, TextInput, StyleSheet, Image  } from "react-native"


export default function LoginInterface(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleLogin = () => {
        setEmail("")
        setSenha("")
    }

    return(
        <View style={styles.loginContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.h1Login}>Login</Text>
                <Text style={styles.welcomeBack}>Bem-vindo de volta!</Text>
            </View>

            <View style={styles.fiapLogoContainer}>
                <Image source={require("../assets/images/logo.png")} style={styles.logoFiap}/>
            </View>
           
            
            <View style={styles.loginArea}>
                <Text style={styles.subtitulos}>Email</Text>
                <TextInput
                    style = {styles.textInput}
                    placeholder="rm000000@fiap.com.br"
                    value={email}
                    onChangeText={setEmail}
                    >
                </TextInput>

                <Text style={styles.subtitulos}>Senha</Text>
                <TextInput
                    style = {styles.textInput}
                    placeholder="•••••••••"
                    value={senha}
                    onChangeText={setSenha}

                    >
                </TextInput>

                <Pressable onPress={handleLogin}
                    style={styles.loginBtn}
                    >
                        <Text style={styles.textLoginBtn}>Login</Text>
                </Pressable>

                <Text style={styles.dialogTexts}>Esqueceu a senha?</Text>
               
            </View>

            <Text style={styles.createAccountTxt}>Criar uma conta</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        width: 380,
        height: 800,
        justifyContent: "space-between",

    },
    textInput: {
        width: 380,
        height: 50,
        fontSize: 16,
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: "#868686",
        marginBottom: 25
    },
    loginBtn: {
        width: 380,
        transform: "opacity",

        justifyContent: "center",
        alignItems: "center",

        paddingVertical: 13,

        backgroundColor: "#ED145B",
        borderRadius: 80,

        marginBottom: 10
    },
    textLoginBtn: {
        color: "white",
        fontWeight: 600,
        fontSize: 22,
    },
    h1Login: {
        fontSize: 32,
        fontWeight: 800
    },
    headerContainer: {
        height: 120,
        marginTop: 50
    },
    dialogTexts: {
        fontSize: 16
    },
    loginArea: {
        width: 380,
        height: 450,
        alignItems: "center",

    },
    subtitulos: {
        width: 380,
        fontSize: 22,
        fontWeight: 600,
    },
    welcomeBack: {
        fontSize: 18
    },
    createAccountTxt: {
        width: 380,
        textAlign: "center",
        marginBottom: 30,
        fontSize: 16,
        fontWeight: 600,
        color: "#ED145B",
    },
    fiapLogoContainer: {
        width: 360,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    logoFiap: {
        width: 260,
        height: 60,
        marginLeft: 25
    },

})

