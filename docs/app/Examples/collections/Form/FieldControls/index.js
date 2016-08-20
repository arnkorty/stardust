import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const FormTypesExamples = () => (
  <div>
    <ExampleSection title='Shorthand'>
      <ComponentExample
        title='Form Sub Components'
        description='Form sub component controls render a control wrapped in a Field'
        examplePath='collections/Form/FieldControls/FormSubComponentControlExample'
      />
      <ComponentExample
        title='Field Control Prop'
        description='A Field can render a label and form control via props'
        examplePath='collections/Form/FieldControls/FormFieldControlExample'
      />
      <ComponentExample
        description='The control prop can also render HTML tags'
        examplePath='collections/Form/FieldControls/FormFieldControlHTMLExample'
      />
    </ExampleSection>
  </div>
)

export default FormTypesExamples
