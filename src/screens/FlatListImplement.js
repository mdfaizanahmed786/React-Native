import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
const DATA=[
{
id:1,
name:"faizan"
},
{
	id:2,
	name:"riyan"
	
	},
	
{
	id:3,
	name:"nouman"
	},
	{
		
		id:4,
		name:"parents"
		
		}
	
]
const FlatListImplement=()=>{
	return (
	<View>
	
	<FlatList horizontal={true}  data={DATA} renderItem={(element)=>{
		
		return (
		<Text style={styles.textStyle}>{element.item.id} {element.item.name}</Text>
		);
		
		}} keyExtractor={(item)=>item.id} showsHorizontalScrollIndicator={false}/>
	</View>
	);
	
	
	}
	
	const styles=StyleSheet.create({
		textStyle:{
			fontSize:40,
			backgroundColor:'red',
			color:"white"
		
			
			}
		});
	
	export default FlatListImplement;