import React from 'react'

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Badge from '../utils/Salient/UI/Badge/Badge';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const BadgesDemo = () => {
    return (
        <React.Fragment>
            <h2>Badge</h2>
            <p>
                The Badge component renders a small status label, styled by its <code>status</code>
                prop. It is useful for surfacing the state of a record — such as active, pending,
                or cancelled — at a glance, with an optional status indicator dot.
            </p>

            <h3>Import</h3>
            <CodeBlock language="js" code={`import Badge from '../utils/Salient/UI/Badge/Badge';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`import Badge from './Badge';

<Badge text="Active" status="active" hasIndicator={true} />
<Badge text="Disabled" status="disabled" />`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>text</code></td>
                    <td data-field="Description">the label rendered inside the badge.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>status</code></td>
                    <td data-field="Description">one of <code>active</code>, <code>loading</code>, <code>pending</code>, <code>awaiting</code>, <code>stall</code>, <code>idle</code>, <code>cancel</code>, <code>disabled</code>; applied as a class to drive the badge color.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>hasIndicator</code></td>
                    <td data-field="Description">default <code>false</code>; shows the status indicator dot.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>className</code></td>
                    <td data-field="Description">extra classes appended to the badge.</td>
                </TableRow>
            </Table>

            <Card className="card-border">
            <CardInfo>
                <CardTitle>Badge</CardTitle>
            </CardInfo>
            <CardContent>
                <Badge text="Active" status="active" hasIndicator={true}/>
                <Badge text="Disabled" status="disabled" hasIndicator={true}/>
                <Badge text="Awaiting" status="awaiting" hasIndicator={true}/>
                <Badge text="Pending" status="pending" hasIndicator={true}/>
                <Badge text="Loading" status="loading" hasIndicator={true}/>
                <Badge text="Cancel" status="cancel" hasIndicator={true}/>
                <Badge text="Stall" status="stall" hasIndicator={true}/>
                <Badge text="Idle" status="idle" hasIndicator={true}/>
            </CardContent>
        </Card>
        </React.Fragment>
    )
}

export default BadgesDemo;