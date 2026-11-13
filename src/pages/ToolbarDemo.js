import React from "react";
import Toolbar, {ToolbarButton} from "../utils/Salient/UI/Toolbar/Toolbar";
import Grid, {GridRow, GridItem} from '../utils/Salient/UI/Grid/Grid'
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const ToolbarDemo = () => {
    return (
            <React.Fragment>
                <h2>Toolbar</h2>
                <p>
                    The Toolbar renders a group of icon buttons, typically as a compact action bar.
                    Each <code>ToolbarButton</code> can show a tooltip on hover, positioned above,
                    below, left or right of the button.
                </p>
                <h3>Import</h3>
                <CodeBlock code={`import Toolbar, {ToolbarButton} from '../utils/Salient/UI/Toolbar/Toolbar';`} />
                <h3>Basic Usage</h3>
                <CodeBlock code={`<Toolbar>
    <ToolbarButton tooltip="Search" tooltipOrientation="bottom">
        <i className="icon icon-search"></i>
    </ToolbarButton>
    <ToolbarButton tooltip="Tag">
        <i className="icon icon-tag"></i>
    </ToolbarButton>
</Toolbar>`} />
                <h3>Key Props</h3>
                <Table columns={['Prop', 'Description']}>
                    <TableRow>
                        <td data-field="Prop"><code>Toolbar</code></td>
                        <td data-field="Description">Renders a <code>&lt;nav class=&quot;toolbar&quot;&gt;</code>; pass <code>isBlock=&#123;false&#125;</code> to skip the wrapping block-level <code>div</code> (default is <code>true</code>).</td>
                    </TableRow>
                    <TableRow>
                        <td data-field="Prop"><code>ToolbarButton</code></td>
                        <td data-field="Description">Accepts <code>tooltip</code> (hover label) and <code>tooltipOrientation</code> — <code>'top'</code> (default), <code>'bottom'</code>, <code>'left'</code> or <code>'right'</code>.</td>
                    </TableRow>
                    <TableRow>
                        <td data-field="Prop"><code>ToolbarButton</code></td>
                        <td data-field="Description">Wraps its children in a <code>span.toolbar-button__icon</code> with <code>aria-hidden</code>, so keep any meaningful text in the tooltip.</td>
                    </TableRow>
                    <TableRow>
                        <td data-field="Prop"><code>layoutHorz</code></td>
                        <td data-field="Description">The current CSS applies vertical toolbar styling when this prop is passed to <code>Toolbar</code>; omit it for the default horizontal bar.</td>
                    </TableRow>
                </Table>
            <Grid>
                <GridRow>
                    <GridItem>
                        <Toolbar layoutHorz={false}>
                            <ToolbarButton tooltip="Tag" tooltipOrientation="bottom">
                                <i className="icon icon-tag"></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Search" tooltipOrientation="bottom">
                                <i className="icon icon-search"></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Up" tooltipOrientation="bottom">
                                <i className="icon icon-up"></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Heart" tooltipOrientation="bottom">
                                <i className='icon icon-heart'></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="One" tooltipOrientation="bottom">
                                <span>One</span>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Two" tooltipOrientation="bottom">
                                <span>Two</span>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Three" tooltipOrientation="bottom">
                                <span>Three</span>
                            </ToolbarButton>
                        </Toolbar>
                    </GridItem>
                    <GridItem>
                        <Toolbar layoutHorz={true}>
                            <ToolbarButton tooltip="Tag">
                                <i className="icon icon-tag"></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Search">
                                <i className="icon icon-search"></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Up">
                                <i className="icon icon-up"></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Heart">
                                <i className='icon icon-heart'></i>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Top" tooltipOrientation='top'>
                                <span>Tooltip Top</span>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Right" tooltipOrientation="right">
                                <span>Tooltip Right</span>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Bottom" tooltipOrientation='bottom'>
                                <span>Tooltip Bottom</span>
                            </ToolbarButton>
                            <ToolbarButton tooltip="Left" tooltipOrientation='left'>
                                <span>Tooltip Left</span>
                            </ToolbarButton>
                        </Toolbar>
                    </GridItem>
                </GridRow>
            </Grid>
            </React.Fragment>
    )
}

export default ToolbarDemo;