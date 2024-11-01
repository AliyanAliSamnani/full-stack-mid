import { View, Text } from 'react-native'
import React from 'react'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'



if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}


const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
    <ClerkLoaded>
    <View >
      <Text>Welcome to My App</Text>
    </View>
    </ClerkLoaded>
  </ClerkProvider>
    
  )
}



const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }) => (
    <View style={{padding: 10, flex: 1}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
    </View>
  );


export default RootLayout
