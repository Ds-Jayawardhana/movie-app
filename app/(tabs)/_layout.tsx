import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { ImageBackground } from 'react-native'

function _layout() {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon:({focused})=>(
                <>
                <ImageBackground
                  source={images.highlight}
                
                >
                  <Image source={images.home}
                  tintcolor="#151312"
                  className="size-5"
                  />

                  </Image>

                </ImageBackground>
                </>
            
            
            
            }}
        />
        <Tabs.Screen
            name="saved"
            options={{
              title: 'Saved',
              headerShown: false,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              headerShown: false,
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
              title: 'Search',
              headerShown: false,
            }}
        />
    </Tabs>
  )
}

export default _layout