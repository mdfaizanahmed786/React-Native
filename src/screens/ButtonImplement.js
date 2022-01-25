import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


const ButtonImplement=({showText})=>{
	const [info, setInfo]=React.useState('');
	const displayText=()=>{
		setInfo(showText)
		}
	return (
	<View style={styles.container}>
	<Button color="purple" title="Click Me"  onPress={()=>displayText()} style={styles.buttonContainer} accessibilityLabel="Learn More" />
	<Text style={styles.grabInfo} >{info}</Text>
	</View>
	);
	
	
	
	
	}
	const styles=StyleSheet.create({
		container:{
			
			marginVertical:30
			},
			buttonContainer:{
				margin:30
				},
				grabInfo:{
					fontSize:30,
					fontWeight:'bold',
					textAlign:'center'
					}
		});
	
	export default ButtonImplement;