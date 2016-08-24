import _ from 'lodash'
import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

import ComponentDescription from './ComponentDescription'
import ComponentExamples from './ComponentExamples'
import ComponentProps from './ComponentProps'
import docgenInfo from '../../docgenInfo.json'

import * as stardust from 'src'

const docgenPaths = _.keys(docgenInfo)
const getDocgenPath = (componentName) => _.find(docgenPaths, path => new RegExp(`/${componentName}.js$`).test(path))

const ComponentDoc = ({ _meta }) => {
  // TODO remove docgetInfo searching in favor of separate docgen.json in each component directory
  // This just parses out a single docgen file based on component path name.
  // Our current docgen gulp task concats these into one, only for us to split it back out.
  // The leading slash in the RegEx is required, some components end with the same name.
  const docPath = getDocgenPath(_meta.name)
  const docgen = docgenInfo[docPath]

  // find all sub components that have this component as their parent
  const subComponents = _.flatMap(stardust, Component => _.filter(Component, staticValue => (
    _.get(staticValue, '_meta.parent') === _meta.name
  )))
  const subComponentDocgen = _.map(subComponents, sub => {
    const subDocgenPath = getDocgenPath(sub._meta.name)
    return docgenInfo[subDocgenPath]
  })

  return (
    <DocumentTitle title={`${_meta.name} | UI React`}>
      <div>
        <ComponentDescription
          _meta={_meta}
          docgen={docgen}
          docPath={docPath}
        />
        <div className='ui top attached tabular menu'>
          <div className='item'>{_meta.name}</div>
          {_.map(subComponents, sub => <div className='item'>{sub._meta.name}</div>)}
        </div>
        {docgen.props && (
          <div className='ui bottom attached tab segment'>
            <ComponentProps props={docgen.props} />
          </div>
        )}
        {!subComponentDocgen.length ? null : _.map(subComponentDocgen, (doc, path) => (
          <div className='ui bottom attached tab segment'>
            <ComponentProps key={path} props={doc.props} />
          </div>
        ))}
        <ComponentExamples name={_meta.name} />
      </div>
    </DocumentTitle>
  )
}

ComponentDoc.propTypes = {
  _meta: PropTypes.object,
}

export default ComponentDoc
