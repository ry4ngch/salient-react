import React, {useState} from 'react'

// import Salient Library
import { Button } from '@ry4ngch/salient-react';
import { Card, CardInfo, CardContent, CardTitle } from '@ry4ngch/salient-react';
import { Drawer } from '@ry4ngch/salient-react';
import CodeBlock from '../components/Docs/CodeBlock';
import { ChoiceField } from '@ry4ngch/salient-react';
import { Table, TableRow } from '@ry4ngch/salient-react';

const DrawerDemo = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [position, setPosition] = useState('left');

    return (
        <React.Fragment>
            <h2>Drawer</h2>
            <p>
                The Drawer component renders a slide-in panel from the left or right edge of the screen,
                typically used for navigation menus, side panels, or contextual actions.
                It includes an optional backdrop and close button.
            </p>

            <h3>Import</h3>
            <CodeBlock code={`import { Drawer } from '@ry4ngch/salient-react';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`import React, {useState} from 'react';
import { Drawer } from '@ry4ngch/salient-react';
import { Button } from '@ry4ngch/salient-react';

const Example = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <>
            <Button onClick={() => setShowDrawer(true)}>Open Drawer</Button>
            <Drawer
                title="Drawer Title"
                showDrawer={showDrawer}
                position="left"
                onCloseDrawer={() => setShowDrawer(false)}
            >
                <section>Drawer content goes here</section>
            </Drawer>
        </>
    );
};`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>showDrawer</code></td>
                    <td data-field="Description">boolean that controls visibility; the drawer is only rendered when true.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>onCloseDrawer</code></td>
                    <td data-field="Description">callback fired by the close (×) button; typically toggles <code>showDrawer</code> off.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>onDrawerBlur</code></td>
                    <td data-field="Description">fired when clicking outside the drawer content (on backdrop); handy for closing on outside click.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>title</code></td>
                    <td data-field="Description">a string or node rendered in the drawer header.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>position</code></td>
                    <td data-field="Description"><code>'left'</code> (default) or <code>'right'</code> — slide-in direction.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>hasBackdrop</code></td>
                    <td data-field="Description">default <code>true</code>; shows a backdrop overlay when the drawer is open.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>className</code></td>
                    <td data-field="Description">extra class applied to the drawer wrapper.</td>
                </TableRow>
            </Table>

            <Card className="card-border">
            <CardInfo justify={true}>
                <CardTitle>Interactive Drawer Demo</CardTitle>
                <ChoiceField
                    label="Drawer Slide In Position"
                    options={[
                        { value: 'left', label: 'Left', description: 'Slide In From the Left' },
                        { value: 'right', label: 'Right', description: 'Slide In From the Right' },
                    ]}
                    value={position}
                    onChange={setPosition}
                    className="mb-2"
                />
            </CardInfo>
            <CardContent>
                <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true} inverseColor={true} onClick={(e) => {e.preventDefault(); setShowDrawer(true)}}>Show Drawer</Button>
            </CardContent>
            </Card>

            <Drawer title="Header" showDrawer={showDrawer} position={position} onCloseDrawer={(e) => {e.preventDefault(); setShowDrawer(false)}} onDrawerBlur={() => setShowDrawer(false)}>
                <section>
                        Section 1
                </section>
                <section>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste corporis sunt culpa illum assumenda ex iusto totam mollitia facere. Libero deserunt natus ea ad sint ex voluptates repellendus architecto tenetur!
                </section>
                <section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facere fuga rerum. Voluptate molestiae assumenda dicta velit perferendis exercitationem ratione eligendi amet, modi soluta praesentium fugit, quidem alias voluptatum illo iure. Beatae nobis ipsam dolor quam, ex, nesciunt ea pariatur in quas quo debitis, corrupti illum provident laborum cum expedita!
                </section>
            </Drawer>
        </React.Fragment>
    )
}

export default DrawerDemo;