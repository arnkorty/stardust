import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'
import ItemDescription from './ItemDescription'
import ItemGroup from './ItemGroup'

function Item(props) {
  const { children, className } = props
  const classes = cx(className, 'item')
  const rest = getUnhandledProps(Item, props)

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}

Item._meta = {
  name: 'Item',
  type: META.TYPES.VIEW,
}

Item.Description = ItemDescription
Item.Group = ItemGroup

Item.propTypes = {
  /** Primary content of the Item. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Item className. */
  className: PropTypes.string,
}

export default Item
