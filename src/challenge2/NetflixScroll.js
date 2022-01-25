import React from "react";
import {View, SafeAreaView, Text, FlatList, StyleSheet} from "react-native";
const netflixData=[

        {

            name:"Archive 81",

            year:"2022",

            creator:"Rebecca",

            genre:"Horror, Thriller",

        },

        {

            name:"Cheef" ,

            year: "2021-20220",

            creator: "Greg Whitely",

            genre: "Docuseries",

        },

        {

            name:"Cobra Kai",

                year:"2018-2022",

            creator:"Hayden",

                genre:"Drama",

        },

        {

            name:"The Witcher",

                year:"2020-2022",

            creator:"Lauren Schmidt",

                genre:"Reality",

        },

        {

            name:"Emily in Paris",

                year:"2020",

            creator:"Darren Star",

                genre:"Romance , Drama",

        },

        {

            name:"Death Note",

                year:"2021",

            creator:"Unknown",

                genre:"Horror, Thriller"

        },

    ]

const NetflixScroll=()=>{
	return (
	<SafeAreaView style={{marginVertical:70}}>
	<Text style={styles.heading}>Netflix Scroll</Text>
	<FlatList  data={netflixData} renderItem={elem=>{
		const { name, year, creator, genre }=elem.item;
		return (
		<View style={{ padding:20, backgroundColor:"red" , margin:10, display:"flex", width:150}}>
		<Text style={styles.textStyle}>{name}</Text>
		<Text style={styles.textStyle}>{year}</Text>
		<Text style={styles.textStyle}>{creator}</Text>
		<Text style={styles.textStyle}>{genre}</Text>
		</View>
		);
		
	


}} keyExtractor={(item)=> item.name} showsHorizontalScrollIndicator={false} horizontal />
	
	</SafeAreaView>
	
	
	)
	
	
	
	
	
	}
	
	const styles=StyleSheet.create({
		heading:{
			textAlign:"center",
			fontWeight:"bold",
			fontSize:34,
		
			
			},
			textStyle:{
				color:"white",
				fontWeight:"bold"
				}
		});
	
	export default NetflixScroll;