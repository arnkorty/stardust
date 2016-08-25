import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import { Divider, Header, Label, Table } from 'stardust'

const DOCBLOCK_DESCRIPTION_DEFAULTS = {
  children: 'Body of the component.',
  className: 'Class names for custom styling.',
}

/**
 * Displays a table of a Component's PropTypes.
 */
export default class ComponentProps extends Component {
  static propTypes = {
    /**
     * A single Component's prop info as generated by react-docgen.
     * @type {object} Props info object where keys are prop names and values are prop definitions.
     */
    props: PropTypes.object,
  }

  nameRenderer = (item) => <code>{item.name}</code>

  requiredRenderer = (item) => {
    if (item.required) {
      return <Label size='mini' color='red' circular>required</Label>
    }
  }
  defaultValueRenderer = (item) => {
    let defaultValue = _.get(item, 'defaultValue.value')

    if (_.startsWith(defaultValue, 'function ')) {
      defaultValue = defaultValue.match(/^function(.*)\{/)[1].trim() + ' { ... }'
    }

    const defaultIsComputed = <span className='ui mini gray circular label'>computed</span>

    return (
      <div>
        {defaultValue} {_.get(item, 'defaultValue.computed') && defaultIsComputed}
      </div>
    )
  }

  render() {
    const propsDefinition = this.props.props
    const content = _.map(propsDefinition, (propConfig, propName) => {
      const name = propName
      const description = _.get(propConfig, 'docBlock.description') || DOCBLOCK_DESCRIPTION_DEFAULTS[name]

      const value = _.get(propConfig, 'type.value')
      let type = _.get(propConfig, 'type.name')
      if (type === 'union') {
        type = _.map(value, (val) => val.name).join('|')
      }
      type = type && `{${type}}`

      const required = propConfig.required
      const defaultValue = propConfig.defaultValue

      return {
        name,
        type,
        value,
        required,
        defaultValue,
        description,
      }
    })

    return (
      <div>
        <Header as='h2'>Props</Header>
        <Table data={content} className='very basic compact'>
          <Table.Column dataKey='name' cellRenderer={this.nameRenderer} />
          <Table.Column cellRenderer={this.requiredRenderer} />
          <Table.Column dataKey='type' />
          <Table.Column dataKey='defaultValue' cellRenderer={this.defaultValueRenderer} />
          <Table.Column dataKey='description' />
        </Table>
        <Divider className='hidden section' />
      </div>
    )
  }
}
