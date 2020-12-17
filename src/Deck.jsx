import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated } from 'react-native'

const Deck = (props) => {
  const { data, CustomCard } = props

  const renderCards = () => data.map((item) => (
    <CustomCard
      key={item.id}
      title={item.title}
      imageUri={item.uri}
    />
  ))

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
