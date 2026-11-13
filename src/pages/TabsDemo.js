import React, {useState} from 'react'

// import Salient Library
import Card, {CardInfo, CardTitle} from '../utils/Salient/UI/Card/Card';
import Tab, {TabContent, TabItems} from '../utils/Salient/UI/Tab/Tab';
import Button from '../utils/Salient/UI/Buttons/Button';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const TabsDemo = () => {
    const [isSideTab, setTabType] = useState(false);
    const [tabStyle, setTabStyle] = useState("underline");
    return (
        <React.Fragment>
            <h2>Tabs</h2>
            <p>
                Tabs organise related content into switchable panels, showing one panel at a time.
                The <code>Tab</code> container wires a <code>TabItems</code> navigation bar to a <code>TabContent</code> panel area.
                Tabs can be laid out stacked (vertical tab list) or as side tabs.
            </p>
            <h3>Import</h3>
            <CodeBlock code={`import Tab, {TabContent, TabItems} from '../utils/Salient/UI/Tab/Tab';`} language="js" />
            <h3>Basic Usage</h3>
            <CodeBlock code={`import Tab, {TabContent, TabItems} from '../utils/Salient/UI/Tab/Tab';

<Tab activeTabIndex={0}>
    <TabItems tabStyleActive="underline">
        <li><a>Overview</a></li>
        <li><a>Details</a></li>
    </TabItems>
    <TabContent>
        <section className="item" data-title="Overview">
            <p>First tab content.</p>
        </section>
        <section className="item" data-title="Details">
            <p>Second tab content.</p>
        </section>
    </TabContent>
</Tab>`} />
            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>Tab</code></td>
                    <td data-field="Description"><code>sideTabs</code> (boolean, default <code>false</code>): render the tab list to the side instead of stacked above; <code>activeTabIndex</code> (number, default <code>0</code>): initially active tab.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>TabItems</code></td>
                    <td data-field="Description"><code>tabStyleActive</code> ('underline' | 'box', default 'box'): active tab indicator style. Children are <code>&lt;li&gt;&lt;a&gt;Label&lt;/a&gt;&lt;/li&gt;</code> entries.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>TabContent</code></td>
                    <td data-field="Description">children are <code>&lt;section className="item" data-title="..."&gt;</code> panels; the active panel is toggled automatically by click.</td>
                </TableRow>
            </Table>

            <Card className="card-border">
            <CardInfo justify={true}>
                <CardTitle>Tabs</CardTitle>
                <div>
                <select onChange={(e) => setTabType(e.target.value==='true')} defaultValue={false}>
                    <option value={true}>Side Tab</option>
                    <option value={false}>Vertical Tab</option>
                </select>
                <select onChange={(e) => setTabStyle(e.target.value)}>
                    <option value="underline">Underline</option>
                    <option value="box">Box</option>
                </select>
                </div>
            </CardInfo>

            <Tab sideTabs={isSideTab} activeTabIndex={1}>
            <TabItems tabStyleActive={tabStyle}>
                <li><a>Tab 1</a></li>
                <li><a>Tab 2</a></li>
                <li><a>Tab 3</a></li>
            </TabItems>
            <TabContent>  
                <section className="item" data-title="Tab 1">
                    <div className="item-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dicta neque deleniti dignissimos doloribus asperiores vel velit recusandae quasi? Fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus quibusdam ratione aliquid ut, dolorem illum velit ad sunt dolorum!</p>
                    </div>
                </section>
                <section className="item" data-title="Tab 2">
                    <div className="item-content">
                        Tab 2 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                        <Button type="button" buttonStyle="blueBlur" inverseColor={true} isBlock={true}>This is a Button</Button>
                    </div>
                </section>
                <section className="item" data-title="Tab 3">
                    <div className="item-content">
                        Tab 3 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </div>
                </section>
            </TabContent>
            </Tab>
            </Card>
        </React.Fragment>
    )
}

export default TabsDemo;