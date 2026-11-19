import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Salient Library
import { Card, CardInfo, CardContent, CardTitle } from "@ry4ngch/salient-react";
import { Dropdown, DropdownItem } from "@ry4ngch/salient-react";
import { FormAffix } from "@ry4ngch/salient-react";
import { NumericField } from "@ry4ngch/salient-react";
import { RangeSlider } from "@ry4ngch/salient-react";
import { TextField } from "@ry4ngch/salient-react";
import { ChoiceField } from "@ry4ngch/salient-react";
import { DateField } from "@ry4ngch/salient-react";
import { ColorField } from "@ry4ngch/salient-react";
import { FileField } from "@ry4ngch/salient-react";
import { Grid, GridRow, GridItem } from "@ry4ngch/salient-react";
import { Table, TableRow } from "@ry4ngch/salient-react";
import CodeBlock from "../components/Docs/CodeBlock";
const FormUIsDemo = () => {
  const testNumericFieldCallback = () => {};

  const testRef = useRef(null);

  const updateSliderValue = () => {
    //console.log(event.target.value);
  };

  const [interests, setInterests] = useState(["web-dev"]);
  const [plan, setPlan] = useState("pro");
  const [brandColor, setBrandColor] = useState("#2563eb");

  return (
    <React.Fragment>
      <h2>Form Controls</h2>
      <p>
        Salient provides a set of form controls: TextField for text input,
        Dropdown for select-like pickers, NumericField for bounded numeric input
        with +/- controls, RangeSlider, FormAffix for icons affixed to an input,
        plus ChoiceField, DateField, ColorField and FileField replicating the
        full HTML input types showcase.
      </p>

      <h3>Import</h3>
      <CodeBlock
        code={`import { Dropdown, DropdownItem } from '@ry4ngch/salient-react';
import { FormAffix } from '@ry4ngch/salient-react';
import { NumericField } from '@ry4ngch/salient-react';
import { TextField } from '@ry4ngch/salient-react';
import { RangeSlider } from '@ry4ngch/salient-react';
import { ChoiceField } from '@ry4ngch/salient-react';
import { DateField } from '@ry4ngch/salient-react';
import { ColorField } from '@ry4ngch/salient-react';
import { FileField } from '@ry4ngch/salient-react';`}
      />

      <h3>Basic Usage</h3>
      <CodeBlock
        code={`<TextField
  type="text"
  placeholder="Username"
  label="Username:"
  expandFull={true}
  inputPrefix={<FormAffix icon="icon-search" />} />

<TextField
  type="email"
  label="Email Address"
  tag="type=email"
  helper="We'll never share your email"
  placeholder="john@example.com" />

<TextField label="Password" error="Minimum 8 characters required" minlength={8} />

<Dropdown placeholder="Dropdown" isSearchable={true} onChange={(value) => console.log(value)}>
  <DropdownItem value="Test1">Test1</DropdownItem>
  <DropdownItem value="Test2">Test2</DropdownItem>
</Dropdown>`}
      />
      <CodeBlock
        code={`<NumericField
  min={1} max={20} step={0.01} value={5}
  fieldName="Items Per Page"
  enableSuggestion={true} suggestionLimit={5}
  callbackFn={(val) => console.log(val)}
  fieldControlPlacement="side" />

<RangeSlider defaultValue={40} label="Default Theme Slider" displayMinMaxText={{min: true, max: true}} />
<RangeSlider defaultValue={30} label="Gray Theme Slider" theme="gray" />`}
      />

      <h3>Key Props</h3>
      <Table columns={["Prop", "Description"]}>
        <TableRow>
          <td data-field="Prop">
            <code>TextField</code>
          </td>
          <td data-field="Description">
            For <code>type</code> = text | email | tel | url | password |
            search. Keeps <code>label</code>, <code>inputPrefix</code>/
            <code>inputSuffix</code> (usually a FormAffix),{" "}
            <code>expandFull</code> and children; adds <code>tag</code> (code
            chip in the label), <code>helper</code> text and <code>error</code>{" "}
            (switches border + helper to error style). Other props forward to
            the native <code>&lt;input&gt;</code>.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>Dropdown</code>
          </td>
          <td data-field="Description">
            <code>placeholder</code>, <code>isSearchable</code> (typing
            filters/scrolls to options), <code>inputPrefix</code>,{" "}
            <code>expandFull</code>, <code>onChange</code> (receives the
            selected DropdownItem's <code>value</code>). Options are{" "}
            <code>&lt;DropdownItem value="..."&gt;</code> children.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>FormAffix</code>
          </td>
          <td data-field="Description">
            <code>icon</code> takes an icon class name, e.g.{" "}
            <code>'icon-search'</code>.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>NumericField</code>
          </td>
          <td data-field="Description">
            <code>min</code>/<code>max</code>/<code>step</code>/
            <code>value</code>, <code>fieldName</code> label,{" "}
            <code>enableSuggestion</code> + <code>suggestionLimit</code> for a
            value suggestion dropdown, <code>callbackFn</code> called on every
            value change, and <code>fieldControlPlacement</code> ={" "}
            <code>'side'</code> | <code>'top'</code> | <code>'bottom'</code>.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>RangeSlider</code>
          </td>
          <td data-field="Description">
            <code>label</code>, <code>min</code>/<code>max</code>/
            <code>step</code>, <code>defaultValue</code>, <code>onChange</code>,{" "}
            <code>theme</code> = <code>'gray'</code> | <code>'dark'</code>, and{" "}
            <code>displayMinMaxText</code> ={" "}
            <code>
              {"{"}min: true, max: true{"}"}
            </code>
            .
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>TextField</code>
          </td>
          <td data-field="Description">
            For <code>type</code> = text | email | tel | url | password |
            search. Adds <code>tag</code> (code chip in the label),{" "}
            <code>helper</code> text, <code>error</code> (switches border +
            helper to error style) and <code>expandFull</code>; other props
            forward to the native input.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>ChoiceField</code>
          </td>
          <td data-field="Description">
            Card-style checkbox/radio group. <code>options</code> ={" "}
            <code>{"[{value, label, description}]"}</code>,{" "}
            <code>multiple</code> switches checkbox vs radio, controlled via{" "}
            <code>value</code> (array when <code>multiple</code>) +{" "}
            <code>onChange(value, option)</code>, or uncontrolled via{" "}
            <code>defaultValue</code>.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>DateField</code>
          </td>
          <td data-field="Description">
            Native pickers for <code>type</code> = date | time | datetime-local
            | month | week. Same label/tag/helper/error props; <code>min</code>/
            <code>max</code> forward to the input.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>ColorField</code>
          </td>
          <td data-field="Description">
            <code>defaultValue</code> or controlled <code>value</code> +{" "}
            <code>onChange</code>, shows the hex value next to the native color
            swatch.
          </td>
        </TableRow>
        <TableRow>
          <td data-field="Prop">
            <code>FileField</code>
          </td>
          <td data-field="Description">
            <code>accept</code>, <code>multiple</code>;{" "}
            <code>onChange(files, event)</code> receives a single File or an
            array when <code>multiple</code>. Selected file names are displayed
            next to the button.
          </td>
        </TableRow>
      </Table>

      <Card className="card-border mt-2">
        <CardInfo>
          <CardTitle>Form Controls - Dropdown</CardTitle>
        </CardInfo>
        <CardContent>
          <CardTitle>Searchable Dropdown with Form Affix</CardTitle>
          <Dropdown
            placeholder="Dropdown"
            isSearchable={true}
            inputPrefix={<FormAffix icon="icon-search" />}
            expandFull={true}
          >
            <DropdownItem value="Test1">Test1</DropdownItem>
            <DropdownItem value="Test2">Test2</DropdownItem>
            <DropdownItem value="Test3">Test3</DropdownItem>
          </Dropdown>
        </CardContent>

        <CardContent>
          <CardTitle>Searchable Dropdown</CardTitle>
          <Dropdown
            placeholder="Dropdown"
            isSearchable={true}
            expandFull={true}
          >
            <DropdownItem value="Test1">Test1</DropdownItem>
            <DropdownItem value="Test2">Test2</DropdownItem>
            <DropdownItem value="Test3">Test3</DropdownItem>
          </Dropdown>
        </CardContent>

        <CardContent>
          <CardTitle>Normal Dropdowns with Form Affix</CardTitle>
          <Dropdown
            placeholder="Dropdown"
            inputPrefix={<FormAffix icon="icon-search" />}
            expandFull={true}
          >
            <DropdownItem value="Test1">Test1</DropdownItem>
            <DropdownItem value="Test2">Test2</DropdownItem>
            <DropdownItem value="Test3">Test3</DropdownItem>
          </Dropdown>
        </CardContent>

        <CardContent>
          <CardTitle>Normal Dropdowns</CardTitle>
          <Dropdown placeholder="Dropdown" expandFull={true}>
            <DropdownItem value="Test1">Test1</DropdownItem>
            <DropdownItem value="Test2">Test2</DropdownItem>
            <DropdownItem value="Test3">Test3</DropdownItem>
          </Dropdown>
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Form Controls - Numeric Field</CardTitle>
        </CardInfo>
        <CardContent>
          <Grid>
            <GridRow>
              <GridItem>
                <CardTitle>Side Placement</CardTitle>
                <NumericField
                  min={1}
                  max={20}
                  value={5}
                  step={0.01}
                  fieldName="Items Per Page"
                  enableSuggestion={true}
                  suggestionLimit={5}
                  callbackFn={testNumericFieldCallback}
                  ref={testRef}
                  fieldControlPlacement="side"
                />
              </GridItem>
              <GridItem>
                <CardTitle>Top Placement</CardTitle>
                <NumericField
                  min={1}
                  max={20}
                  value={5}
                  step={0.01}
                  fieldName="Items Per Page"
                  enableSuggestion={true}
                  suggestionLimit={5}
                  callbackFn={testNumericFieldCallback}
                  ref={testRef}
                  fieldControlPlacement="top"
                />
              </GridItem>
              <GridItem>
                <CardTitle>Bottom Placement</CardTitle>
                <NumericField
                  min={1}
                  max={20}
                  value={5}
                  step={0.01}
                  fieldName="Items Per Page"
                  enableSuggestion={true}
                  suggestionLimit={5}
                  callbackFn={testNumericFieldCallback}
                  ref={testRef}
                  fieldControlPlacement="bottom"
                />
              </GridItem>
            </GridRow>
          </Grid>
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Form Controls - Text Field</CardTitle>
        </CardInfo>
        <CardContent>
          <TextField
            placeholder="Username"
            type="text"
            expandFull={true}
            inputPrefix={<FormAffix icon="icon-search" />}
            inputSuffix={
              <FontAwesomeIcon icon="eye" style={{ padding: "0 5px" }} />
            }
            label="Username:"
          />
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Form Controls - Range Slider</CardTitle>
        </CardInfo>
        <CardContent>
          <RangeSlider
            defaultValue={40}
            label="Default Theme Slider"
            displayMinMaxText={{ min: true, max: true }}
            onChange={updateSliderValue}
          />
          <RangeSlider
            defaultValue={30}
            label="Gray Theme Slider"
            theme="gray"
          />
          <RangeSlider
            defaultValue={60}
            label="Dark Theme Slider"
            theme="dark"
          />
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>
            Form Controls - TextField (Text, Email, Password, Search)
          </CardTitle>
        </CardInfo>
        <CardContent>
          <Grid>
            <GridRow>
              <GridItem>
                <TextField
                  type="text"
                  label="Username"
                  tag="type=text"
                  helper="Enter your preferred username"
                  placeholder="johndoe"
                  required
                />
              </GridItem>
              <GridItem>
                <TextField
                  type="password"
                  label="Password"
                  tag="type=password"
                  error="Minimum 8 characters required"
                  placeholder="••••••••"
                  minlength={8}
                  required
                />
              </GridItem>
              <GridItem>
                <TextField
                  type="email"
                  label="Email Address"
                  tag="type=email"
                  helper="We'll never share your email"
                  placeholder="john@example.com"
                  required
                  expandFull={true}
                />
              </GridItem>
              <GridItem>
                <TextField
                  type="search"
                  label="Search"
                  tag="type=search"
                  helper="Search across all content"
                  placeholder="Search documentation..."
                  expandFull={true}
                />
              </GridItem>
            </GridRow>
          </Grid>
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Form Controls - ChoiceField (Checkbox / Radio)</CardTitle>
        </CardInfo>
        <CardContent>
          <Grid>
            <GridRow>
              <GridItem>
                <ChoiceField
                  label="Interests"
                  tag="type=checkbox"
                  multiple
                  options={[
                    {
                      value: "web-dev",
                      label: "Web Development",
                      description: "Frontend & backend development",
                    },
                    {
                      value: "design",
                      label: "UI/UX Design",
                      description: "User interface and experience design",
                    },
                    {
                      value: "mobile",
                      label: "Mobile Development",
                      description: "iOS and Android applications",
                    },
                  ]}
                  value={interests}
                  onChange={setInterests}
                  helper="Select all that apply"
                />
              </GridItem>
              <GridItem>
                <ChoiceField
                  label="Subscription Plan"
                  tag="type=radio"
                  options={[
                    {
                      value: "basic",
                      label: "Basic Plan",
                      description: "$9/month - Essential features",
                    },
                    {
                      value: "pro",
                      label: "Pro Plan",
                      description: "$29/month - Advanced features",
                    },
                    {
                      value: "enterprise",
                      label: "Enterprise Plan",
                      description: "$99/month - All features included",
                    },
                  ]}
                  value={plan}
                  onChange={setPlan}
                  helper="Choose one plan"
                />
              </GridItem>
            </GridRow>
          </Grid>
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Form Controls - DateField</CardTitle>
        </CardInfo>
        <CardContent>
          <Grid>
            <GridRow>
              <GridItem>
                <DateField
                  type="date"
                  label="Birth Date"
                  tag="type=date"
                  helper="Select your date of birth"
                  min="1900-01-01"
                  max="2025-12-31"
                />
              </GridItem>
              <GridItem>
                <DateField
                  type="time"
                  label="Appointment Time"
                  tag="type=time"
                  helper="Business hours: 9 AM - 6 PM"
                  min="09:00"
                  max="18:00"
                />
              </GridItem>
              <GridItem>
                <DateField
                  type="datetime-local"
                  label="Meeting Schedule"
                  tag="type=datetime-local"
                  helper="Select date and time"
                />
              </GridItem>
              <GridItem>
                <DateField
                  type="month"
                  label="Card Expiry"
                  tag="type=month"
                  helper="Credit card expiration"
                  min="2025-01"
                />
              </GridItem>
              <GridItem>
                <DateField
                  type="week"
                  label="Project Week"
                  tag="type=week"
                  helper="Select work week"
                />
              </GridItem>
            </GridRow>
          </Grid>
        </CardContent>
      </Card>

      <Card className="card-border">
        <CardInfo>
          <CardTitle>Form Controls - ColorField & FileField</CardTitle>
        </CardInfo>
        <CardContent>
          <ColorField
            label="Brand Color"
            tag="type=color"
            helper="Choose your primary color"
            value={brandColor}
            onChange={(e) => setBrandColor(e.target.value)}
          />
        </CardContent>
        <CardContent>
          <Grid>
            <GridRow>
              <GridItem>
                <FileField
                  label="Upload Document"
                  tag="type=file"
                  accept=".pdf,.doc,.docx"
                  helper="PDF or Word documents only"
                />
              </GridItem>
              <GridItem>
                <FileField
                  label="Upload Images"
                  tag="multiple"
                  accept="image/*"
                  multiple
                  helper="Select multiple image files"
                />
              </GridItem>
            </GridRow>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default FormUIsDemo;
