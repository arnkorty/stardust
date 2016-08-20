import React from 'react'
import { Button, Checkbox, Form } from 'stardust'

const FormFormExample = () => (
  <Form>
    <Form.Field label='First Name'>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field label='Last Name'>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field label='First Name'>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>
      Submit
    </Button>
  </Form>
)

export default FormFormExample
