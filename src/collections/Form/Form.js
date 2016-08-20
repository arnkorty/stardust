import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import FormField from './FormField'
import FormButton from './FormButton'
import FormCheckbox from './FormCheckbox'
import FormDropdown from './FormDropdown'
import FormGroup from './FormGroup'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSelect from './FormSelect'
import FormTextArea from './FormTextArea'

function formSerializer(formNode) {
  const json = {}
  // handle empty formNode ref
  if (!formNode) return json

  // ----------------------------------------
  // Checkboxes
  // Single: { name: value|bool        }
  // Group:  { name: [value|bool, ...] }

  _.each(formNode.querySelectorAll('input[type="checkbox"]'), (node, index, arr) => {
    const name = node.getAttribute('name')
    const checkboxesByName = _.filter(arr, { name })

    // single: (value|checked)
    if (checkboxesByName.length === 1) {
      json[name] = node.checked && node.value !== 'on' ? node.value : node.checked
      return
    }

    // groups (checked): [value, ...]
    if (!Array.isArray(json[name])) json[name] = []
    if (node.checked) json[name].push(node.value)

    // in dev, warn about multiple checkboxes with a default browser value of "on"
    if (process.NODE_ENV !== 'production' && node.value === 'on') {
      const errorMessage = [
        "Encountered a checkbox in a group with the default browser value 'on'.",
        'Each checkbox in a group should have a unique value.',
        "Otherwise, the checkbox value will serialize as ['on', ...].",
      ].join(' ')
      console.error(errorMessage, node, formNode) // eslint-disable-line no-console
    }
  })

  // ----------------------------------------
  // Radios
  // checked: { name: checked value }
  // none:    { name: null }

  _.each(formNode.querySelectorAll('input[type="radio"]'), (node, index, arr) => {
    const name = node.getAttribute('name')
    const checkedRadio = _.find(arr, { name, checked: true })

    if (checkedRadio) {
      json[name] = checkedRadio.value
    } else {
      json[name] = null
    }

    // in dev, warn about radios with a default browser value of "on"
    if (process.NODE_ENV !== 'production' && node.value === 'on') {
      const errorMessage = [
        "Encountered a radio with the default browser value 'on'.",
        'Each radio should have a unique value.',
        "Otherwise, the radio value will serialize as { [name]: 'on' }.",
      ].join(' ')
      console.error(errorMessage, node, formNode) // eslint-disable-line no-console
    }
  })

  // ----------------------------------------
  // Other inputs and text areas
  // { name: value }

  _.each(formNode.querySelectorAll([
    'input:not([type="radio"]):not([type="checkbox"])',
    'textarea',
  ].join(', ')), (node) => {
    json[node.getAttribute('name')] = node.value
  })

  // ----------------------------------------
  // Selects
  // single:   { name: value }
  // multiple: { name: [value, ...] }

  _.each(formNode.querySelectorAll('select'), (node) => {
    const name = node.getAttribute('name')

    if (node.multiple) {
      json[name] = _.map(_.filter(node.querySelectorAll('option'), 'selected'), 'value')
    } else {
      json[name] = node.value
    }
  })

  return json
}

/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see TextArea
 */
function Form(props) {
  const { className, children, error, loading, onChange, size, success, warning, widths } = props
  const classes = cx(
    'ui',
    size,
    useKeyOnly(loading, 'loading'),
    useKeyOnly(success, 'success'),
    useKeyOnly(error, 'error'),
    useKeyOnly(warning, 'warning'),
    useWidthProp(widths, null, true),
    'form',
    className,
  )
  const rest = getUnhandledProps(Form, props)
  const ElementType = getElementType(Form, props)
  let _form

  const handleChange = (e) => {
    if (onChange) onChange(e, props.serializer(_form))
  }

  return (
    <ElementType
      {...rest}
      className={classes}
      onChange={handleChange}
      ref={(c) => (_form = _form || c)}
    >
      {children}
    </ElementType>
  )
}

Form.Field = FormField
Form.Button = FormButton
Form.Checkbox = FormCheckbox
Form.Dropdown = FormDropdown
Form.Group = FormGroup
Form.Input = FormInput
Form.Radio = FormRadio
Form.Select = FormSelect
Form.TextArea = FormTextArea

Form._meta = {
  name: 'Form',
  type: META.TYPES.COLLECTION,
  props: {
    widths: ['equal'],
    size: _.without(SUI.SIZES, 'medium'),
  },
}

Form.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content */
  children: PropTypes.node,

  /** Additional classes */
  className: PropTypes.string,

  /** Automatically show a loading indicator */
  loading: PropTypes.bool,

  /** Automatically show any success Message children */
  success: PropTypes.bool,

  /** Automatically show any error Message children */
  error: PropTypes.bool,

  /** Automatically show any warning Message children */
  warning: PropTypes.bool,

  /** A form can vary in size */
  size: PropTypes.oneOf(Form._meta.props.size),

  /** Forms can automatically divide fields to be equal width */
  widths: PropTypes.oneOf(Form._meta.props.widths),

  /** Called onChange with the form node that returns the serialized form object */
  serializer: PropTypes.func,

  /** Called with (event, jsonSerializedForm) on change */
  onChange: PropTypes.func,
}

Form.defaultProps = {
  as: 'form',
  serializer: formSerializer,
}

export default Form
