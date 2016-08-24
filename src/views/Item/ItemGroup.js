import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
} from '../../lib'

function ItemGroup(props) {
  const { className, children } = props
  const classes = cx('ui', className, 'items')
  const rest = getUnhandledProps(ItemGroup, props)

  return <div {...rest} className={classes}>{children}</div>
}

ItemGroup._meta = {
  name: 'ItemGroup',
  type: META.TYPES.VIEW,
  parent: 'Item',
}

ItemGroup.propTypes = {
  /** Primary content of the ItemGroup. */
  children: PropTypes.node,

  /** Classes that will be added to the ItemGroup className. */
  className: PropTypes.string,
}

export default ItemGroup
