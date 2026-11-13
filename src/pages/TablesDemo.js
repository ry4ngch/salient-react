import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the Dummy datas
import {docs} from '../containers/demo_data';

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Table, {TableRow} from '../utils/Salient/UI/Table/TableV2';
import withPagination from '../utils/Salient/UI/Pagination/withPagination';

import CodeBlock from '../components/Docs/CodeBlock';

// Import Components Build with Salient
import SampleDynamicPaginatedTable from '../components/SampleTables/SampleDynamicPaginatedTable';
import SampleStaticPaginatedTable from '../components/SampleTables/SampleStaticPaginatedTable';
import SampleStaticTable from '../components/SampleTables/SampleStaticTable';

const TablesDemo = () => {
  const [tableFilterValue, setTableFilterValue] = useState();
  const ExternalPaginatedTable = withPagination()(Table);

  
  // generic helper function for any filtering
  function filterData(data, keyword) {
      if (!Array.isArray(data)) return [];

      if (!keyword) return data; // Return all rows if keyword is empty

      const lowerKeyword = keyword.toLowerCase();

      return data.filter(item => {
          if (typeof item !== 'object' || item === null) return false;

          return Object.values(item).some(value => {
              if (value == null) return false; // Skip null or undefined values
              return value.toString().toLowerCase().includes(lowerKeyword);
          });
      });
  }

  // filtered table
  const filteredTable = filterData(docs, tableFilterValue);

  return (
<React.Fragment>
      <h2>Table</h2>
      <p>Table renders tabular data with built-in sorting, column toggling, row selection, drag-and-drop row reordering, and optional pagination. Rows are declared as <code> &lt;TableRow&gt;</code> children whose cells use <code>data-field</code> attributes matching the column names.</p>

      <h3>Import</h3>
      <CodeBlock code={`import Table, {TableRow} from '../utils/Salient/UI/Table/TableV2';

 // classic table (column toggle UI is not available in the classic version)
 import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

 // wrap with withPagination for a paginated table
 import withPagination from '../utils/Salient/UI/Pagination/withPagination`} />

      <h3>Basic Usage</h3>
      <CodeBlock code={`<Table
  columns={['Type', 'Name', 'Description']}
  sortable={true}
  bordered={true}
  tableInnerBordered={true}>
  <TableRow>
    <td data-field="Type">File</td>
    <td data-field="Name">App 1</td>
    <td data-field="Description">A sample row</td>
  </TableRow>
  <TableRow>
    <td data-field="Type">Image</td>
    <td data-field="Name">App 2</td>
    <td data-field="Description">Another row</td>
  </TableRow>
</Table>`} />
      <CodeBlock code={`const PaginatedTable = withPagination()(Table);

<PaginatedTable
  columns={['Type', 'Name', 'Description']}
  itemsPerPage={5}
  draggable={true}
  showColToggleUI={true}
  showRowSelector={true}
  onRetrievedSelected={(selectedRows) => console.log(selectedRows)}>
  {(paginatedItems) =>
    (Array.isArray(paginatedItems) ? paginatedItems : []).map((row, index) => (
      <TableRow key={index}>
        <td data-field="Type">{row.Type}</td>
        <td data-field="Name">{row.Name}</td>
        <td data-field="Description">{row.Description}</td>
      </TableRow>
    ))
  }
</PaginatedTable>`} />

      <h3>Key Props</h3>
      <Table columns={['Prop', 'Description']}>
        <TableRow>
          <td data-field="Prop"><code>columns</code></td>
          <td data-field="Description">Array of column header names; cells link to headers via <code>data-field</code> on each <code>lt;td&gt;</code>.</td>
        </TableRow>
        <TableRow>
          <td data-field="Prop"><code>sortable</code></td>
          <td data-field="Description">Shows a sort icon on each header; clicking toggles asc/desc order for that column.</td>
        </TableRow>
        <TableRow>
          <td data-field="Prop"><code>bordered</code> / <code>tableInnerBordered</code> / <code>striped</code></td>
          <td data-field="Description">Visual styles: outer border, inner cell borders, and striped rows.</td>
        </TableRow>
        <TableRow>
          <td data-field="Prop"><code>draggable</code></td>
          <td data-field="Description">Enables drag-and-drop row reordering via a drag handle (TableV2 only).</td>
        </TableRow>
        <TableRow>
          <td data-field="Prop"><code>showColToggleUI</code></td>
          <td data-field="Description">Adds a filter button with checkboxes to hide/show columns.</td>
        </TableRow>
        <TableRow>
          <td data-field="Prop"><code>showRowSelector</code></td>
          <td data-field="Description">Adds row checkboxes; when rows are checked, a button (titled via <code>retrieveRowsBtnTitle</code>) appears and passes the selected rows to <code>onRetrievedSelected</code>.</td>
        </TableRow>
        <TableRow>
          <td data-field="Prop"><code>itemsPerPage</code> / <code>currentPage</code></td>
          <td data-field="Description">Set automatically by <code>withPagination</code>; when both are present the table paginates its rows.</td>
        </TableRow>
      </Table>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Dynamic Table with Pagination</CardTitle>
          <p>using pagination in custom component</p>
        </CardInfo>
        <CardContent>
          <input type="text" placeholder="search filter..." style={{display:'block', width: '100%', padding: '.4em', marginBottom: '.2em', boxSizing: "border-box"}} onChange={(e) => setTableFilterValue(e.target.value)}/>
          <SampleDynamicPaginatedTable items={filteredTable} itemsPerPage={3} showPageItemsControl={true} sortable={true} bordered={true}/>
        </CardContent>

        <CardInfo>
          <CardTitle>Dynamic Table with Pagination (With Inner Border)</CardTitle>
          <p>using pagination externally</p>
        </CardInfo>
        <CardContent>
          <input type="text" placeholder="search filter..." style={{display:'block', width: '100%', padding: '.4em', marginBottom: '.2em', boxSizing: "border-box"}} onChange={(e) => setTableFilterValue(e.target.value)}/>
          <ExternalPaginatedTable items={filteredTable} itemsPerPage={5} draggable={true} showColToggleUI={true} columns={["Type", "Name", "Description", "Tags", "Last Viewed", "Expiration"]} showRowSelector={true} bordered={true} tableInnerBordered={true}>
          {(paginatedItems) =>
            (Array.isArray(paginatedItems) ? paginatedItems : []).map((row, index) => (
              <TableRow key={index}>
                <td data-field="Type"><FontAwesomeIcon icon={"file-"+row.Type}></FontAwesomeIcon></td>
                <td data-field="Name">{row.Name} app</td>
                <td data-field="Description">{row.Description}</td>
                <td data-field="Tags">{row.Tags}</td>
                <td data-field="Last Viewed">{row.LastViewed}</td>
                <td data-field="Expiration">{row.Expiration}</td>
              </TableRow>
            ))
          }
          </ExternalPaginatedTable>
        </CardContent>
        <CardInfo>
          <CardTitle>Static Table with Pagination</CardTitle>
        </CardInfo>
        <CardContent>
          <SampleStaticPaginatedTable itemsPerPage={4}/>
        </CardContent>
        <CardInfo>
          <CardTitle>Static Table No Pagination (With Striped)</CardTitle>
        </CardInfo>
        <CardContent>
          <SampleStaticTable />
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default TablesDemo;