import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Button } from '../../elements'

/**
 * Sugar for <Form.Field control={Button} />
 * @see Button
 * @see Form
 */
function FormButton(props) {
  const rest = getUnhandledProps(FormButton, props)
  const ElementType = getElementType(FormButton, props)
  return <ElementType {...props} />
}

FormButton._meta = {
  name: 'FormButton',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormButton.propTypes = {
  ...Button.propTypes,
}

FormButton.defaultProps = {
  as: FormField,
  control: Button,
}

export default FormButton
