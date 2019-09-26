import React, { Component } from 'react'
import Form from 'react-jsonschema-form'

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Dan' },
    lastName: { type: 'string', default: 'Abramov' }
  }
}

export default class JSONSchemaForm extends Component {

  handleSubmit = ({ formData }) => {
    console.log(`${formData.firstName}`)
  }


  render = () => {
    const form = <Form schema={schema} onSubmit={this.handleSubmit} />
    return form
  }
}