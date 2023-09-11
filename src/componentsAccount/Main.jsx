import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Main = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: Colors.white, alignItems:'center',
        justifyContent:'center'}}>
            <View style={{height: 400}}>
                <Image 
                    style={{height: 340, width:370, top: -50 }}
                    source={require('../../assets/logo_senal.png')}                    
                /> 
                <Text style={{fontSize:32, fontWeight:'bold', color: '#353153', marginTop:-30}}
                    >Vasanta Comunicaciones   
                </Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Ingresar</Text>
                </View>
            </View>
        </SafeAreaView>          
    )
};

const styles=StyleSheet.create({
    buttonContainer:{
        height:50,
        marginHorizontal:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        borderRadius:50,
        borderWidth:3,
        borderColor:'#353153',

    },
    buttonText:{
        textTransform:'uppercase',
        color:'#353153',
        fontSize:18,
        fontWeight:'bold'
    }

})

export default Main