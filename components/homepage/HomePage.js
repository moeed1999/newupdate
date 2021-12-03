import React , {Component} from 'react';
import {Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';


// const image = require('../../assets/images/bgimg.jpg');

const HomePage = () => {
    
return (

    <View style={styles.page}>
      <ImageBackground 
source={require('../../assets/images/bgimg3.jpg')}
style={styles.image}/>


<View style={styles.titles}>
<Text style={styles.heading}>BY FOOD</Text>
 <Text style={styles.subHeading}>Eat whatever, whereever, whenever</Text>

 </View>
 
 <StyledButton />

</View>
   

  );
};


  export default HomePage;

