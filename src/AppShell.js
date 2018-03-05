import React from 'react';
import { LeapProvider } from './LeapProvider'
import MyApp from './myApp'

const AppShell = () => (
  <div>
    <LeapProvider options={{enableGestures: true}}>
      <MyApp />
    </LeapProvider>
  </div>
)

export default AppShell