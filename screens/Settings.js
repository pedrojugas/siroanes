import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Settings = () => {
  const data = [
    { key: '1', title: 'Setting 1' },
    { key: '2', title: 'Setting 2' },
    { key: '3', title: 'Setting 3' },
    // Add more settings as needed
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Settings;