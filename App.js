import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { ClaimrClient, useLazyVerifiedLocation } from '@claimr/react-native-client'

const client = new ClaimrClient({ apiKey: 'YOUR_API_KEY' })

const App = () => {
  const { claim, state, submit } = useLazyVerifiedLocation({ client })
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>My ClaimR App</Text>
      <Text>State: { state.toLocaleUpperCase() }</Text>
      {submit && <Button onPress={submit} title={'Submit'} />}
      {claim && (
        <Text>
          {claim.location.latitude}, {claim.location.longitude}
        </Text>
      )}
	  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default App
