import React, {useState, useEffect} from 'react'

// import the Dummy datas
import axios from 'axios';

// import Salient Library
import Card, {CardInfo, CardContent, CardTitle} from '../utils/Salient/UI/Card/Card';

import Timeline, {TimelineEvent} from '../utils/Salient/UI/Timeline/Timeline';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const TimelineDemo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [showCount, setShowCount] = useState(5);
  const [isStaggered, setIsStaggered] = useState(true);
  const [isHorz, setIsHorz] = useState(false);
  const [nodeIsCentered, setNodeIsCentered] = useState(true);

  useEffect(() => {
    axios.get('/assets/timeline_data.json')
      .then((response) => {
        setData(response.data.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setIsLoading(false);
      });
  }, []);

  
  const updateShowCount = (event) => {
    setShowCount(parseInt(event.target.value, 10));
  }

  const updateTimelineOrientation = () => {
    setIsHorz((prevState) => !prevState);
  }

  const updateTimelinePosition = () => {
    setIsStaggered((prevState) => !prevState);
  }

  const updateNodeLocation = () => {
    setNodeIsCentered(prevState => !prevState);
  }

  return (
        <React.Fragment>
          <h2>Timeline</h2>
          <p>
            Timeline renders a sequence of events along a vertical or horizontal line, with staggered layouts and built-in pagination controls.
            Feed it <code>TimelineEvent</code> children, optionally driven by async data (set <code>isLoading</code> while loading).
          </p>
          <h3>Import</h3>
          <CodeBlock code={`import Timeline, {TimelineEvent} from '../utils/Salient/UI/Timeline/Timeline';`} language="js" />
          <h3>Basic Usage</h3>
          <CodeBlock code={`import Timeline, {TimelineEvent} from '../utils/Salient/UI/Timeline/Timeline';

<Timeline
    showCount={4}
    isHorz={false}
    isStaggered={true}
    isLoading={false}
    centerEvents={true}
    showControls={true}
    isTimelineActive={true}
    activeEventID={2}>
    <TimelineEvent icon="icon-circle" text="Project kickoff" event={<span>Week 1</span>} />
    <TimelineEvent icon="icon-square" text="Design review" event={<span>Week 2</span>} />
</Timeline>`} />
          <h3>Key Props</h3>
          <Table columns={['Prop', 'Description']}>
            <TableRow>
                <td data-field="Prop"><code>Timeline</code></td>
                <td data-field="Description"><code>showCount</code> (number): events visible per page; <code>isHorz</code> (boolean, default <code>false</code>): horizontal orientation; <code>isStaggered</code> (boolean, default <code>false</code>): alternate events above/below the line; <code>centerEvents</code> (boolean, default <code>false</code>): center events on the line; <code>isLoading</code> (boolean): shows a loading state until data is ready; <code>showControls</code> (boolean, default <code>true</code>): prev/next pagination buttons.</td>
            </TableRow>
            <TableRow>
                <td data-field="Prop"><code>activeEventID</code></td>
                <td data-field="Description">with <code>isTimelineActive</code> highlights the event at that index as the active one.</td>
            </TableRow>
            <TableRow>
                <td data-field="Prop"><code>TimelineEvent</code></td>
                <td data-field="Description"><code>icon</code> (string, default 'icon-circle'): node icon class (e.g. 'icon-square'); <code>text</code> (string): caption under the event; <code>event</code>: thumbnail/body content of the event.</td>
            </TableRow>
          </Table>

          <Card className="card-border">
          <CardInfo justify={true}>
              <CardTitle>Timeline</CardTitle>
              <div style={{display: 'inline-block'}}>
                <select value={nodeIsCentered} onChange={updateNodeLocation}>
                  <option value="true">Node Center</option>
                  <option value="false">Node Side</option>
                </select>
                <select value={isHorz} onChange={updateTimelineOrientation}>
                  <option value="true">Horizontal</option>
                  <option value="false">Vertical</option>
                </select>
                <select value={isStaggered} onChange={updateTimelinePosition}>
                  <option value="true">Staggered</option>
                  <option value="false">Non-Staggered</option>
                </select>
                <select value={showCount} onChange={updateShowCount}>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="12">12</option>
                </select>
              </div>
          </CardInfo>
          <CardContent>
            <Timeline 
              showCount={showCount}
              isHorz={isHorz} 
              isLoading={isLoading}
              isStaggered={isStaggered}
              centerEvents={nodeIsCentered}
              showControls={true}
              isTimelineActive={true}>
                {data.map((item, index) => (
                    <TimelineEvent 
                    key={item.id} 
                    icon={index === 0 ? 'icon-square' : 'icon-circle'}
                    text={item.text}
                    event={item.thumbnail}/>
                ))}
            </Timeline>
          </CardContent>
          </Card>
        </React.Fragment>
  )
}

export default TimelineDemo;