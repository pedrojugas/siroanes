import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <View style={{ padding: 20, borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Facebook Post</Text>
        <Text>Post content goes here...</Text>
        {/* Additional content */}
      </View>
    </ScrollView>
  );
};

export default Home;