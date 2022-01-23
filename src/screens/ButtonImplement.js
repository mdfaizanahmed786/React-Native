import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


const ButtonImplement=()=>{
	
	return (
	<View style={styles.container}>
	<Button color="purple" title="Click Me"  onPress={()=>alert("Hello")} accessibilityLabel="Learn More" />
	</View>
	);
	
	
	
	
	}
	const styles=StyleSheet.create({
		container:{
			
			marginVertical:30
			}
		});
	
	export default ButtonImplement;