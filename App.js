import React from "react";
import C1 from './src/screens/C1.js';
import Challenge1 from './src/challenge1/Challenge1.js'
import ButtonImplement from './src/screens/ButtonImplement.js'
import FlatListImplement from './src/screens/FlatListImplement.js';
import ImageDemo from './src/screens/ImageDemo.js';
import { Text, View, StyleSheet, StatusBar} from "react-native";
import TextInputDemo from './src/screens/TextInputDemo.js'
import NetflixScroll from './src/challenge2/NetflixScroll.js'

const App=()=>{
	const [input, setInput]=React.useState('');
	return (
	<>
	<StatusBar animated={true}
        backgroundColor="#61dafb"  hidden={false}/>
	<View style={styles.container}>
	<Text>Hello, I'm from App component</Text>
	<C1/>
	<Challenge1/>
	</View>
	<ButtonImplement  showText={input}/>
	<FlatListImplement/>
	<ImageDemo/>
	<TextInputDemo   grabText={setInput}/>
	<NetflixScroll/>
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