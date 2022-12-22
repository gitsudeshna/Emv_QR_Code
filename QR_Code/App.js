import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const App = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  return (
    <View style={styles.Container}>
      <Text>Phone Number Input</Text>
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode="IN"
        textInputProps={{ maxLength: 10 }}
        //  withShadow containerStyle={}
        //  textContainerStyle={}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
      <TouchableOpacity
        style={styles.PhoneButton}
        onPress={() => {
          Alert.alert(phoneNumber);
        }}>
        <Text>Get phone number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});