import React from 'react'
import { Form, Input } from 'stardust'

const FormFieldErrorExample = () => (
  <Form>
    <Form.Field label='First name' className='error'>
      <Input placeholder='First name' />
    </Form.Field>
  </Form>
)

export default FormFieldErrorExample
