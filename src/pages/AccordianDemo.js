import React, {useState} from 'react'

// import the Dummy datas
import {accordianData} from '../containers/demo_data';

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Accordian, {AccordianItem} from '../utils/Salient/UI/Accordian/Accordian';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const AccordianDemo = () => {
    const [accordianOption, setAccordianOption] = useState("single");

    const updateAccordianOption = (event) => {
        setAccordianOption(event.target.value);
    };
    return (
        <React.Fragment>
            <h2>Accordian</h2>
            <p>
                Accordian renders collapsible content cards, useful for FAQs and compact sections.
                The <code>Accordian</code> container manages the open/close state of its <code>AccordianItem</code> children.
                Use <code>activeToggle</code> to allow one panel open at a time or several at once.
            </p>
            <h3>Import</h3>
            <CodeBlock code={`import Accordian, {AccordianItem} from '../utils/Salient/UI/Accordian/Accordian';`} language="js" />
            <h3>Basic Usage</h3>
            <CodeBlock code={`import Accordian, {AccordianItem} from '../utils/Salient/UI/Accordian/Accordian';

<Accordian activeToggle="single">
    <AccordianItem title="What is Salient?" content="Salient is a React UI library." />
    <AccordianItem title="How do I use it?" content="Import the components and compose them." />
</Accordian>`} />
            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>Accordian</code></td>
                    <td data-field="Description"><code>activeToggle</code> ('single' | 'multiple', default 'multiple'): 'single' closes the other items when one opens. Also accepts <code>className</code> and other div attributes.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>AccordianItem</code></td>
                    <td data-field="Description"><code>title</code> (string): heading text; <code>content</code> (string): panel body text.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop">—</td>
                    <td data-field="Description">Open/close state is managed by the parent <code>Accordian</code> — no toggle props needed on the items.</td>
                </TableRow>
            </Table>

            <Card className="card-border mt-2">
            <CardInfo justify={true}>
                <CardTitle>Accordian</CardTitle>
                <select value={accordianOption} onChange={updateAccordianOption}>
                  <option value="single">single</option>
                  <option value="multiple">multiple</option>
              </select>
            </CardInfo>
            <Accordian activeToggle={accordianOption}>
                {accordianData.map((item, index) => (
                    <AccordianItem key={index} title={item.title} content={item.content} />
                ))}
            </Accordian>
            </Card>
        </React.Fragment>

    )
}

export default AccordianDemo;