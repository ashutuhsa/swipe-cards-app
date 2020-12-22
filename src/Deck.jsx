/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = 0.30 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 300

const Deck = (props) => {
  const {
    data,
    CustomCard,
    onSwipeLeft,
    onSwipeRight,
  } = props
  const position = useRef(new Animated.ValueXY()).current
  const [currentIndex, setCurrentIndex] = useState(0)

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
    }).start()
  }

  const onSwipeComplete = (direction) => {
    const item = data[currentIndex]

    // eslint-disable-next-line no-unused-expressions
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)
    position.setValue({ x: 0, y: 0 })

    console.log('previous:', currentIndex)
    console.log('next:', currentIndex + 1)
    setCurrentIndex(currentIndex + 1)
  }

  const forceSwipe = (direction) => {
    Animated.timing(position, {
      toValue: {
        x: direction === 'left' ? -SCREEN_WIDTH : SCREEN_WIDTH,
        y: 0,
      },
      duration: SWIPE_OUT_DURATION,
    }).start(() => onSwipeComplete(direction))
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          console.log('swipe right. Current index: ', currentIndex)
          forceSwipe('right')
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          console.log('swipe left')
          forceSwipe('left')
        } else {
          resetPosition()
        }
      },
    }),
  ).current

  // calculates the rotation
  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.6, 0, SCREEN_WIDTH * 1.6],
      outputRange: ['-120deg', '0deg', '120deg'],
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    }
  }

  const renderCards = () => data.map((item, i) => {
    if (i < currentIndex) {
      console.log('skip item:', item)
      return null
    }

    if (i === currentIndex) {
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

    return (
      <CustomCard
        key={item.id}
        title={item.title}
        imageUri={item.uri}
      />
    )
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
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func,
}

Deck.defaultProps = {
  onSwipeLeft: () => {},
  onSwipeRight: () => {},
}

export default Deck
