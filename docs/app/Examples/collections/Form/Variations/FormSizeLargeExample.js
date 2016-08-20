import React from 'react'
import { Button, Form, Input } from 'stardust'

const FormSizeLargeExample = () => (
  <Form className='large'>
    <Form.Group>
      <Form.Field label='First name'>
        <Input placeholder='First name' />
      </Form.Field>
      <Form.Field label='Last name'>
        <Input placeholder='Last name' />
      </Form.Field>
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormSizeLargeExample
