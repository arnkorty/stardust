import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Dropdown } from '../../modules'

/**
 * Sugar for <Form.Field control={Dropdown} />
 * @see Dropdown
 * @see Form
 */
function FormDropdown(props) {
  const rest = getUnhandledProps(FormDropdown, props)
  const ElementType = getElementType(FormDropdown, props)
  return <ElementType {...props} />
}

FormDropdown._meta = {
  name: 'FormDropdown',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormDropdown.propTypes = {
  ...Dropdown.propTypes,
}

FormDropdown.defaultProps = {
  as: FormField,
  control: Dropdown,
}

export default FormDropdown
