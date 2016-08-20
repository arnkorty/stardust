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

class FormSubComponentControlExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
          <Form.Select label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Account Type</label>
          <Form.Radio
            label='Personal'
            name='fieldSubComponentRadios'
            value='personal'
            checked={value === 'personal'}
            onClick={this.handleRadioClick}
          />
          <Form.Radio
            label='Business'
            name='fieldSubComponentRadios'
            value='business'
            checked={value === 'business'}
            onClick={this.handleRadioClick}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormSubComponentControlExample
