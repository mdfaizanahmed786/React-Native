import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Challenge1=()=>{
	const myName="Faizan"
	return (
	<View>
	<Text style={styles.container1}>Hello! Welcome to Thapa Technical Youtube Channel</Text>
	<Text style={styles.container2}>One of my favorite YouTubers is Thapa Technical</Text>
	
	<Text style={styles.container3}>My name is {myName} and I love Programming</Text>
	</View>
	
	)
	}
	const styles=StyleSheet.create({
		container1:{
			fontWeight:'bold',
			color:'green',
			fontSize:'50px'
			},
			container2:{
				fontSize:"30px",
				color:"white",
				marginTop:"40px"
				
				},
				
				container3:{
					color:"green",
					backgroundColor:"white",
					marginTop:"30px",
					padding:"80px",
					fontSize:"35px"
					
					
					
					}
		
		});
	
	
	export default Challenge1;