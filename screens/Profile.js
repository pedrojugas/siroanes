import React from 'react';
import { View, Text, Image } from 'react-native';

const Profile = () => {
  return (
    <view>
      <ScrollView contentContainerStyle={styles.container}>
          <Text> 
          <Image source={require('./images/123.jpg')} />
              Profile
          </Text>
      </ScrollView>
    </view>
  );
};

export default Profile;