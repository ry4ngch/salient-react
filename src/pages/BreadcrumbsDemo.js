import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Breadcrumb from '../utils/Salient/UI/Breadcrumb/Breadcrumb';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';


const BreadcrumbsDemo = () => {
    return (
        <React.Fragment>
            <h2>Breadcrumb</h2>
            <p>
                The Breadcrumb component renders a nav/ol list showing the user's position in
                a navigation hierarchy. It supports plain separators, and several visual types
                (triangle, multi-step, dot) driven by the <code>bcType</code> prop; the item with
                <code>className="active"</code> marks the current step.
            </p>

            <h3>Import</h3>
            <CodeBlock language="js" code={`import Breadcrumb from '../utils/Salient/UI/Breadcrumb/Breadcrumb';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`import Breadcrumb from './Breadcrumb';

<Breadcrumb separator="/">
    <li><a href="#0">Home</a></li>
    <li><a href="#0">Gallery</a></li>
    <li className="active"><a href="#0">Web</a></li>
</Breadcrumb>`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>separator</code></td>
                    <td data-field="Description">string shown between items (only when <code>bcType</code> is unset); applies the <code>custom-separator</code> class.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>bcType</code></td>
                    <td data-field="Description">alternate visual style: <code>triangle</code>, <code>multiStep</code>, or <code>dot</code>; multi-step variants mark items before the <code>.active</code> one as visited.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>hasBadge</code></td>
                    <td data-field="Description">default <code>false</code>; adds count-style badges for the multi-step variant.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>centerBc</code></td>
                    <td data-field="Description">default <code>false</code>; centers the breadcrumb trail.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>children</code></td>
                    <td data-field="Description">a list of <code>&lt;li&gt;</code> items; the one with <code>className="active"</code> is treated as the current step.</td>
                </TableRow>
            </Table>

            <Card className="card-border mt-2">
            <CardInfo>
                <CardTitle>Breadcrumbs With Seperator</CardTitle>
            </CardInfo>
            <CardContent>
                <Breadcrumb separator="/">
                    <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
                    <li><a href="#0">Gallery</a></li>
                    <li className="active"><a href="#0">Web</a></li>
                    <li><a href="#0">Project</a></li>
                </Breadcrumb>
            </CardContent>

            <CardInfo>
                <CardTitle>Breadcrumbs Dot Indicator</CardTitle>
            </CardInfo>
            <CardContent>
                <Breadcrumb bcType="dot" centerBc={true}>
                    <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
                    <li><a href="#0">Gallery</a></li>
                    <li className="active"><a href="#0">Web</a></li>
                    <li><a href="#0">Project</a></li>
                </Breadcrumb>
            </CardContent>
            <CardInfo>
            <   CardTitle>Breadcrumbs Basic</CardTitle>
            </CardInfo>
            <CardContent>
            <Breadcrumb>
                <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
                <li><a href="#0">Gallery</a></li>
                <li className="active"><a href="#0">Web</a></li>
                <li><a href="#0">Project</a></li>
            </Breadcrumb>
            </CardContent>
            <CardInfo>
            <CardTitle>Breadcrumbs Multi Step with Badge</CardTitle>
            </CardInfo>
            <CardContent>
            <Breadcrumb bcType="multiStep" hasBadge={true} centerBc={true}>
                <li><a href="#0">Home</a></li>
                <li><a href="#0">Gallery</a></li>
                <li className="active"><a href="#0">Web</a></li>
                <li><a href="#0">Project</a></li>
            </Breadcrumb>
            </CardContent>
            <CardInfo>
            <CardTitle>Breadcrumbs Triangle</CardTitle>
            </CardInfo>
            <CardContent>
            <Breadcrumb bcType="triangle">
                <li><a href="#0"><FontAwesomeIcon icon="house" style={{marginRight: '.6em'}}/>Home</a></li>
                <li><a href="#0">Gallery</a></li>
                <li className="active"><a href="#0">Web</a></li>
                <li><a href="#0">Project</a></li>
            </Breadcrumb>
            </CardContent>
        </Card>
        </React.Fragment>

    )
}

export default BreadcrumbsDemo;