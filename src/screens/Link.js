import React from "react";
import { View, Button, Linking } from "react-native"

const Link=()=>{
	
	return (
	<View style={{marginVertical:20}}>
	<Button title="Netflix.com" color="green" onPress={()=>Linking.openURL("https://netflix.com") }/>
	</View>
	
	);
	
	
	}
	
	export default Link;