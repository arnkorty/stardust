import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Checkbox } from '../../modules'

/**
 * Sugar for <Form.Field control={Checkbox} />
 * @see Checkbox
 * @see Form
 */
function FormCheckbox(props) {
  const rest = getUnhandledProps(FormCheckbox, props)
  const ElementType = getElementType(FormCheckbox, props)
  return <ElementType {...props} />
}

FormCheckbox._meta = {
  name: 'FormCheckbox',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormCheckbox.propTypes = {
  ...Checkbox.propTypes,
}

FormCheckbox.defaultProps = {
  as: FormField,
  control: Checkbox,
}

export default FormCheckbox
