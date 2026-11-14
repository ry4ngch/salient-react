import React, {useState} from "react";
import Progress from "../utils/Salient/UI/Progress/Progress";
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';
import Button from '../utils/Salient/UI/Buttons/Button';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const ProgressDemo = () => {
    const [progressType, setProgressType] = useState('linear');
    const [currentProgressIndex, setCurrentProgressIndex] = useState(2);
    const [showCheckmark, setShowCheckmark] = useState(false);
    const [showProgressStep, setShowProgressStep] = useState(false);
    const [showProgressPoint, setShowProgressPoint] = useState(false);
    const [progressThemeColor, setProgressThemeColor] = useState('');

    const progressItems = ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Milestone 5', 'Milestone 6'];

    const changeProgressType = (event) => {
        setProgressType(event.target.value);
    }

    const updateProgress = (value) => {
        setCurrentProgressIndex((prevState) => {
            if((prevState + value) >= 0 && (prevState + value) < progressItems.length){
                return prevState + value;
            } else {
                return prevState;
            }
        });
    }

    const onProgressPointClick = (index) => {
        setCurrentProgressIndex(index);
    }

    return (
        <React.Fragment>
            <h2>Progress</h2>
            <p>
                The Progress component renders a step-based progress indicator, either as a linear
                bar with labelled milestones or as a circular ring with a percentage readout. It is
                useful for multi-step flows (checkout, onboarding, uploads) where the user should
                see how far along they are.
            </p>
            <h3>Import</h3>
            <CodeBlock code={`import Progress from '../utils/Salient/UI/Progress/Progress';`} />
            <h3>Basic Usage</h3>
            <CodeBlock code={`<Progress
    progressItems={['Cart', 'Checkout', 'Payment', 'Confirm']}
    currentProgressIndex={1}
/>`} />
            <CodeBlock code={`<Progress
    type="circular"
    progressItems={['Uploading', 'Processing', 'Done']}
    currentProgressIndex={1}
    circularProgressSubheading="Complete"
/>`} />
            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>progressItems</code></td>
                    <td data-field="Description">Array of step labels rendered along the bar (or inside the circular variant).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>currentProgressIndex</code></td>
                    <td data-field="Description">Zero-based index of the active step; controls how much of the bar/ring is filled.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>type</code></td>
                    <td data-field="Description"><code>'linear'</code> (default) or <code>'circular'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>showProgressPoint</code></td>
                    <td data-field="Description">Renders clickable bullets on each step; pair with <code>onProgressPointClick</code> to jump between steps.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>showProgressStep</code> / <code>showCompleteStepCheckmark</code></td>
                    <td data-field="Description">Apply step styling and a checkmark on completed steps.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>theme</code></td>
                    <td data-field="Description">Color theme applied as a class, e.g. <code>'dark'</code>, <code>'sunset'</code>, <code>'forest'</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>circularProgressSubheading</code></td>
                    <td data-field="Description">Subheading text shown inside the circular variant (default <code>'Complete'</code>).</td>
                </TableRow>
            </Table>
            <Card className='card-border mt-2'>
                <CardInfo justify={true}>
                    <CardTitle>Interactive Progress Bar</CardTitle>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <div>
                            <label>Progress Chart Type: </label>
                            <select value={progressType} onChange={changeProgressType}>
                                <option value="linear">Linear</option>
                                <option value="circular">Circular</option>
                            </select>
                        </div>
                        <div>
                            <label>Progress Theme Color: </label>
                            <select value={progressThemeColor} onChange={(event) => setProgressThemeColor(event.target.value)}>
                                <option value="">Default</option>
                                <option value="dark">Dark</option>
                                <option value="sunset">Sunset</option>
                                <option value="forest">Forest</option>
                            </select>
                        </div>
                        <div>
                            <label>Show Progress Point: </label>
                            <select value={showProgressPoint} onChange={() => setShowProgressPoint((prevState) => !prevState)}>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <div>
                            <label>Show Progress Step: </label>
                            <select value={showProgressStep} onChange={() => setShowProgressStep((prevState) => !prevState)} disabled={!showProgressPoint}>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                        <div>
                            <label>Show Checkmark: </label>
                            <select value={showCheckmark} onChange={() => setShowCheckmark((prevState) => !prevState)} disabled={!showProgressStep || !showProgressPoint}>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </div>
                </CardInfo>
                <CardContent>
                    <Progress 
                        progressItems={progressItems}
                        currentProgressIndex={currentProgressIndex}
                        type={progressType}
                        showProgressPoint={showProgressPoint}
                        onProgressPointClick={onProgressPointClick}
                        showProgressStep={showProgressStep}
                        showCompleteStepCheckmark={showCheckmark}
                        theme={progressThemeColor}
                        />
                    <div className="progress-btn-group">
                        <Button type="button" buttonStyle="clear" inverseColor={true} onClick={() => updateProgress(-1)}>Previous</Button>
                        <Button type="button" buttonStyle="clear" inverseColor={true} onClick={() => updateProgress(+1)}>Next</Button>
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default ProgressDemo;