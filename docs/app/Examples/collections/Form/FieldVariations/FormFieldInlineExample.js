import React from 'react'
import { Form, Input } from 'stardust'

const FormFieldInlineExample = () => (
  <Form>
    <Form.Field label='First name' className='inline'>
      <Input placeholder='First name' />
    </Form.Field>
  </Form>
)

export default FormFieldInlineExample
