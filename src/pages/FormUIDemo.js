import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Dropdown, {DropdownItem} from '../utils/Salient/UI/Form/Dropdown';
import FormAffix from '../utils/Salient/UI/Form/FormAffix';
import NumericField from '../utils/Salient/UI/Form/NumericField';
import TextField from '../utils/Salient/UI/Form/TextField';
import RangeSlider from '../utils/Salient/UI/Form/RangeSlider';
import Grid, {GridRow, GridItem} from '../utils/Salient/UI/Grid/Grid';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const FormUIsDemo = () => {
  const testNumericFieldCallback = (returnVal) => {
    console.log(returnVal);
    console.log(testRef);
  }

  const testRef = useRef(null);

  const updateSliderValue = () => {
    //console.log(event.target.value);
  }

  return (
        <React.Fragment>
            <h2>Form Controls</h2>
            <p>Salient provides a set of form controls: TextField for text input, Dropdown for select-like pickers, NumericField for bounded numeric input with +/- controls, RangeSlider, and FormAffix for icons affixed to an input.</p>

            <h3>Import</h3>
            <CodeBlock code={`import Dropdown, {DropdownItem} from '../utils/Salient/UI/Form/Dropdown';
import FormAffix from '../utils/Salient/UI/Form/FormAffix';
import NumericField from '../utils/Salient/UI/Form/NumericField';
import TextField from '../utils/Salient/UI/Form/TextField';
import RangeSlider from '../utils/Salient/UI/Form/RangeSlider';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`<TextField
  placeholder="Username"
  label="Username:"
  expandFull={true}
  inputPrefix={<FormAffix icon="icon-search" />} />

<Dropdown placeholder="Dropdown" isSearchable={true} onChange={(value) => console.log(value)}>
  <DropdownItem value="Test1">Test1</DropdownItem>
  <DropdownItem value="Test2">Test2</DropdownItem>
</Dropdown>`} />
            <CodeBlock code={`<NumericField
  min={1} max={20} step={0.01} value={5}
  fieldName="Items Per Page"
  enableSuggestion={true} suggestionLimit={5}
  callbackFn={(val) => console.log(val)}
  fieldControlPlacement="side" />

<RangeSlider defaultValue={40} label="Default Theme Slider" displayMinMaxText={{min: true, max: true}} />
<RangeSlider defaultValue={30} label="Gray Theme Slider" theme="gray" />`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>TextField</code></td>
                    <td data-field="Description"><code>label</code>, <code>inputPrefix</code>/<code>inputSuffix</code> (usually a FormAffix), <code>expandFull</code>; all other props are forwarded to the native <code>&lt;input&gt;</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>Dropdown</code></td>
                    <td data-field="Description"><code>placeholder</code>, <code>isSearchable</code> (typing filters/scrolls to options), <code>inputPrefix</code>, <code>expandFull</code>, <code>onChange</code> (receives the selected DropdownItem's <code>value</code>). Options are <code>&lt;DropdownItem value="..."&gt;</code> children.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>FormAffix</code></td>
                    <td data-field="Description"><code>icon</code> takes an icon class name, e.g. <code>'icon-search'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>NumericField</code></td>
                    <td data-field="Description"><code>min</code>/<code>max</code>/<code>step</code>/<code>value</code>, <code>fieldName</code> label, <code>enableSuggestion</code> + <code>suggestionLimit</code> for a value suggestion dropdown, <code>callbackFn</code> called on every value change, and <code>fieldControlPlacement</code> = <code>'side'</code> | <code>'top'</code> | <code>'bottom'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>RangeSlider</code></td>
                    <td data-field="Description"><code>label</code>, <code>min</code>/<code>max</code>/<code>step</code>, <code>defaultValue</code>, <code>onChange</code>, <code>theme</code> = <code>'gray'</code> | <code>'dark'</code>, and <code>displayMinMaxText</code> = <code>{'{'}min: true, max: true{'}'}</code>.</td>
                </TableRow>
            </Table>

            <Card className="card-border mt-2">
                <CardInfo>
                    <CardTitle>Form Controls - Dropdown</CardTitle>
                </CardInfo>
                <CardContent>
                    <CardTitle>Searchable Dropdown with Form Affix</CardTitle>
                    <Dropdown placeholder="Dropdown" isSearchable={true} inputPrefix={<FormAffix icon="icon-search"/>} expandFull={true}>
                        <DropdownItem value="Test1">Test1</DropdownItem>
                        <DropdownItem value="Test2">Test2</DropdownItem>
                        <DropdownItem value="Test3">Test3</DropdownItem>
                    </Dropdown>
                </CardContent>

                <CardContent>
                    <CardTitle>Searchable Dropdown</CardTitle>
                    <Dropdown placeholder="Dropdown" isSearchable={true} expandFull={true}>
                        <DropdownItem value="Test1">Test1</DropdownItem>
                        <DropdownItem value="Test2">Test2</DropdownItem>
                        <DropdownItem value="Test3">Test3</DropdownItem>
                    </Dropdown>
                </CardContent>

                <CardContent>
                    <CardTitle>Normal Dropdowns with Form Affix</CardTitle>
                    <Dropdown placeholder="Dropdown" inputPrefix={<FormAffix icon="icon-search"/>} expandFull={true}>
                        <DropdownItem value="Test1">Test1</DropdownItem>
                        <DropdownItem value="Test2">Test2</DropdownItem>
                        <DropdownItem value="Test3">Test3</DropdownItem>
                    </Dropdown>
                </CardContent>

                <CardContent>
                    <CardTitle>Normal Dropdowns</CardTitle>
                    <Dropdown placeholder="Dropdown" expandFull={true}>
                        <DropdownItem value="Test1">Test1</DropdownItem>
                        <DropdownItem value="Test2">Test2</DropdownItem>
                        <DropdownItem value="Test3">Test3</DropdownItem>
                    </Dropdown>
                </CardContent>
            </Card>

            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Form Controls - Numeric Field</CardTitle>
                </CardInfo>
                <CardContent>
                    <Grid>
                        <GridRow>
                            <GridItem>
                                <CardTitle>Side Placement</CardTitle>
                                <NumericField min={1} max={20} value={5} step={.01} fieldName="Items Per Page" enableSuggestion={true} suggestionLimit={5} callbackFn={testNumericFieldCallback} ref={testRef} fieldControlPlacement="side"/>
                            </GridItem>
                            <GridItem>
                                <CardTitle>Top Placement</CardTitle>
                                <NumericField min={1} max={20} value={5} step={.01} fieldName="Items Per Page" enableSuggestion={true} suggestionLimit={5} callbackFn={testNumericFieldCallback} ref={testRef} fieldControlPlacement="top"/>
                            </GridItem>
                            <GridItem>
                                <CardTitle>Bottom Placement</CardTitle>
                                <NumericField min={1} max={20} value={5} step={.01} fieldName="Items Per Page" enableSuggestion={true} suggestionLimit={5} callbackFn={testNumericFieldCallback} ref={testRef} fieldControlPlacement="bottom"/>
                            </GridItem>
                        </GridRow>
                    </Grid>
                </CardContent>
            </Card>

            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Form Controls - Text Field</CardTitle>
                </CardInfo>
                <CardContent>
                    <TextField 
                        placeholder="Username" 
                        type="text"
                        expandFull={true} 
                        inputPrefix={<FormAffix icon="icon-search"/>}
                        inputSuffix={<FontAwesomeIcon icon="eye" style={{padding: '0 5px'}}/>}
                        label="Username:"
                    />
                </CardContent>
            </Card>

            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Form Controls - Range Slider</CardTitle>
                </CardInfo>
                <CardContent>
                   <RangeSlider defaultValue={40} label="Default Theme Slider" displayMinMaxText={{min: true, max: true}} onChange={updateSliderValue}/>
                   <RangeSlider defaultValue={30} label="Gray Theme Slider" theme="gray"/>
                   <RangeSlider defaultValue={60} label="Dark Theme Slider" theme="dark"/>
                </CardContent>
            </Card>
        </React.Fragment>
  )
}

export default FormUIsDemo;