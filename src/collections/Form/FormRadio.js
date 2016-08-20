import React from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'
import FormField from './FormField'
import { Radio } from '../../addons'

/**
 * Sugar for <Form.Field control={Radio} />
 * @see Form
 * @see Radio
 */
function FormRadio(props) {
  const rest = getUnhandledProps(FormRadio, props)
  const ElementType = getElementType(FormRadio, props)
  return <ElementType {...props} />
}

FormRadio._meta = {
  name: 'FormRadio',
  parent: 'FormField',
  type: META.TYPES.COLLECTION,
}

FormRadio.propTypes = {
  ...Radio.propTypes,
}

FormRadio.defaultProps = {
  as: FormField,
  control: Radio,
}

export default FormRadio
