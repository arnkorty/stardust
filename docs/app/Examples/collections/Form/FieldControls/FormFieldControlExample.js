import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'stardust'

const options = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

class FormFieldControlExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First name' placeholder='First name' />
          <Form.Field control={Input} label='Last name' placeholder='Last name' />
          <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Account Type</label>
          <Form.Field
            control={Radio}
            label='Personal'
            name='fieldControlRadios'
            value='personal'
            checked={value === 'personal'}
            onClick={this.handleRadioClick}
          />
          <Form.Field
            control={Radio}
            label='Business'
            name='fieldControlRadios'
            value='business'
            checked={value === 'business'}
            onClick={this.handleRadioClick}
          />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default FormFieldControlExample
