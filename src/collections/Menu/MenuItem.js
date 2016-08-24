import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function MenuItem(props) {
  const { active, children, className, header, href, link, onClick, position } = props
  const classes = cx(
    className,
    useKeyOnly(active, 'active'),
    useKeyOnly(header, 'header'),
    useKeyOnly(link, 'link'),
    position,
    'item',
  )
  const rest = getUnhandledProps(MenuItem, props)

  const handleClick = (e) => {
    if (onClick) onClick(e, name)
  }
  const ItemComponent = href || onClick ? 'a' : 'div'

  if (!children && name) {
    return <ItemComponent {...rest} className={classes} onClick={handleClick}>{name}</ItemComponent>
  }

  return <ItemComponent {...rest} className={classes} onClick={handleClick}>{children}</ItemComponent>
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    position: ['right'],
  },
}

MenuItem.propTypes = {
  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,

  /** A menu item can be link. */
  link: PropTypes.bool,

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** Internal name of the MenuItem. */
  name: PropTypes.string,

  /** Render as an `a` tag instead of a `div` and called with event on MenuItem click. */
  onClick: PropTypes.func,

  /** A menu item can take right position. */
  position: PropTypes.oneOf(MenuItem._meta.props.position),
}

export default MenuItem
