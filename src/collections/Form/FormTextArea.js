import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { TextArea } from '../../addons'

/**
 * Sugar for <Form.Field control={TextArea} />
 * @see Form
 * @see TextArea
 */
function FormTextArea(props) {
  const rest = getUnhandledProps(FormTextArea, props)
  const ElementType = getElementType(FormTextArea, props)
  return <ElementType {...props} />
}

FormTextArea._meta = {
  name: 'FormTextArea',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormTextArea.propTypes = {
  ...TextArea.propTypes,
}

FormTextArea.defaultProps = {
  as: FormField,
  control: TextArea,
}

export default FormTextArea
