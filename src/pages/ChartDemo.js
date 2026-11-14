import React, {useState} from "react";
import Chart, {BarChart} from "../utils/Salient/UI/Chart/BarChart";
import Card, {CardContent, CardInfo, CardTitle} from '../utils/Salient/UI/Card/Card';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const dummy_data = [
    {label: 'Jan', value: 30},
    {label: 'Feb', value: 50},
    {label: 'Mar', value: 10},
    {label: 'April', value: 40},
    {label: 'May', value: 90},
    {label: 'Jun', value: 60},
    {label: 'July', value: 120},
    {label: 'Aug', value: 84},
    {label: 'Sept', value: 65},
    {label: 'Oct', value: 32},
    {label: 'Nov', value: 27},
    {label: 'Dec', value: 57},
]

const ChartDemo = () => {
    const [labelSide, setLabelSide] = useState(false);
    const [isHorz, setIsHorz] = useState(true);
    const [theme, setTheme] = useState(null);

    return (
        <React.Fragment>
            <h2>Chart</h2>
            <p>Chart renders a horizontal or vertical bar chart. Each bar is a BarChart child providing a label and value; the Chart parent handles orientation, label placement, value normalization, and themes.</p>

            <h3>Import</h3>
            <CodeBlock code={`import Chart, {BarChart} from '../utils/Salient/UI/Chart/BarChart';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`const data = [
  {label: 'Jan', value: 30},
  {label: 'Feb', value: 50},
  {label: 'Mar', value: 10},
];

<Chart
  isHorz={true}
  labelSide={true}
  title="Number of Orders per Month"
  theme="forest">
  {data.map((item, index) => (
    <BarChart key={index} label={item.label} value={item.value} />
  ))}
</Chart>`} />
            <CodeBlock code={`// show percentage fills, computed from the max bar value
<Chart
  isHorz={false}
  calculatePctFromMax={true}
  showCalculatedValues={true}
  title="Inventory">
  <BarChart label="Item A" value={70} />
  <BarChart label="Item B" value={40} labelUnit="pcs" />
</Chart>`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>Chart: isHorz</code></td>
                    <td data-field="Description">horizontal (default) or vertical bars.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>Chart: labelSide</code></td>
                    <td data-field="Description">for horizontal charts, places the label + value beside the bar (true) or on the opposite side of the fill (false).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>Chart: calculatePctFromMax / calculatePctFromTotal</code></td>
                    <td data-field="Description">normalize bar values as a percentage of the max value or of the total of all values. Bars over 100 are always normalized.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>Chart: showCalculatedValues</code></td>
                    <td data-field="Description">display the calculated percentage instead of the raw value.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>Chart: theme</code></td>
                    <td data-field="Description">fill color theme: <code>'forest'</code>, <code>'sunset'</code>, or <code>'indigo'</code>; <strong>title</strong> renders an h4 chart title.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>BarChart: label / value</code></td>
                    <td data-field="Description">the bar's text label and numeric value; <strong>labelUnit</strong> appends a unit string (e.g. <code>'pcs'</code>) to the displayed value.</td>
                </TableRow>
            </Table>

            <Card className="card-border mt-2">
                <CardInfo justify={true}>
                    <CardTitle>Chart</CardTitle>
                <div style={{display: 'inline-block'}}>
                    <select value={labelSide} onChange={() => setLabelSide((prevState) => !prevState)}>
                        <option value="true">Side Label</option>
                        <option value="false">Inline Label</option>
                    </select>
                    <select value={isHorz} onChange={() => setIsHorz((prevState) => !prevState)}>
                        <option value="true">Horizontal</option>
                        <option value="false">Vertical</option>
                    </select>
                    <select value={theme} onChange={(event) => setTheme(event.target.value)}>
                        <option value="">Default</option>
                        <option value="forest">Forest</option>
                        <option value="sunset">Sunset</option>
                        <option value="indigo">Indigo</option>
                    </select>
                </div>
            </CardInfo>
            <CardContent>
                <Chart 
                    isHorz={isHorz} 
                    labelSide={labelSide} 
                    calculatePctFromTotal={false} 
                    calculatePctFromMax={false} 
                    showCalculatedValues={false} 
                    title="Number of Orders per Month" 
                    theme={theme}>
                    {dummy_data.map((item, index) => (
                        <BarChart key={index} label={item.label} value={item.value}/>           
                    ))}
                </Chart>
            </CardContent>
        </Card>
        </React.Fragment>
    )
}

export default ChartDemo;