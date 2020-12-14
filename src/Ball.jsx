import React, { useState, useEffect } from 'react'
import { Animated, Text, View } from 'react-native'

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 30,
    borderColor: 'pink',
  },
}

const Ball = () => {
  const [position] = useState(new Animated.ValueXY(0, 0))

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 300, y: 600 },
    }).start()
  }, [])

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  )
}

export default Ball
