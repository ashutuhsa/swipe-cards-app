/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

const Deck = (props) => {
  const { data, CustomCard } = props
  const position = new Animated.ValueXY()
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: () => {},
    }),
  ).current

  const getCardStyle = () => {
    // calculates the rotation
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.6, 0, SCREEN_WIDTH * 1.6],
      outputRange: ['-120deg', '0deg', '120deg'],
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    }
  }

  const renderCards = () => data.map((item, index) => {
    if (index === 0) {
      return (
        <Animated.View
          key={item.id}
          style={getCardStyle()}
          {...panResponder.panHandlers}
        >
          <CustomCard
            title={item.title}
            imageUri={item.uri}
          />
        </Animated.View>
      )
    }
    // return (
    //   <CustomCard
    //     key={item.id}
    //     title={item.title}
    //     imageUri={item.uri}
    //   />
    // )
  })

  return (
    <View>
      {renderCards()}
    </View>
  )
}

Deck.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  CustomCard: PropTypes.func.isRequired,
}

// Deck.defaultProps = {

// }

export default Deck
