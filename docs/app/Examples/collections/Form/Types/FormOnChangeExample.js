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

class FormOnChangeExample extends Component {
  state = {}

  handleRadioClick = (e, { value }) => this.setState({ value })
  handleChange = (e, data) => this.setState({ data })

  render() {
    const { data, value } = this.state
    return (
      <div>
        <Form onChange={this.handleChange}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>First name</label>
              <Input name='firstName' placeholder='First name' />
            </Form.Field>
            <Form.Field>
              <label>Last name</label>
              <Input name='lastName' placeholder='Last name' />
            </Form.Field>
            <Form.Field>
              <label>Gender</label>
              <Select name='gender' options={options} placeholder='Gender' />
            </Form.Field>
          </Form.Group>
          <Form.Group inline>
            <label>Account Type</label>
            <Form.Field>
              <Radio
                label='Personal'
                name='onChangeRadios'
                value='personal'
                checked={value === 'personal'}
                onClick={this.handleRadioClick}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Business'
                name='onChangeRadios'
                value='business'
                checked={value === 'business'}
                onClick={this.handleRadioClick}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field label='About'>
            <TextArea name='about' placeholder='Tell us more about you...' />
          </Form.Field>
          <Form.Field>
            <Checkbox name='terms' label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Form.Field>
            <Button>Submit</Button>
          </Form.Field>
        </Form>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  }
}

export default FormOnChangeExample
