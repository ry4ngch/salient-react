import React from 'react'

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Treeview, {TreeItem} from '../utils/Salient/UI/Treeview/Treeview';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const TreeviewDemo = () => {
  return (
<React.Fragment>
        <div>
          <h2>Treeview</h2>
          <p>
            Treeview displays hierarchical data as an expandable list.
            <code>TreeItem</code> branches toggle open/closed on click and can be nested to any depth, with plain <code>&lt;li&gt;</code> elements as leaves.
          </p>
          <h3>Import</h3>
          <CodeBlock code={`import Treeview, {TreeItem} from '../utils/Salient/UI/Treeview/Treeview';`} language="js" />
          <h3>Basic Usage</h3>
          <CodeBlock code={`import Treeview, {TreeItem} from '../utils/Salient/UI/Treeview/Treeview';

<Treeview>
    <TreeItem text="Item 1" subtext="(with levels)" expandOnLoad={true}>
        <li><span>1.1</span></li>
        <li><span>1.2</span></li>
    </TreeItem>
    <TreeItem text="Item 2">
        <li><span>2.1</span></li>
        <TreeItem text="2.2">
            <li><span>2.2.1</span></li>
            <li><span>2.2.2</span></li>
        </TreeItem>
    </TreeItem>
</Treeview>`} />
          <h3>Key Props</h3>
          <Table columns={['Prop', 'Description']}>
            <TableRow>
                <td data-field="Prop"><code>TreeItem</code></td>
                <td data-field="Description"><code>text</code> (string): node label; <code>subtext</code> (string, optional): muted annotation rendered after the label; <code>expandOnLoad</code> (boolean, default <code>false</code>): branch starts expanded; <code>className</code>: extra classes on the <code>&lt;li&gt;</code>.</td>
            </TableRow>
            <TableRow>
                <td data-field="Prop">—</td>
                <td data-field="Description">Nest <code>TreeItem</code> inside <code>TreeItem</code> for multiple levels; plain <code>&lt;li&gt;</code> children are rendered as leaves.</td>
            </TableRow>
            <TableRow>
                <td data-field="Prop"><code>Treeview</code></td>
                <td data-field="Description">accepts <code>className</code> and other section attributes.</td>
            </TableRow>
          </Table>
        </div>

        <Card className="card-border bg-dark mt-2">
          <CardInfo>
            <CardTitle>Treeview - Dark Background</CardTitle>
          </CardInfo>
          <CardContent>
            <Treeview>
              <TreeItem text='Item 1' subtext="(with levels)" expandOnLoad={true}>
                <li><span>1.1</span></li>
                <li><span>1.2</span></li>
              </TreeItem>
              <TreeItem text='Item 2' subtext="(multilevel)" expandOnLoad={true}>
                <li><span>2.1</span></li>
                <TreeItem text="2.2">
                  <li><span>2.2.1</span></li>
                  <li><span>2.2.2</span></li>
                  <TreeItem text="2.2.3" subtext="(we can continue adding levels)">
                    <li><span>2.2.3.1</span></li>
                    <li><span>2.2.3.2</span></li>
                  </TreeItem>
                </TreeItem>
              </TreeItem>
              <TreeItem text='Item 3' subtext="(No Level)"/>
            </Treeview>
          </CardContent>
        </Card>

        <Card className="card-border" style={{marginTop: '10px'}}>
            <CardInfo>
                <CardTitle>Treeview - White Background</CardTitle>
            </CardInfo>
            <CardContent>
                <Treeview>
                    <TreeItem text='Item 1' subtext="(with levels)" expandOnLoad={true}>
                      <li><span>1.1</span></li>
                      <li><span>1.2</span></li>
                    </TreeItem>
                    <TreeItem text='Item 2' subtext="(multilevel)" expandOnLoad={true}>
                    <li><span>2.1</span></li>
                    <TreeItem text="2.2">
                        <li><span>2.2.1</span></li>
                        <li><span>2.2.2</span></li>
                        <TreeItem text="2.2.3" subtext="(we can continue adding levels)">
                        <li><span>2.2.3.1</span></li>
                        <li><span>2.2.3.2</span></li>
                        </TreeItem>
                    </TreeItem>
                    </TreeItem>
                    <TreeItem text='Item 3' subtext="(No Level)"/>
                </Treeview>
            </CardContent>
        </Card>
    </React.Fragment>

  )
}

export default TreeviewDemo;