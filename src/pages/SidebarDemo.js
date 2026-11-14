import React from "react";
import Sidebar, {SideBarItem} from "../utils/Salient/UI/Sidebar/Sidebar";
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const SideBarDemo = () => {
    return (
        <React.Fragment>
            <h2>Sidebar</h2>
            <p>
                The Sidebar component renders an aside navigation menu built from
                <code>SideBarItem</code> entries. Items with children expand into animated
                sub-menus on click, and nested <code>SideBarItem</code>s automatically get
                deeper indentation and a submenu chevron.
            </p>

            <h3>Import</h3>
            <CodeBlock language="js" code={`import Sidebar, {SideBarItem} from '../utils/Salient/UI/Sidebar/Sidebar';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`import Sidebar, {SideBarItem} from './Sidebar';

<Sidebar>
    <SideBarItem title="Dashboard" />
    <SideBarItem title="Projects" iconPrefix="icon icon-file" notification={2}>
        <li><a>Active</a></li>
        <li><a>Archived</a></li>
    </SideBarItem>
</Sidebar>`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>Sidebar: children</code></td>
                    <td data-field="Description"><code>SideBarItem</code> elements rendered inside the menu list.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>Sidebar: className</code></td>
                    <td data-field="Description">extra class applied to the aside wrapper.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>SideBarItem: title</code></td>
                    <td data-field="Description">the item label.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>SideBarItem: iconPrefix / iconSuffix</code></td>
                    <td data-field="Description">icon classes rendered before/after the label; <code>iconSuffix</code> defaults to <code>'icon icon-right'</code> and only shows when the item has children.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>SideBarItem: notification</code></td>
                    <td data-field="Description">number rendered as a badge next to the label.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>SideBarItem: level</code></td>
                    <td data-field="Description">nesting depth (default <code>0</code>); indentation is computed from it, and nested items receive <code>level + 1</code> automatically.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>SideBarItem: children</code></td>
                    <td data-field="Description">plain <code>&lt;li&gt;</code> links or nested <code>SideBarItem</code>s to build expandable sub-menus.</td>
                </TableRow>
            </Table>

            <Sidebar className="mt-2">
            <SideBarItem title="Menu Item 1"/>
            <SideBarItem title="Menu Item 2" iconPrefix="icon icon-file">
                <li><a>Sub Item 1</a></li>
                <li><a>Sub Item 2</a></li>
            </SideBarItem>
            <SideBarItem title="Menu Item 3" iconPrefix="icon icon-heart" notification={2}>
                <li><a>Sub Item 1</a></li>
                <li><a>Sub Item 2</a></li>
            </SideBarItem>
            <SideBarItem title="Menu Item 4">
                <li><a>Sub Item 1</a></li>
                <li><a>Sub Item 2</a></li>
            </SideBarItem>
            <SideBarItem title="Menu Item 5">
                <li><a>Sub Item 1</a></li>
                <li><a>Sub Item 2</a></li>
            </SideBarItem>
            <SideBarItem title="Menu Item 6">
                <li><a>Sub Item 1</a></li>
                <li><a>Sub Item 2</a></li>
            </SideBarItem>
            <SideBarItem title="Menu Item 7">
                <li><a>Sub Item 1</a></li>
                <li><a>Sub Item 2</a></li>
                <SideBarItem title="Menu Item 7.1">
                    <li><a>Sub Item 1-1</a></li>
                    <li><a>Sub Item 2-1</a></li>
                </SideBarItem>
                <SideBarItem title="Menu Item 7.2" notification={4}>
                    <li><a>Sub Item 1-2</a></li>
                    <li><a>Sub Item 2-2</a></li>
                    <SideBarItem title="Menu Item 7.2.1" notification={3}>
                        <li><a>Sub Item 1-2-1</a></li>
                        <li><a>Sub Item 2-2-1</a></li>
                        <SideBarItem title="Menu Item 7.2.1.1">
                            <li><a>Sub Item 1-2-1-1</a></li>
                            <li><a>Sub Item 2-2-1-1</a></li>
                        </SideBarItem>
                    </SideBarItem>
                </SideBarItem>
            </SideBarItem>
        </Sidebar>
        </React.Fragment>
    )
}

export default SideBarDemo;

