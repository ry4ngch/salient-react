import React from 'react'

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import List, {ListItem} from '../utils/Salient/UI/List/List';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const ListDemo = () => {
  return (
    <React.Fragment>
        <h2>List</h2>
        <p>
          List renders a vertical group of items, like a simple menu or table of contents.
          <code>ListItem</code> marks each row and can highlight on hover for interactive lists.
        </p>
        <h3>Import</h3>
        <CodeBlock code={`import List, {ListItem} from '../utils/Salient/UI/List/List';`} language="js" />
        <h3>Basic Usage</h3>
        <CodeBlock code={`import List, {ListItem} from '../utils/Salient/UI/List/List';

<List>
    <ListItem hasHoverHighlight={true}>List Item 1</ListItem>
    <ListItem hasHoverHighlight={true}>List Item 2</ListItem>
    <ListItem>List Item 3</ListItem>
</List>`} />
        <h3>Key Props</h3>
        <Table columns={['Prop', 'Description']}>
          <TableRow>
              <td data-field="Prop"><code>List</code></td>
              <td data-field="Description"><code>theme</code> (string, optional): adds a <code>list--&lt;theme&gt;</code> modifier class for themed styling; <code>className</code> and other <code>ul</code> attributes pass through.</td>
          </TableRow>
          <TableRow>
              <td data-field="Prop"><code>ListItem</code></td>
              <td data-field="Description"><code>hasHoverHighlight</code> (boolean, default <code>false</code>): adds the <code>list-highlight</code> hover class; <code>className</code> and other <code>li</code> attributes pass through.</td>
          </TableRow>
        </Table>

        <Card className="card-border">
        <CardInfo>
          <CardTitle>List</CardTitle>
        </CardInfo>
        <List>
          <ListItem hasHoverHighlight={true}>List Item 1</ListItem>
          <ListItem hasHoverHighlight={true}>List Item 2</ListItem>
          <ListItem hasHoverHighlight={true}>List Item 3</ListItem>
        </List>
        </Card>
    </React.Fragment>
  )
}

export default ListDemo;