import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { THEME_ENUM } from 'constants/theme.constant'

const { MODE_DARK } = THEME_ENUM

function DoubleSidedImage({ src, darkModeSrc, alt, ...rest }) {
  const mode = useSelector((state) => state.theme.mode)

  return (
    <img src={mode === MODE_DARK ? darkModeSrc : src} alt={alt} {...rest} />
  )
}

DoubleSidedImage.propTypes = {
  darkModeSrc: PropTypes.string,
}

DoubleSidedImage.defaultProps = {
  darkModeSrc: ''
}

export default DoubleSidedImage
