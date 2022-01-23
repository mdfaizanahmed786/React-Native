import React from "react";
import C1 from './src/screens/C1.js';
import Challenge1 from './src/challenge1/Challenge1.js'
import ButtonImplement from './src/screens/ButtonImplement.js'
import FlatListImplement from './src/screens/FlatListImplement.js';
import { Text, View, StyleSheet} from "react-native";

const App=()=>{
	
	return (
	<>
	<View style={styles.container}>
	<Text>Hello, I'm from App component</Text>
	<C1/>
	<Challenge1/>
	</View>
	<ButtonImplement/>
	<FlatListImplement/>
	</>

)
	
	}
	const styles=StyleSheet.create({
		container:{
			padding:"50px",
			backgroundColor:"aqua",
		
			
			}
		});
	
	export default App;