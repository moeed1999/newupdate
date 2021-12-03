import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper/src';
import styles from './styles';


// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import StarRating from '../components/StarRating';

const HomeScreen = ({navigation}) => {
  

  return (
    <ScrollView style={styles.container}>
      {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}

      
       <View style={styles.header}>
         <Text style={styles.heading}>
           BY-F00D
         </Text>

         

       </View>

      

      {/* slider code starts */}
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          height={200}
          activeDotColor="white">
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      {/* slider code ends */}


      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'indianred',
          }}>
          "Top Rated Restaurants"
        </Text>

        {/* search bar */}

        <TextInput style={styles.input}
           placeholder="search here"
           placeholderTextColor='indianred'
          
          

         />
        {/* search bar ends */}
        <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Bundu Khan</Text>
            
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Mcdonalds</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
</TouchableOpacity>

<TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Arcadian Cafe</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        </TouchableOpacity>


<TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../../assets/images/bgimg3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Monal</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
</TouchableOpacity>
        
       
      </View> 
    </ScrollView>
  );
};

export default HomeScreen;
