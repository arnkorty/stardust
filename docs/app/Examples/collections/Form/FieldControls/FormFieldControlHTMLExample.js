import React from 'react'
import { Form } from 'stardust'

const FormFieldHTMLControlExample = () => (
  <Form>
    <Form.Field control='input' label='An HTML <input>' />
    <Form.Field control='select' label='An HTML <select>'>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </Form.Field>
    <Form.Field control='textarea' label='An HTML <textarea>' />
    <Form.Field control='button' label='An HTML <button>'>
      HTML Button
    </Form.Field>
  </Form>
)

export default FormFieldHTMLControlExample
