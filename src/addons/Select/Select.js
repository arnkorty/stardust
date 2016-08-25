import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import { Dropdown } from '../../modules'

/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  const { selection } = props
  const ElementType = getElementType(Select, props)
  const rest = getUnhandledProps(Select, props)
  return <ElementType {...rest} selection={selection} />
}

Select._meta = {
  name: 'Select',
  type: META.TYPES.ADDON,
}

Select.propTypes = {
  /** selection value */
  selection: PropTypes.bool,
}

Select.defaultProps = {
  as: Dropdown,
  selection: true,
}

export default Select
