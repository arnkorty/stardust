import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Select } from '../../addons'

/**
 * Sugar for <Form.Field control={Select} />
 * @see Form
 * @see Select
 */
function FormSelect(props) {
  const rest = getUnhandledProps(FormSelect, props)
  const ElementType = getElementType(FormSelect, props)
  return <ElementType {...props} />
}

FormSelect._meta = {
  name: 'FormSelect',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormSelect.propTypes = {
  ...Select.propTypes,
}

FormSelect.defaultProps = {
  as: FormField,
  control: Select,
}

export default FormSelect
