import React from 'react';
import {View, SafeAreaView,Image,ScrollView,TouchableOpacity,Button, Pressable,TextInput} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ProfileScreen = ({navigation}) => {



  return (
    <SafeAreaView style={styles.container}>
<ScrollView>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../assets/images/bgimg3.jpg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Bundu Khan</Title>
            <Caption style={styles.caption}>@bundukhan</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Pakistan, Lahore</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color:"#777777", marginLeft: 20}}>0900-78601</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Bundukhan@gmail.com</Text>
        </View>
        
        {/* pressable edit button */}
        
      <View style={styles.row}>
          <Icon name="pencil" color="indianred" size={20}/>
          <Pressable 
                style={{color:"black", marginLeft: 20}}
                onPress={
                 ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Text style={{color:'indianred'}}>
          Edit Profile
          </Text>
          </Pressable>
      </View>
        
      </View>

{/* take-away or dine in option */}

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Dine-In</Title>
            <Icon name="check" color="#777777" size={22}/> 
          </View>
          <View style={styles.infoBox}>
            <Title>Take-Away</Title>
            <Icon name="check" color="#777777" size={22}/>            
          </View>
      </View>
      

<View style={styles.cardsWrapper}>
        
        <View style={styles.menuhead}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color:'indianred'
          }}>
          Your Menu
        </Text>
        
        
        <View
        style={{
          flexDirection:'row'
        }}
        >

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon name="plus-box" color="indianred" size={22}/>  
          </Pressable>

        </View>


        </View>
        <TextInput style={styles.input}
           placeholder="search here"
           placeholderTextColor='black'

         />

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Karahi</Text>
            
            <Text style={styles.cardDetails}>
              Very Tasty
            </Text>
            <Text style={styles.cardCategory}>
              Desi
            </Text>
            <Text style={styles.cardPrice}>
              1000
            </Text>
          </View>
          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}}
          name="delete" color="indianred" size={18}/>
          </Pressable>

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
       

        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>

            <Text style={styles.cardTitle}>Biriyani</Text>
            
            <Text style={styles.cardDetails}>
              Very Tasty
            </Text>
            <Text style={styles.cardCategory}>
              Desi
            </Text>
            <Text style={styles.cardPrice}>
              1000
            </Text>
            
          </View>
           <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}}
          name="delete" color="indianred" size={18}/>
          </Pressable>

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
        

        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Fish</Text>
            
            <Text style={styles.cardDetails}>
              Very Tasty
            </Text>
            <Text style={styles.cardCategory}>
              Desi
            </Text>
            <Text style={styles.cardPrice}>
              1000
            </Text>
          </View>
          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}}
          name="delete" color="indianred" size={18}/>
          </Pressable>

          <Pressable      
            onPress={
                ()=> 
                {
                 console.warn('hey there')
                }
              }>
          <Icon style={{margin:2}} 
          name="pencil" color="indianred" size={18}/>
          </Pressable>
        </View>
        
        
        
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

