import React from "react";
import Grid, {GridRow, GridItem} from '../utils/Salient/UI/Grid/Grid';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const GridDemo = () => {
    return (
        <React.Fragment>
            <h2>Grid</h2>
            <p>
                The Grid component provides a simple layout system of rows and items. Use
                <code>Grid</code> as the container, <code>GridRow</code> for each horizontal row and
                <code>GridItem</code> for every cell inside a row.
            </p>
            <h3>Import</h3>
            <CodeBlock code={`import Grid, {GridRow, GridItem} from '../utils/Salient/UI/Grid/Grid';`} />
            <h3>Basic Usage</h3>
            <CodeBlock code={`<Grid className="my-grid">
    <GridRow>
        <GridItem>Row 1 - Item 1</GridItem>
        <GridItem>Row 1 - Item 2</GridItem>
        <GridItem>Row 1 - Item 3</GridItem>
    </GridRow>
</Grid>`} />
            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>Grid / GridRow / GridItem</code></td>
                    <td data-field="Description"><code>Grid</code>, <code>GridRow</code> and <code>GridItem</code> are the only exports — <code>Grid</code> is the default export, the other two are named.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>className</code></td>
                    <td data-field="Description">Each of the three accepts a <code>className</code> and spreads any extra props onto its wrapper <code>div</code> (e.g. <code>style</code>).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>grid / grid-row / item</code></td>
                    <td data-field="Description">Rendered classes are <code>grid</code>, <code>grid-row</code> and <code>item</code> respectively; target them in CSS to control columns and gaps.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>GridRow</code></td>
                    <td data-field="Description">Nest any number of <code>GridRow</code> children inside <code>Grid</code>; items auto-size per your grid CSS.</td>
                </TableRow>
            </Table>
            <Grid className='grid-demo'>
            <GridRow>
                <GridItem>Row 1 - Item 1</GridItem>
                <GridItem>Row 1 - Item 2</GridItem>
                <GridItem>Row 1 - Item 3</GridItem>
            </GridRow>
            <GridRow>
                <GridItem>Row 2 - Item 1</GridItem>
                <GridItem>Row 2 - Item 2</GridItem>
                <GridItem>Row 2 - Item 3</GridItem>
                <GridItem>Row 2 - Item 4</GridItem>
            </GridRow>
            <GridRow>
                <GridItem>Row 3 - Item 1</GridItem>
                <GridItem>Row 3 - Item 2</GridItem>
                <GridItem>Row 3 - Item 3</GridItem>
                <GridItem>Row 3 - Item 4</GridItem>
                <GridItem>Row 3 - Item 5</GridItem>
            </GridRow>
        </Grid>
        </React.Fragment>
    )
}

export default GridDemo;