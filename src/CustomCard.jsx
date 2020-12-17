import React from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, Image, StyleSheet,
} from 'react-native'
import {
  Card, ListItem, Button, Icon,
} from 'react-native-elements'

const CustomCard = (props) => {
  const { title, imageUri } = props

  return (
    <Card
      title={title}
    >
      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ marginBottom: '2em' }}>
        Some text here
      </Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor="#03a9f4"
        title="View"
      />
    </Card>
  )
}

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUri: PropTypes.string.isRequired,
}

export default CustomCard
