import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Menus extends Component {
  handleItemClick = (e, name) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          Browse
        </Menu.Item>

        <Menu.Item active={activeItem === 'submit'} onClick={this.handleItemClick}>
          Submit
        </Menu.Item>

       <Menu.Menu position='right'>
         <Menu.Item active={activeItem === 'signup'} onClick={this.handleItemClick}>
           Sign Up
         </Menu.Item>

         <Menu.Item active={activeItem === 'help'} onClick={this.handleItemClick}>
           Help
         </Menu.Item>
       </Menu.Menu>
      </Menu>
    )
  }
}
