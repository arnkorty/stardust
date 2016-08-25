import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import { Checkbox } from '../../modules'

/**
 * A Radio is sugar for <Checkbox type='radio' inputType='radio' />.
 * Useful for exclusive groups of type='slider' or type='toggle'.
 * @see Checkbox
 * @see Form
 */
function Radio(props) {
  const ElementType = getElementType(Radio, props)
  const rest = getUnhandledProps(Radio, props)
  return <ElementType {...rest} />
}

Radio._meta = {
  name: 'Radio',
  type: META.TYPES.ADDON,
}

Radio.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
}

Radio.defaultProps = {
  as: Checkbox,
  inputType: 'radio',
  type: 'radio',
}

export default Radio
