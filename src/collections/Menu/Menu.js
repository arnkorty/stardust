import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'
import MenuMenu from './MenuMenu'

const _meta = {
  name: 'Menu',
  type: META.TYPES.COLLECTION,
  props: {
    widths: SUI.WIDTHS,
  },
}

/**
 * A menu displays grouped navigation actions.
 * */
class Menu extends Component {
  static propTypes = {
    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** Primary content of the Menu. */
    children: PropTypes.node,

    /** Classes that will be added to the Menu className. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,

    /** onClick handler for MenuItem. */
    onItemClick: PropTypes.func,

    /** A vertical menu displays elements vertically. */
    vertical: PropTypes.bool,

    /** A menu can have its items divided evenly. */
    widths: PropTypes.oneOf(_meta.props.widths),
  }

  static _meta = _meta

  static autoControlledProps = [
    'activeIndex',
  ]

  static Header = MenuHeader
  static Item = MenuItem
  static Menu = MenuMenu

  // componentWillMount() {
  //   super.componentWillMount()
  //
  //   const activeIndex = _.findIndex(this.props.children, child => {
  //     return child.type === MenuItem && _.has(child, 'props.active') && child.props.active
  //   })
  //   this.trySetState({ activeIndex: _.isNumber(activeIndex) ? activeIndex : 0 })
  // }
  //
  // handleItemClick = (e, index) => {
  //   const { onItemClick } = this.props
  //
  //   this.trySetState({ activeIndex: index })
  //   if (onItemClick) onItemClick(e, index)
  // }
  //
  // renderChildren = () => {
  //   const { children } = this.props
  //   const { activeIndex } = this.state
  //
  //   return Children.map(children, (child, i) => {
  //     const isItem = child.type === MenuItem
  //     const isLink = _.has(child, 'props.href') || _.has(child, 'props.link') || _.has(child, 'props.onClick')
  //
  //     if (isItem) {
  //       const onClick = (e) => {
  //         if (isLink) this.handleItemClick(e, i)
  //         if (child.props.onClick) child.props.onClick(e, i)
  //       }
  //
  //       return cloneElement(child, { ...child.props, active: activeIndex === i, onClick })
  //     }
  //
  //     return child
  //   })
  // }

  render() {
    const { className, children, vertical, widths } = this.props
    const classes = cx(
      'ui',
      className,
      useWidthProp(widths),
      useKeyOnly(vertical, 'vertical'),
      'menu'
    )
    const rest = getUnhandledProps(Menu, this.props)

    return <div {...rest} className={classes}>{children}</div>
  }
}

export default Menu
