import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'


const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }
  
const Layout = () => {
  return (
    <View>
      <Text>Layout</Text>
    </View>
  )
}

export default Layout