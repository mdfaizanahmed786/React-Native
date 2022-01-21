import React from "react";
import {View, Text, StyleSheet} from "react-native";


const C1=()=>{
	const myName="faizan";
	const newNativeComponent=<Text>Cat is freaking awesome</Text>
	
	return (
	<View>
	<Text style={styles.container}>Hello {myName} </Text>
	{newNativeComponent}
	</View>
	)
	
	}
	const styles=StyleSheet.create({
		
		container:{
			color:"red",
			backgroundColor:"blue",
			fontSize:"50px",
			fontFamily:"times",
			marginTop:"40px"
			
			}
		});
	
	
	export default C1;