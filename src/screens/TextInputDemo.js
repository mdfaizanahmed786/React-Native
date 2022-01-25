import React from "react";
import {View, TextInput, StyleSheet, Text} from "react-native"

const TextInputDemo=({ grabText } )=>{
	const [text, setText]=React.useState('');
	const changeText=(e)=>{
		setText(e.target.value);
		grabText(text);
		}
		
	return (
	
	<View style={styles.container}>
	{/* maxLength holds good for keyboardType="numeric" */}
	<Text style={styles.heading}>Input Container</Text>
	<TextInput  value={text} onChange={changeText} keyboardType="default" maxLength={100} style={styles.inputContainer} placeholder="Enter your name" editable={true} multiLine={false}  selectTextOnFocus={true}   selectionColor="#7fffd4"/>
	</View>
	
	);
	}
	const styles=StyleSheet.create({
		inputContainer:{
			
			
			padding:12,
			margin:30
			},
			container:{
				margin:20,
				
				},
				heading:{
					fontWeight:"bold",
					fontSize:35,
					textAlign:'center'
					
					}
		
		});
	export default TextInputDemo;