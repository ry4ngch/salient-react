import React, {useState} from 'react'

// import Salient Library
import Button from '../utils/Salient/UI/Buttons/Button';
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const ButtonsDemo = () => {
    const [check, setCheck] = useState(true);
    return (
        <React.Fragment>
            <h2>Button</h2>
            <p>Button is a single component that renders buttons, toggle switches, and checkboxes depending on the type prop. It supports several visual styles, color modes, and a widget (icon-only) variant.</p>

            <h3>Import</h3>
            <CodeBlock code={`import Button from '../utils/Salient/UI/Buttons/Button';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`<Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true}>Button1</Button>
<Button type="button" buttonStyle="blur" inverseColor={true}>Button2</Button>`} />
            <CodeBlock code={`<Button type="switch" mode="forest" checked={check} onChange={(e) => setCheck(!check)} />
<Button type="checkbox" mode="dark" checked />
<Button type="button" buttonType="widget" icon="icon-tag" />`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>type</code></td>
                    <td data-field="Description"><code>'button'</code>, <code>'switch'</code> (toggle switch), or <code>'checkbox'</code>; one Button renders only its matching element.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>buttonStyle</code></td>
                    <td data-field="Description">button visual style: <code>'blur'</code>, <code>'blueBlur'</code>, or <code>'clear'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>mode</code></td>
                    <td data-field="Description">color theme for switches and checkboxes: <code>'dark'</code>, <code>'light'</code>, <code>'forest'</code>, <code>'sunset'</code>, or <code>'indigo'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>buttonType="widget"</code></td>
                    <td data-field="Description">renders an icon-only button; set the icon class via <strong>icon</strong> (e.g. <code>'icon-left-arrow'</code>).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>isBlock</code> / <code>expandFull</code></td>
                    <td data-field="Description">block layout and full-width expansion of buttons.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>inverseColor</code></td>
                    <td data-field="Description">inverts the button colors.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>checked</code> / <code>onChange</code></td>
                    <td data-field="Description">controlled state for switches and checkboxes; <strong>disabled</strong> disables any variant.</td>
                </TableRow>
            </Table>

            <Card className="bg-dark card-flat">
                <CardInfo>
                    <CardTitle>Block Button</CardTitle>
                </CardInfo>
                <CardContent>
                    <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true}>Button1</Button>
                    <Button type="button" buttonStyle="blur" isBlock={true} expandFull={true}>Button2</Button>
                    <Button type="button" buttonStyle="clear" isBlock={true} expandFull={true}>Button3</Button>
                </CardContent>
            </Card>

            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Checkboxes</CardTitle>
                </CardInfo>
                <CardContent>
                    <Table columns={['Checkbox Status', 'Display']}>
                        <TableRow>
                            <td data-field="Checkbox Status">Enabled (Blue)</td>
                            <td data-field="Display"><Button type="checkbox" checked></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Checkbox Status">Disabled</td>
                            <td data-field="Display"><Button type="checkbox" disabled={true}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Checkbox Status">Enabled (Dark)</td>
                            <td data-field="Display"><Button type="checkbox" mode="dark" checked></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Checkbox Status">Enabled (Light)</td>
                            <td data-field="Display"><Button type="checkbox" mode="light" checked></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Checkbox Status">Enabled (Forest)</td>
                            <td data-field="Display"><Button type="checkbox" mode="forest" checked></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Checkbox Status">Enabled (Sunset)</td>
                            <td data-field="Display"><Button type="checkbox" mode="sunset" checked></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Checkbox Status">Enabled (Indigo)</td>
                            <td data-field="Display"><Button type="checkbox" mode="indigo" checked></Button></td>
                        </TableRow>
                    </Table>
                </CardContent>
            </Card>

            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Toggle Switch</CardTitle>
                </CardInfo>
                <CardContent>
                    <Table columns={['Slider Mode / Status', 'Display']}>
                        <TableRow>
                            <td data-field="Slider Mode">Dark</td>
                            <td data-field="Display"><Button type="switch" mode="dark" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Slider Mode">Forest</td>
                            <td data-field="Display"><Button type="switch" mode="forest" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Slider Mode">Sunset</td>
                            <td data-field="Display"><Button type="switch" mode="sunset" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Slider Mode">Normal</td>
                            <td data-field="Display"><Button type="switch" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Slider Mode">Indigo</td>
                            <td data-field="Display"><Button type="switch" mode="indigo" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Status">Disabled</td>
                            <td data-field="Display"><Button type="switch" disabled={true}></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Status">Light</td>
                            <td data-field="Display"><Button type="switch" mode="light" onChange={(e) => {setCheck(!check)}} checked={check}></Button></td>
                        </TableRow>
                    </Table>
                </CardContent>
            </Card>

            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Widget Button</CardTitle>
                </CardInfo>
                <CardContent>
                    <Table columns={['Icon', 'Display']}>
                        <TableRow>
                            <td data-field="Icon">Left Arrow</td>
                            <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-left-arrow"></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Icon">Right Arrow</td>
                            <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-right-arrow"></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Icon">Top Arrow</td>
                            <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-top-arrow"></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Icon">Bottom Arrow</td>
                            <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-bottom-arrow"></Button></td>
                        </TableRow>
                        <TableRow>
                            <td data-field="Icon">Tag</td>
                            <td data-field="Display"><Button type="button" buttonType="widget" icon="icon-tag"></Button></td>
                        </TableRow>
                    </Table>
                </CardContent>
            </Card>
                
            <Card className="card-border">
                <CardInfo>
                    <CardTitle>Inverse Buttons</CardTitle>
                </CardInfo>
                <CardContent>
                    <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false} inverseColor={true}>Button4</Button>
                    <Button type="button" buttonStyle="blueBlur" isBlock={false} expandFull={false}>Button5</Button>
                    <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false} inverseColor={true}>Button6</Button>
                    <Button type="button" buttonStyle="blur" isBlock={false} expandFull={false}>Button7</Button>
                    <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false} inverseColor={true}>Button8</Button>
                    <Button type="button" buttonStyle="clear" isBlock={false} expandFull={false}>Button9</Button>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default ButtonsDemo;