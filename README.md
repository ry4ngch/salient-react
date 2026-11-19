# Salient React

Salient UI Component Library for React - A comprehensive collection of reusable React components with built-in animations, styles, and effects that eliminate the need for manual state management of UI behaviors.

> **Experimental:** This library is highly experimental and its API, component names, props, styling tokens, and file structure may change between releases without notice. Pin a version and review the changelog before upgrading.

## Why Salient?

The **Salient library** was developed to simplify development by eliminating the need to manually define custom states for controlling UI animations, styles, and effects. By leveraging Salient, developers can focus on building robust applications without worrying about intricate UI configurations.

- **Predefined animations and styles** that integrate seamlessly into React projects
- **Easy-to-use structure** for dynamic UI effects without the overhead of managing custom state logic
- **Faster development workflow**, reducing boilerplate code while maintaining flexibility for customization
- **Reusable components** that are flexible to accept other attributes available on common HTML elements

## Installation

```bash
npm install @ry4ngch/salient-react
# or
pnpm add @ry4ngch/salient-react
# or
yarn add @ry4ngch/salient-react
```

## Quick Start

```jsx
import { Button, Table, Card, Navbar, Timeline, Modal, Accordian, Tab, Breadcrumb, Dropdown, NumericField, TextField, List, Banner, Sidebar, Grid, Progress, Treeview, Pagination } from '@ry4ngch/salient-react';
import '@ry4ngch/salient-react/dist/salient-react.css';

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

## Theming

All component colors come from a single set of CSS custom properties (`--sl-*`) defined in `src/utils/Salient/styles/_salient-theme.scss`.

### Light / dark mode

Apply `data-theme` to any wrapper (or `<html>`). Every Salient component inside it re-colors automatically:

```jsx
<div data-theme="dark">
  <Card>...</Card>
  <Table>...</Table>
</div>
```

Supported values: `light` (default) and `dark`. The theme also sets `color-scheme`, so native controls and scrollbars match.

### Override the brand color

Override tokens on any ancestor — no rebuild, no SCSS edits:

```jsx
<div style={{ '--sl-primary': '#ff6b00' }} className="my-app">
  <Button variant="primary">Click Me</Button>
</div>
```

Or in CSS:

```css
.my-app {
  --sl-primary: #ff6b00;
  --sl-primary-rgb: 255 107 0; /* used for alpha, e.g. rgb(var(--sl-primary-rgb) / 0.2) */
  --sl-surface: #fffaf5;
  --sl-radius: 8px;
}
```

### Common tokens

| Token | Purpose |
| --- | --- |
| `--sl-primary`, `--sl-on-primary`, `--sl-primary-rgb` | Brand color, its text color, and RGB triplet for transparency |
| `--sl-success`, `--sl-danger`, `--sl-warning`, `--sl-info`, `--sl-neutral`, `--sl-muted` | Status colors (each has `-soft` background variants) |
| `--sl-surface`, `--sl-surface-alt`, `--sl-surface-sunken`, `--sl-surface-card` | Backgrounds, from raised to inset |
| `--sl-on-surface`, `--sl-text`, `--sl-text-muted`, `--sl-text-subtle` | Text hierarchy |
| `--sl-border`, `--sl-border-soft`, `--sl-border-strong` | Borders |
| `--sl-overlay`, `--sl-shadow-color`, `--sl-radius` | Overlays, shadows, shape |

Component-specific tokens are also available (`--sl-nav-*`, `--sl-badge-*`, `--sl-banner-*`, `--sl-table-*`, `--sl-field-*`, `--sl-slider-*`, `--sl-tabs-*`, `--sl-card-*`, etc.) and default to the semantic tokens above.

### Component scheme props/classes

Existing component schemes are unchanged: `Navbar` `theme` (`dark`, `offwhite`, `grayscale`, `blue`, `navy`), `.banner--active|cancel|disabled|purple|teal|warn|emergency`, `.badge.active|disabled|stall|awaiting|pending|loading|cancel|idle`, `.progress-theme-dark|forest|sunset`, `.chart-fill--sunset|forest|indigo`, `.slider-group.gray-slider|dark-slider`, and `.sl-checkbox.*-cb` / `.switch.slider-*`. They can be combined with `data-theme`.

> Component scheme classes only re-skin their own component; `data-theme` is the only switch that re-colors every component at once.

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
- **Avatar** - Circular/square avatars with optional border and catch light
- **Chart** - Horizontal/vertical bar charts with themed fills and optional value normalization

### Forms & Inputs
- **Button** - Toggle switches, checkboxes, normal buttons with widget/icon support
- **Dropdown** - Searchable dropdowns with prefix icons
- **NumericField** - Number input with min/max, step, suggestions, and customizable controls
- **TextField** - Text input with prefix/suffix icons, labels, and full HTML attribute support
- **FormAffix** - Icon prefix/suffix component for form fields
- **RangeSlider** - Slider with min/max, step, themes, and min/max display
- **ChoiceField** - Card-style checkbox/radio group with labels and descriptions
- **DateField** - Styled native date/time/datetime-local/month/week inputs
- **ColorField** - Color picker with swatch preview and hex value
- **FileField** - Styled file input showing selected file names

### Overlays & Interactions
- **Modal** - Multi-section modals with navigation, blur close, and customizable themes
- **Drawer** - Slide-in panel from the left or right edge with optional backdrop
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
- `theme` - `dark` | `offwhite` | `grayscale` | `blue` | `navy` (default: default theme)
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

### Drawer
Slide-in panel anchored to the left or right edge.

```jsx
import { Drawer, Button } from '@ry4ngch/salient-react';

<Drawer
  title="Filters"
  showDrawer={showDrawer}
  position="left"
  hasBackdrop={true}
  onCloseDrawer={() => setShowDrawer(false)}
>
  <section>Drawer content</section>
</Drawer>
```

**Props:**
- `showDrawer` - Boolean, controls visibility (default: false)
- `onCloseDrawer` - Function, called by the close button
- `title` - String, optional header
- `position` - `left` | `right` (default: left)
- `hasBackdrop` - Boolean, show the dimmed backdrop (default: true)

### Avatar
Avatar image or custom icon with optional border and catch light.

```jsx
import { Avatar } from '@ry4ngch/salient-react';

<Avatar src="/avatar.png" alt="User" size="64px" shape="circle" hasBorder={true} />
<Avatar size="48px" hasCatchLight={true}>AB</Avatar>
```

**Props:**
- `shape` - `circle` | `square` (default: circle)
- `size` - CSS size value for the avatar
- `src`, `alt` - Image source and alternative text
- `hasBorder`, `borderGap`, `borderRotation` - Border styling
- `hasCatchLight` - Boolean, adds the glossy highlight

### Chart
Bar chart wrapper with themed fills.

```jsx
import { Chart, BarChart } from '@ry4ngch/salient-react';

<Chart title="Traffic" theme="indigo" isHorz={true} showCalculatedValues={true}>
  <BarChart label="Direct" value={40} />
  <BarChart label="Search" value={35} />
  <BarChart label="Social" value={25} />
</Chart>
```

**Props:**
- `isHorz` - Boolean, horizontal bars (default: true)
- `labelSide` - Boolean, place labels beside the bar (default: true)
- `calculatePctFromMax` / `calculatePctFromTotal` - Normalize bar widths
- `showCalculatedValues` - Boolean, show percentages instead of raw values
- `theme` - `sunset` | `forest` | `indigo`

### Toolbar
Action bar for tables and lists.

```jsx
import { Toolbar, ToolbarButton } from '@ry4ngch/salient-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<Toolbar layoutHorz={false} isBlock={true}>
  <ToolbarButton tooltip="Edit" onClick={handleEdit}>
    <FontAwesomeIcon icon="pen" />
  </ToolbarButton>
  <ToolbarButton tooltip="Delete" onClick={handleDelete}>
    <FontAwesomeIcon icon="trash" />
  </ToolbarButton>
</Toolbar>
```

**Props:**
- `layoutHorz` - Boolean, vertical layout (default: false)
- `isBlock` - Boolean, wrap in a block container (default: true)
- `ToolbarButton` - `tooltip`, `tooltipOrientation` (`top` | `bottom` | `left` | `right`)

### Upload
Drag-and-drop file upload with validation.

```jsx
import { Upload } from '@ry4ngch/salient-react';

<Upload
  supportedExtensions={['.pdf', '.png', '.jpg']}
  maxFileSize={10}
  fileDraggable={true}
  onFilesChange={(files) => console.log(files)}
  validationErrorCallback={(title, message) => alert(`${title}: ${message}`)}
/>
```

**Props:**
- `supportedExtensions` - Array of allowed extensions
- `maxFileSize` - Number, size limit in MB (default: 25)
- `onFilesChange` - Function, receives the current file list
- `validationErrorCallback` - Function `(title, message)` for rejected files
- `fileDraggable` - Boolean, enable drag-to-reorder (default: true)
- `uploadIconClass` - Optional icon class for the drop zone

### ChoiceField
Card-style checkbox/radio group.

```jsx
import { ChoiceField } from '@ry4ngch/salient-react';

<ChoiceField
  label="Interests"
  multiple={true}
  options={[
    { value: 'web', label: 'Web Development', description: 'Frontend & backend' },
    { value: 'design', label: 'UI/UX Design', description: 'Interfaces and experiences' },
  ]}
  helper="Select all that apply"
/>
```

**Props:**
- `options` - Array of `{ value, label, description }`
- `multiple` - Boolean, checkboxes instead of radios (default: false)
- `value` / `defaultValue` - Controlled or uncontrolled selection
- `onChange` - Function, receives the new value
- `label`, `tag`, `helper`, `error`, `disabled`

### DateField
Styled native date and time inputs.

```jsx
import { DateField } from '@ry4ngch/salient-react';

<DateField type="date" label="Birth Date" min="1900-01-01" max="2026-12-31" />
<DateField type="time" label="Appointment Time" min="09:00" max="18:00" />
```

**Props:**
- `type` - `date` | `time` | `datetime-local` | `month` | `week`
- `label`, `tag`, `helper`, `error`, `expandFull`
- Passes through native input attributes (`min`, `max`, `value`, `onChange`, ...)

### ColorField
Color picker with swatch and hex preview.

```jsx
import { ColorField } from '@ry4ngch/salient-react';

<ColorField label="Brand Color" defaultValue="#2563eb" onChange={handleChange} />
```

**Props:**
- `value` / `defaultValue` - Controlled or uncontrolled color
- `label`, `tag`, `helper`, `error`
- `onChange` - Function, receives the change event

### FileField
Styled file input that lists the selected files.

```jsx
import { FileField } from '@ry4ngch/salient-react';

<FileField label="Upload Document" accept=".pdf,.doc,.docx" helper="PDF or Word only" />
```

**Props:**
- `accept` - Native file type filter
- `multiple` - Boolean, allow multiple files (default: false)
- `onChange` - Function, receives the files
- `label`, `tag`, `helper`, `error`

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