import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Input } from '../../elements'

/**
 * Sugar for <Form.Field control={Input} />
 * @see Form
 * @see Input
 */
function FormInput(props) {
  const ElementType = getElementType(FormInput, props)
  const rest = getUnhandledProps(FormInput, props)
  return <ElementType {...props} />
}

FormInput._meta = {
  name: 'FormInput',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormInput.propTypes = {
  ...Input.propTypes,
}

FormInput.defaultProps = {
  as: FormField,
  control: Input,
}

export default FormInput
