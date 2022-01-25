import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";


const ImageDemo=()=>{
	return (
	<View style={styles.container}>
	
	<Image style={styles.logo}  resizeMode="repeat"  source={{uri:"https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE2NDI5NjU1Mzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" }} />
	
	
	</View>
	
	
	);
	}
	
	const styles=StyleSheet.create({
		container:{
			
			height:400,
			width:400,
			marginVertical:10,
			marginLeft:20
			
			},
			logo:{
				width:350,
				height:350
				
				}
		
		});
	
	
	export default ImageDemo;