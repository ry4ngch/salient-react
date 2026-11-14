import React, {useState} from 'react'

// import Salient Library
import Button from '../utils/Salient/UI/Buttons/Button';
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Modal from '../utils/Salient/UI/Modal/Modal';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const ModalDemo = () => {
  const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <h2>Modal</h2>
            <p>
                The Modal component renders a dialog overlay through a React portal into the
                <code>#overlays</code> element, so it always floats above the rest of the page.
                It supports a title header, arbitrary body content, and — with <code>hasSections</code> —
                multiple slide-like sections navigated with arrows and indicator dots.
            </p>

            <h3>Import</h3>
            <CodeBlock code={`import Modal from '../utils/Salient/UI/Modal/Modal';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`import React, {useState} from 'react';
import Modal from '../utils/Salient/UI/Modal/Modal';

const Example = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Modal
            title="Confirm Action"
            showModal={showModal}
            onCloseModal={() => setShowModal(false)}
            onModalBlur={() => setShowModal(false)}>
            <p>Modal body content goes here.</p>
        </Modal>
    );
};`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>showModal</code></td>
                    <td data-field="Description">boolean that controls visibility; the dialog is only rendered when true.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>onCloseModal</code></td>
                    <td data-field="Description">callback fired by the close (×) button; typically toggles <code>showModal</code> off.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>onModalBlur</code></td>
                    <td data-field="Description">fired when the modal content loses focus (e.g. clicking outside); handy for closing on outside click.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>title</code></td>
                    <td data-field="Description">a string or node rendered in the modal header.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>hasSections</code></td>
                    <td data-field="Description">default <code>false</code>; when true, each child <code>&lt;section&gt;</code> becomes a slide with prev/next arrows and clickable indicator dots in the footer.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>className</code></td>
                    <td data-field="Description">extra class applied to the overlay wrapper (e.g. <code>light-theme</code>).</td>
                </TableRow>
            </Table>

            <Card className='card-flat mt-2'>
            <CardInfo>
                <CardTitle>Modal (Click to View)</CardTitle>
            </CardInfo>
            <CardContent>
                <Button type="button" buttonStyle="blueBlur" isBlock={true} expandFull={true} inverseColor={true} onClick={(e) => {e.preventDefault(); setShowModal(true)}}>Show Modal</Button>
            </CardContent>
            </Card>
            

            <Modal title="Header" showModal={showModal} onCloseModal={(e) => {e.preventDefault(); setShowModal(false)}} className="light-theme" hasSections={true} onModalBlur={() => setShowModal(false)}>
                <section className='center-content'>
                        Section 1
                </section>
                <section className='fit-content'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste corporis sunt culpa illum assumenda ex iusto totam mollitia facere. Libero deserunt natus ea ad sint ex voluptates repellendus architecto tenetur!
                </section>
                <section className='fit-content'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem facere fuga rerum. Voluptate molestiae assumenda dicta velit perferendis exercitationem ratione eligendi amet, modi soluta praesentium fugit, quidem alias voluptatum illo iure. Beatae nobis ipsam dolor quam, ex, nesciunt ea pariatur in quas quo debitis, corrupti illum provident laborum cum expedita!
                </section>
            </Modal>
        </React.Fragment>
    )
}

export default ModalDemo;