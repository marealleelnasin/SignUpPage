import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, useColorScheme, CheckBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [showPassword, setShowPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const styles = isDarkMode ? darkStyles : lightStyles;

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Ionicons name={isDarkMode ? 'sunny' : 'moon'} size={24} color={isDarkMode ? '#ffafb8' : '#333'} />
      </TouchableOpacity>

      <Image source={{ uri: 'https://i.pinimg.com/originals/4b/06/e3/4b06e393fd0647c265b1282b0f006486.gif' }} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        {/* Username Input */}
        <View style={styles.iconInput}>
          <Ionicons name="person" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
          <TextInput
            placeholder="Username"
            placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
            style={styles.input}
          />
        </View>

        {/* FULL NAME INPUT */}
        <View style={styles.iconInput}>
          <Ionicons name="person" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
            style={styles.input}
          />
        </View>

        {/* EMAIL INPUT */}
        <View style={styles.iconInput}>
          <Ionicons name="mail" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
            style={styles.input}
          />
        </View>

        {/* PASSWORD INPU */}
        <View style={styles.iconInput}>
          <Ionicons name="lock-closed" size={24} color={isDarkMode ? '#fff' : '#333'} style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={isDarkMode ? '#b0b0b0' : '#887a7a'}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
        </View>
      </View>

      {/* AGREE CHECKBOX */}
      <View style={styles.checkboxContainer}>
        <CheckBox value={isAgreed} onValueChange={setIsAgreed} />
        <Text style={styles.checkboxText}>Agree with <Text style={styles.linkText}>Terms & Conditions</Text></Text>
      </View>

      <TouchableOpacity style={styles.button} disabled={!isAgreed}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Already have an account?
          <Text style={styles.signupLinkText}> LOGIN</Text>
        </Text>
      </View>
    </View>
  );
}

// STYLES FOR LIGHT AND DARK MODE
const commonStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 20,
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  iconInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15, 
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10, 
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, 
  },
  checkboxText: {
    color: '#333',
    marginLeft: 5,
  },
  linkText: {
    color: '#ffafb8',
    fontWeight: 'bold',
  },
  signupContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 5, 
  },
  signupText: {
    fontSize: 14,
    color: '#888',
  },
  signupLinkText: {
    color: '#ffafb8',
    fontWeight: 'bold',
  },
};

const lightStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#FFE5E5',
  },
  title: {
    ...commonStyles.title,
    color: '#333',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ff6b81',
  },
  iconInput: {
    ...commonStyles.iconInput,
    backgroundColor: '#fff',
  },
});

const darkStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#333',
  },
  title: {
    ...commonStyles.title,
    color: '#FFE5E5',
  },
  iconInput: {
    ...commonStyles.iconInput,
    backgroundColor: '#555',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ff6b81',
  },
  checkboxText: {
    color: '#fff',
  },
});
