# Salient React

Salient UI Component Library for React - A comprehensive collection of reusable React components with built-in animations, styles, and effects that eliminate the need for manual state management of UI behaviors.

## Why Salient?

The **Salient library** was developed to simplify development by eliminating the need to manually define custom states for controlling UI animations, styles, and effects. By leveraging Salient, developers can focus on building robust applications without worrying about intricate UI configurations.

- **Predefined animations and styles** that integrate seamlessly into React projects
- **Easy-to-use structure** for dynamic UI effects without the overhead of managing custom state logic
- **Faster development workflow**, reducing boilerplate code while maintaining flexibility for customization
- **Reusable components** that are flexible to accept other attributes available on common HTML elements

## Installation

```bash
npm install salient-react
# or
pnpm add salient-react
# or
yarn add salient-react
```

## Quick Start

```jsx
import { Button, Table, Card, Navbar, Timeline, Modal, Accordian, Tab, Breadcrumb, Dropdown, NumericField, TextField, List, Banner, Sidebar, Grid, Progress, Treeview, Pagination } from 'salient-react';
import 'salient-react/dist/salient-react.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Card title="Hello World" animation="tilt">
        This is a Salient UI Card component
      </Card>
    </div>
  );
}
```

## Available Components

### Layout & Navigation
- **Navbar** - Customizable responsive navigation bar with sidebar support on mobile
- **Sidebar** - Multi-level sidebar navigation with icons and notifications
- **Breadcrumb** - Multiple styles (dot, triangle, multiStep) with customizable separators
- **Grid** - Bootstrap-like grid system with GridRow and GridItem
- **Pagination** - Higher-order component (HOC) for paginated data with render prop support

### Data Display
- **Table** - Dynamic/static tables with sorting, pagination, row dragging, column toggling, row selection
- **Treeview** - Hierarchical tree view with expand/collapse, subtext, and multi-level support
- **Timeline** - Vertical/horizontal timelines with staggered layouts, pagination, and active states
- **Progress** - Linear/circular progress indicators with milestones and click handlers
- **List** - Container component with ListItem supporting hover animations
- **Card** - Cards with built-in hover animations (flip-x, flip-y, tilt, scale)
- **Banner** - Alert/blockquote style banners with themes and dismissible actions
- **Badge** - Status badges for notifications and labels

### Forms & Inputs
- **Button** - Toggle switches, checkboxes, normal buttons with widget/icon support
- **Dropdown** - Searchable dropdowns with prefix icons
- **NumericField** - Number input with min/max, step, suggestions, and customizable controls
- **TextField** - Text input with prefix/suffix icons, labels, and full HTML attribute support
- **FormAffix** - Icon prefix/suffix component for form fields
- **RangeSlider** - Slider with min/max, step, themes, and min/max display

### Overlays & Interactions
- **Modal** - Multi-section modals with navigation, blur close, and customizable themes
- **Accordion** - Single/multiple expand modes with smooth animations
- **Tab** - Horizontal/vertical tabs with box/underline styles, auto-converts to accordion on mobile
- **Toolbar** - Action toolbars for tables and lists
- **Upload** - File upload components
- **Avatar** - User avatar components
- **Icons** - FontAwesome integration

## Component Documentation

### Navbar
Responsive navigation bar that transforms into a sidebar on mobile.

```jsx
import { Navbar, NavMenu } from 'salient-react';

<Navbar 
  title="Salient" 
  theme="offwhite" 
  shift={true} 
  navSlideDown={false}
  brandLogo={<FontAwesomeIcon icon="circle-notch" size="2x" />}
>
  <NavMenu>
    <li data-tooltip="Home">
      <a href="">
        <FontAwesomeIcon className="navlink-icon" icon="home" />
        <span className="navlink-text">Home</span>
      </a>
    </li>
    <li data-tooltip="Dropdown" data-dropdown>
      <a>
        <FontAwesomeIcon className="navlink-icon" icon="caret-down" />
        <span className="navlink-text">Dropdown</span>
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
      </ul>
    </li>
  </NavMenu>
</Navbar>
```

**Props:**
- `theme` - `dark` | `offwhite` | `grayscale` | `blue` (default: default theme)
- `shift` - Boolean, shifts navbar on mobile (default: true)
- `navSlideDown` - Boolean, slides down instead of horizontal (default: false)
- `brandLogo` - ReactNode for logo next to title

### Timeline
Customizable timeline component with vertical/horizontal orientations.

```jsx
import { Timeline, TimelineEvent } from 'salient-react';

<Timeline
  showCount={3}
  isHorz={true}
  isLoading={isLoading}
  isStaggered={true}
  centerEvents={true}
  showControls={true}
  isTimelineActive={true}
  activeEventID={3}
>
  {data.map((item, index) => (
    <TimelineEvent
      key={item.id}
      icon={index === 0 ? 'icon-square' : 'icon-circle'}
      text={item.text}
      event={item.thumbnail}
    />
  ))}
</Timeline>
```

**Props:**
- `isHorz` - Boolean, horizontal layout (default: false)
- `isLoading` - Boolean, required, shows loading state
- `isStaggered` - Boolean, staggers items (default: false)
- `showCount` - Integer, items per page (default: 3)
- `centerEvents` - Boolean, centers events on horizontal (default: false)
- `showControls` - Boolean, shows pagination arrows (default: true)
- `isTimelineActive` - Boolean, highlights active event (default: false)
- `activeEventID` - Integer, index of active event

### Tabs
Horizontal/vertical tabs that convert to accordion on mobile (< 768px).

```jsx
import { Tab, TabItems, TabContent } from 'salient-react';

<Tab sideTabs={isSideTab} activeTabIndex={1}>
  <TabItems tabStyleActive="box">
    <li><a>Tab 1</a></li>
    <li><a>Tab 2</a></li>
    <li><a>Tab 3</a></li>
  </TabItems>
  <TabContent>
    <section className="item" data-title="Tab 1">
      <div className="item-content">Content 1</div>
    </section>
    <section className="item" data-title="Tab 2">
      <div className="item-content">Content 2</div>
    </section>
  </TabContent>
</Tab>
```

**Props:**
- `sideTabs` - Boolean, vertical tabs (default: false)
- `tabStyleActive` - `box` | `underline` (default: box)
- `activeTabIndex` - Integer, initial tab (default: 0)

### Accordion
Expand/collapse panels with single or multiple open modes.

```jsx
import { Accordian, AccordianItem } from 'salient-react';

<Accordian activeToggle="single">
  <AccordianItem title="Section 1" content="Content for Section 1" />
  <AccordianItem title="Section 2" content="Content for Section 2" />
  <AccordianItem title="Section 3" content="Content for Section 3" />
</Accordian>
```

**Props:**
- `activeToggle` - `single` | `multiple` (default: single)

### Card
Cards with built-in hover animations.

```jsx
import { Card, CardTitle, CardInfo, CardContent } from 'salient-react';

<Card className="card-flat" animation="tilt">
  <CardInfo>
    <CardTitle>Title</CardTitle>
  </CardInfo>
  <CardContent>
    Card content here
  </CardContent>
</Card>
```

**Props:**
- `animation` - `flip-x` | `flip-y` | `tilt` | `scale`

### Modal
Multi-section modals with navigation controls.

```jsx
import { Modal } from 'salient-react';

<Modal
  title="Header"
  showModal={showModal}
  onCloseModal={() => setShowModal(false)}
  className="light-theme"
  hasSections={true}
  onModalBlur={() => setShowModal(false)}
>
  <section className='center-content'>Section 1</section>
  <section className='fit-content'>Section 2</section>
</Modal>
```

**Props:**
- `showModal` - Boolean, required
- `onCloseModal` - Function, required
- `hasSections` - Boolean, enables pagination (default: false)
- `onModalBlur` - Function, close on outside click
- `title` - String, modal header

### Table
Feature-rich tables with sorting, pagination, drag-and-drop.

```jsx
import { Table, TableRow } from 'salient-react';

<Table
  draggable={true}
  columns={["Company", "Contact", "Country"]}
  showColToggleUI={true}
  showRowSelector={true}
  onRetrievedSelected={handleRetrievedRows}
  ref={tableRef}
  sortable={true}
>
  <TableRow>
    <td data-field="Company">Alfreds Futterkiste</td>
    <td data-field="Contact">Maria Anders</td>
    <td data-field="Country">Germany</td>
  </TableRow>
</Table>
```

**Props:**
- `draggable` - Boolean, row dragging (default: false)
- `showColToggleUI` - Boolean, column visibility toggles (default: false)
- `onRetrievedSelected` - Function, callback for selected rows
- `showRowSelector` - Boolean, row checkboxes (default: false)
- `data` - Array<Object>, for dynamic tables
- `columns` - Array, required for dynamic tables
- `sortable` - Boolean, column sorting (default: false)

### Pagination (HOC)
Higher-order component for pagination using currying pattern.

```jsx
import { withPagination } from 'salient-react';
import { Table } from 'salient-react';

const PaginatedTable = withPagination()(Table);

// Method 1: Direct usage
<PaginatedTable itemsPerPage={4} columns={["Company", "Contact", "Country"]}>
  <TableRow>...</TableRow>
</PaginatedTable>

// Method 2: Render prop pattern
<PaginatedTable
  items={filteredData}
  itemsPerPage={5}
  columns={["Type", "Name", "Description"]}
  showRowSelector={true}
>
  {(paginatedItems) =>
    paginatedItems.map((row, index) => (
      <TableRow key={index}>
        <td data-field="Type">{row.Type}</td>
        <td data-field="Name">{row.Name}</td>
      </TableRow>
    ))
  }
</PaginatedTable>
```

**Props:**
- `itemsPerPage` - Integer, required
- `items` - Array<Object>, dynamic data
- `showPageItemsControl` - Boolean, show page size selector (default: false)

### Buttons
Toggle switches, checkboxes, and styled buttons with icon support.

```jsx
import { Button } from 'salient-react';

// Switch
<Button type="switch" onChange={(e) => setCheck(!check)} checked={check} mode="dark" />

// Checkbox
<Button type="checkbox" disabled={true} mode="light" />

// Styled button with icon
<Button 
  type="button" 
  buttonStyle="blur" 
  isBlock={false} 
  expandFull={false} 
  inverseColor={true}
  icon="icon-search"
  onClick={handleClick}
>
  Search
</Button>
```

**Props:**
- `type` - `button` | `checkbox` | `switch` (required)
- `isBlock` - Boolean, block layout (default: false)
- `expandFull` - Boolean, full width (default: false)
- `buttonStyle` - `clear` | `blur` | `blueBlur`
- `inverseColor` - Boolean
- `buttonType` - `widget` for icon buttons
- `icon` - String, predefined icon name
- `mode` - `dark` | `forest` | `sunset` | `indigo` | `light` (for switch/checkbox)
- `onChange` | `onClick` - Function, required
- `checked` - Boolean, for switch/checkbox
- `disabled` - Boolean

### Dropdown
Searchable dropdown with prefix icons.

```jsx
import { Dropdown, DropdownItem, FormAffix } from 'salient-react';

<Dropdown 
  placeholder="Select..." 
  isSearchable={true} 
  inputPrefix={<FormAffix icon="icon-search" />}
>
  <DropdownItem value="1">Option 1</DropdownItem>
  <DropdownItem value="2">Option 2</DropdownItem>
  <DropdownItem value="3">Option 3</DropdownItem>
</Dropdown>
```

### NumericField
Number input with validation, suggestions, and customizable controls.

```jsx
import { NumericField } from 'salient-react';

<NumericField
  min={1}
  max={20}
  value={5}
  step={0.01}
  fieldName="Items Per Page"
  enableSuggestion={true}
  suggestionLimit={8}
  callbackFn={handleChange}
  fieldControlPlacement="right"
/>
```

### TextField
Text input with prefix/suffix icons and labels.

```jsx
import { TextField, FormAffix } from 'salient-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<TextField
  placeholder="Username"
  type="text"
  expandFull={true}
  inputPrefix={<FormAffix icon="icon-search" />}
  inputSuffix={<FontAwesomeIcon icon="eye" />}
  label="Username:"
/>
```

### Treeview
Hierarchical tree with expand/collapse and multi-level support.

```jsx
import { Treeview, TreeItem } from 'salient-react';

<Treeview>
  <TreeItem text='Item 1' subtext="(with levels)">
    <li><span>1.1</span></li>
    <li><span>1.2</span></li>
  </TreeItem>
  <TreeItem text='Item 2' expandOnLoad={true}>
    <li><span>2.1</span></li>
    <TreeItem text="2.2">
      <li><span>2.2.1</span></li>
    </TreeItem>
  </TreeItem>
</Treeview>
```

### Breadcrumb
Multiple styles with customizable separators.

```jsx
import { Breadcrumb } from 'salient-react';

<Breadcrumb bcType="dot" centerBc={true} hasBadge={true} separator="|">
  <li><a href="#0"><FontAwesomeIcon icon="house" />Home</a></li>
  <li><a href="#0">Gallery</a></li>
  <li className="active"><a href="#0">Web</a></li>
</Breadcrumb>
```

### Sidebar
Multi-level sidebar navigation.

```jsx
import { Sidebar, SideBarItem } from 'salient-react';

<Sidebar>
  <SideBarItem title="Menu Item 1"/>
  <SideBarItem title="Menu Item 2" iconPrefix="icon-file">
    <li><a>Sub Item 1</a></li>
    <li><a>Sub Item 2</a></li>
  </SideBarItem>
  <SideBarItem title="Menu Item 3" iconPrefix="icon-heart" notification={4}>
    <li><a>Sub Item 1</a></li>
  </SideBarItem>
</Sidebar>
```

### Grid
Bootstrap-like grid system.

```jsx
import { Grid, GridRow, GridItem } from 'salient-react';

<Grid>
  <GridRow>
    <GridItem>Row 1 - Item 1</GridItem>
    <GridItem>Row 1 - Item 2</GridItem>
    <GridItem>Row 1 - Item 3</GridItem>
  </GridRow>
  <GridRow>
    <GridItem>Row 2 - Item 1</GridItem>
    <GridItem>Row 2 - Item 2</GridItem>
  </GridRow>
</Grid>
```

### Progress
Linear/circular progress with milestones.

```jsx
import { Progress } from 'salient-react';

<Progress
  progressItems={progressItems}
  currentProgressIndex={currentIndex}
  type="linear"
  onProgressPointClick={handleClick}
  showProgressStep={true}
  showCompleteStepCheckmark={true}
/>
```

### List
Container with hoverable items.

```jsx
import { List, ListItem } from 'salient-react';

<List theme="dark">
  <ListItem hasHoverHighlight={true}>Item 1</ListItem>
  <ListItem hasHoverHighlight={true}>Item 2</ListItem>
  <ListItem hasHoverHighlight={true}>Item 3</ListItem>
</List>
```

### Banner
Alert/blockquote style notifications.

```jsx
import { Banner, BannerContent, BannerActions, BannerAction } from 'salient-react';

<Banner theme="active" blockquoteStyle={true} allowBannerDismiss={true} onBannerDismiss={handleDismiss}>
  <BannerContent>Important notification content</BannerContent>
  <BannerActions>
    <BannerAction onClick={handleAction}>Action</BannerAction>
    <BannerAction>Second Action</BannerAction>
  </BannerActions>
</Banner>
```

## Demo Application

Live demo: [Salient React App Demo](https://salient-react-demo.vercel.app/)

The demo showcases all components integrated with react-router-dom.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev-server

# Build for production
pnpm run build

# Build library
pnpm run build:lib

# Run tests
pnpm test

# Lint
pnpm lint
```

## Tech Stack

- **React 19** - UI framework
- **Webpack 5** - Module bundler
- **Babel** - JSX/ESNext compilation
- **Sass/Dart Sass** - Styling
- **Bootstrap 5** - CSS framework (optional, not used in Salient components)
- **FontAwesome** - Icons
- **react-router-dom** - Routing (demo)

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES2015+ support.

## License

MIT