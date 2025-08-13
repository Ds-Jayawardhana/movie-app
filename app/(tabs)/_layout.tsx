import { Tabs } from 'expo-router'
import React from 'react'

function _layout() {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: false,
            }}
        />
        <Tabs.Screen
            name="Saved"
            options={{
              title: 'Saved',
            headerShown: false,
            }}
        />
    </Tabs>
  )
}

export default _layout