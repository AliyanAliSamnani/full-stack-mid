import { Pressable, Text } from 'react-native'
import React from 'react'

const CustomButtons = () => {
  return (
    <Link href="/other" asChild>
    <Pressable>
      <Text>Home</Text>
    </Pressable>
  </Link>
  )
}

export default CustomButtons