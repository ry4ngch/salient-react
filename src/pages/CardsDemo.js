import React from 'react'

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const CardsDemo = () => {
  return (
        <React.Fragment>
        <h2>Card</h2>
        <p>Card is a flexible content container. Compose it with CardInfo (header), CardTitle and CardContent (body) to build structured panels, and apply an animation prop for hover effects.</p>

        <h3>Import</h3>
        <CodeBlock code={`import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';`} />

        <h3>Basic Usage</h3>
        <CodeBlock code={`<Card className="card-border">
  <CardInfo>
    <CardTitle>Card Title</CardTitle>
  </CardInfo>
  <CardContent>Card body content goes here</CardContent>
</Card>`} />
        <CodeBlock code={`<Card animation="tilt">
  <CardInfo>
    <CardTitle>Tilt Card</CardTitle>
  </CardInfo>
  <CardContent>This card tilts toward the cursor</CardContent>
</Card>`} />

        <h3>Key Props</h3>
        <Table columns={['Prop', 'Description']}>
          <TableRow>
            <td data-field="Prop"><code>animation</code></td>
            <td data-field="Description">hover animation: <code>'tilt'</code> (3D tilt with a 10x10 tracker grid), <code>'flip-x'</code> (flip around X axis), <code>'flip-y'</code> (flip around Y axis), <code>'scale'</code> (grows on hover).</td>
          </TableRow>
          <TableRow>
            <td data-field="Prop"><code>className</code></td>
            <td data-field="Description">display styles: <code>'card-border'</code> (border instead of shadow) and <code>'card-flat'</code> (single box-shadow).</td>
          </TableRow>
          <TableRow>
            <td data-field="Prop"><code>CardInfo</code></td>
            <td data-field="Description">header section; set <code>justify={true}</code> to space its children apart.</td>
          </TableRow>
          <TableRow>
            <td data-field="Prop"><code>CardContent</code></td>
            <td data-field="Description">body section; can be repeated for multiple paragraphs.</td>
          </TableRow>
          <TableRow>
            <td data-field="Prop"><code>CardTitle</code></td>
            <td data-field="Description">title text block usable inside CardInfo or CardContent.</td>
          </TableRow>
        </Table>

        <Card className="card-border mt-2">
          <CardContent>
            <Card>
              <CardInfo>
                <CardTitle>Card (Without Animation)</CardTitle>
              </CardInfo>
              <CardContent>Normal card without animation, for more card display option, apply card-flat or card-border class to Card Component</CardContent>
              <CardContent>className='card-border' remove box-shadow and uses border, while className='card-flat' applies a single box-shadow</CardContent>
            </Card>
        
            <Card animation='scale'>
              <CardInfo>
                <CardTitle>Card (With Scale Animation)</CardTitle>
              </CardInfo>
              <CardContent>This card will scale and grow large</CardContent>
            </Card>

            <Card animation='flip-x'>
              <CardInfo>
                <CardTitle>Card (With Flip Animation)</CardTitle>
              </CardInfo>
              <CardContent>This will flip 180 around X-Axis</CardContent>
            </Card>

            <Card animation='flip-y'>
              <CardInfo>
                <CardTitle>Card (With Flip Animation)</CardTitle>
              </CardInfo>
              <CardContent>This will flip 180 around Y-Axis</CardContent>
            </Card>

            <Card animation="tilt">
                <CardInfo>
                  <CardTitle>Card (With Tilt Animation)</CardTitle>
                </CardInfo>
                <CardContent>Note: For Tilt Effect to work properly, card-grid class must be applied on inner div</CardContent>
            </Card>
          </CardContent>

        </Card>
        </React.Fragment>
  )
}

export default CardsDemo;