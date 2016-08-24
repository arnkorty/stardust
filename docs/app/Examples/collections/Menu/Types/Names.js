import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Names extends Component {
  handleItemClick = (name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name='Editorials' active={activeItem === 'Editorials'} />
        <Menu.Item name='Reviews' active={activeItem === 'Reviews'} />
        <Menu.Item name='Events' active={activeItem === 'Events'} />
      </Menu>
    )
  }
}
