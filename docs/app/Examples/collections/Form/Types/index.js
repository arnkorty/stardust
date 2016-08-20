import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

import { Message } from 'src/collections'

const FormTypesExamples = () => (
  <ExampleSection title='Types'>
    {/*<ComponentExample*/}
      {/*title='Form'*/}
      {/*description='A form.'*/}
      {/*examplePath='collections/Form/Types/FormFormExample'*/}
    {/*>*/}
      {/*<Message>*/}
        {/*Form Fields have a robust shorthand props API for generating controls wrapped in FormFields. See below.*/}
      {/*</Message>*/}
    {/*</ComponentExample>*/}
    <ComponentExample
      title='onChange'
      description='A form calls back with the serialized data on change'
      examplePath='collections/Form/Types/FormOnChangeExample'
    />
  </ExampleSection>
)

export default FormTypesExamples
