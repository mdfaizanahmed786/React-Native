import React from "react";
import C1 from './src/screens/C1.js';
import { Text, View, StyleSheet} from "react-native";

const App=()=>{
	
	return (
	<View style={styles.container}>
	<Text>Hello, I'm from App component</Text>
	<C1/>
	</View>

)
	
	}
	const styles=StyleSheet.create({
		container:{
			padding:"50px",
			backgroundColor:"aqua"
			
			}
		});
	
	export default App;