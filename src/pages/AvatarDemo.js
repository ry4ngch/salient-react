import React from "react";
import Avatar from "../utils/Salient/UI/Avatar/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Card, {CardContent} from "../utils/Salient/UI/Card/Card";
import Grid, {GridRow, GridItem} from "../utils/Salient/UI/Grid/Grid";
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

export default function AvatarDemo() {
    return (
        <React.Fragment>
            <h2>Avatar</h2>
            <p>
                The Avatar component displays an image or a FontAwesome icon, with
                configurable size, shape, decorative border and a catch-light highlight.
            </p>

            <h3>Import</h3>
            <CodeBlock code={`import Avatar from '../utils/Salient/UI/Avatar/Avatar';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`<Avatar src="/photo.jpg" alt="User portrait" size="100px" shape="circle" />`} />
            <CodeBlock code={`<Avatar size="80px" borderGap="10px" hasBorder={true}>
    <FontAwesomeIcon icon={['fas', 'user']} size="sm" />
</Avatar>`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>src</code> / <code>alt</code></td>
                    <td data-field="Description">Image source and alt text; <code>size</code> sets the rendered size (e.g. <code>'100px'</code>).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>shape</code></td>
                    <td data-field="Description"><code>'circle'</code> (default) or <code>'rect'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>hasBorder</code></td>
                    <td data-field="Description">Renders a decorative border; <code>borderGap</code> and <code>borderRotation</code> fine-tune its offset and angle.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>hasCatchLight</code></td>
                    <td data-field="Description">Adds a catch-light highlight overlay to the avatar.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>children</code></td>
                    <td data-field="Description">Custom content (e.g. a FontAwesome icon) overrides the <code>img</code> element.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>style</code> / <code>className</code></td>
                    <td data-field="Description">Both are passed through to the wrapper div.</td>
                </TableRow>
            </Table>

            <Card className='card-border mt-2'>
                <CardContent>
                    Avatar component is used to display an image or a font awesome icon. It can be customized with different sizes and shapes.
                    <Grid style={{marginTop:'10px'}}>
                        <GridRow>
                            <GridItem>
                                <Avatar
                                    src="https://placehold.co/100x100"
                                    size="100px"
                                    borderGap="10px"
                                    shape="rect"
                                />
                                <span style={{marginLeft: '5px'}}>Rectangular Avatar</span>
                            </GridItem>
                            <GridItem>
                                <Avatar
                                    src="https://placehold.co/100x100"
                                    size="100px"
                                    borderGap="20px"
                                    borderRotation="30deg"
                                    hasBorder={true}
                                    hasCatchLight
                                />
                                <span style={{marginLeft: '5px'}}>Circular Avatar with Border and Catchlight</span>
                            </GridItem>
                            <GridItem>
                                <Avatar
                                    src="https://placehold.co/100x100"
                                    size="100px"
                                    borderGap="20px"
                                    shape="rect"
                                    hasBorder={true}
                                />
                                <span style={{marginLeft: '5px'}}>Rectangular Avatar with Border</span>
                            </GridItem>
                        </GridRow>
                        <GridRow>
                            <GridItem>
                                <Avatar
                                        size="80px"
                                        borderGap="10px"
                                        hasBorder={true}
                                    >
                                    <FontAwesomeIcon icon={['fas', 'user']} size="sm" />
                                </Avatar>
                                <span style={{marginLeft: '5px'}}>Icon Avatar</span>
                            </GridItem>
                        </GridRow>
                    </Grid>

                </CardContent>
            </Card>
        </React.Fragment>
    )
}
