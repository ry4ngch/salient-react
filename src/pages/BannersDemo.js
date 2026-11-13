import React from "react";
import Banner, {BannerContent, BannerActions, BannerAction} from '../utils/Salient/UI/Banner/Banner';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const BannersDemo = () => {
    const someActions = (event) => {
        console.log(`Click ${event.target.textContent}`);
    }

    return (
        <React.Fragment>
            <h2>Banner</h2>
            <p>
                The Banner component displays a prominent notification strip with themed colors,
                an optional icon, and an optional dismiss button. Body text and actions are
                composed with the <code>BannerContent</code>, <code>BannerActions</code>, and
                <code>BannerAction</code> sub-components.
            </p>

            <h3>Import</h3>
            <CodeBlock language="js" code={`import Banner, {BannerContent, BannerActions, BannerAction} from '../utils/Salient/UI/Banner/Banner';`} />

            <h3>Basic Usage</h3>
            <CodeBlock code={`import Banner, {BannerContent, BannerActions, BannerAction} from './Banner';

<Banner theme="warn" icon={<i className="icon icon-warning"></i>}>
    <BannerContent>Something went wrong while saving your changes.</BannerContent>
    <BannerActions>
        <BannerAction onClick={retry}>Retry</BannerAction>
    </BannerActions>
</Banner>`} />

            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>theme</code></td>
                    <td data-field="Description">sets the color variant class <code>banner--&lt;theme&gt;</code>; examples: <code>active</code>, <code>warn</code>, <code>cancel</code>, <code>disabled</code>, <code>emergency</code>, <code>teal</code>, <code>purple</code>. Omit for the default theme.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>icon</code></td>
                    <td data-field="Description">node rendered in the icon slot at the start of the banner.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>allowBannerDismiss</code></td>
                    <td data-field="Description">default <code>true</code>; shows the dismiss (×) button.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>onBannerDismiss</code></td>
                    <td data-field="Description">callback fired when the banner is dismissed, before it is removed from the DOM.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>blockquoteStyle</code></td>
                    <td data-field="Description">renders the banner in a blockquote-like style.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>BannerContent</code></td>
                    <td data-field="Description">named sub-component for the banner body text.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>BannerActions / BannerAction</code></td>
                    <td data-field="Description">named sub-components wrapping the action row and individual clickable actions.</td>
                </TableRow>
            </Table>

            <Banner theme="disabled" blockquoteStyle={true} onBannerDismiss={() => {alert('Additional Action trigger on closed')}} icon={<i className="icon icon-forbidden"></i>}>
                <BannerContent>
                    This is a typical banners with blockquote styling and the current one uses the <em style={{fontWeight: 'bold'}}>disabled</em> theme.
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Some Action</BannerAction>
                </BannerActions>
            </Banner>

            <Banner theme="active" blockquoteStyle={true} allowBannerDismiss={false} icon={<i className="icon icon-success"></i>}>
                <BannerContent>
                    This banner is a blockquote style banner that cannot be dismiss. This is set by the allowBannerDismiss props. The banner uses the <em style={{fontWeight: 'bold'}}>active</em> theme.
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Action One</BannerAction>
                    <BannerAction onClick={someActions}>Action Two</BannerAction>
                </BannerActions>
            </Banner>

            <Banner theme="cancel" blockquoteStyle={true}>
                <BannerContent>
                    This is a typical banners with blockquote styling using the <em style={{fontWeight: 'bold'}}>cancel</em> theme but with multiple actions.
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Action One</BannerAction>
                    <BannerAction onClick={someActions}>Action Two</BannerAction>
                </BannerActions>
            </Banner>

            <Banner blockquoteStyle={true}>
                <BannerContent>
                    This is a another typical banners with blockquote styling using the <em style={{fontWeight: 'bold'}}>default</em> theme but with multiple actions.
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Action 1</BannerAction>
                    <BannerAction onClick={someActions}>Action 2</BannerAction>
                </BannerActions>
            </Banner>

            <Banner theme="teal" blockquoteStyle={false}>
                <BannerContent>
                    This is a normal banner without blockquote styling using the <em style={{fontWeight: 'bold'}}>teal</em> theme
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Some Action</BannerAction>
                </BannerActions>
            </Banner>

            <Banner theme="purple" blockquoteStyle={false}>
                <BannerContent>
                    This is a normal banner without blockquote styling using the <em style={{fontWeight: 'bold'}}>purple</em> theme
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Some Action</BannerAction>
                </BannerActions>
            </Banner>

            <Banner theme="warn" blockquoteStyle={false} icon={<i className="icon icon-warning"></i>}>
                <BannerContent>
                This is a normal banner without blockquote styling using the <em style={{fontWeight: 'bold'}}>warn</em> theme
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Some Action</BannerAction>
                </BannerActions>
            </Banner>

            <Banner theme="emergency" blockquoteStyle={false}>
                <BannerContent>
                    This is a normal banner without blockquote styling using the <em style={{fontWeight: 'bold'}}>emergency</em> theme 
                </BannerContent>
                <BannerActions>
                    <BannerAction onClick={someActions}>Some Action</BannerAction>
                </BannerActions>
            </Banner>
        </React.Fragment>
    )
}

export default BannersDemo;