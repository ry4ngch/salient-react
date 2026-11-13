import React from 'react';
import Card, {CardContent} from '../utils/Salient/UI/Card/Card';
import Grid, {GridRow, GridItem} from '../utils/Salient/UI/Grid/Grid';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';
import CodeBlock from '../components/Docs/CodeBlock';

const IconsDemo = () => {
  return (
    <React.Fragment>
        <h2>Icons</h2>
            <p>
                Icons come in two flavors: the built-in Salient icon set, rendered with plain
                <code>&lt;i&gt;</code> tags and <code>icon icon-*</code> classes, and FontAwesome v7,
                whose <code>fas</code>, <code>far</code> and <code>fab</code> packs are registered
                globally so any page can use <code>FontAwesomeIcon</code> without extra setup.
            </p>
            <h3>Import</h3>
            <p>The Salient icon classes need no import — just add the class to an <code>&lt;i&gt;</code> element. For FontAwesome icons:</p>
            <CodeBlock code={`import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';`} />
            <h3>Basic Usage</h3>
            <CodeBlock code={`<i className="icon icon-heart"></i>`} />
            <CodeBlock code={`<FontAwesomeIcon icon={['fas', 'user']} />`} />
            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>icon icon-&lt;name&gt;</code></td>
                    <td data-field="Description">Salient icons use the pattern <code>icon icon-&lt;name&gt;</code>, e.g. <code>icon-search</code>, <code>icon-download</code>, <code>icon-play</code> — see the demos below for the full list.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>size-*</code></td>
                    <td data-field="Description">Size Salient icons with the <code>size-*</code> classes, e.g. <code>icon-cloud size-6x</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>fas / far / fab</code></td>
                    <td data-field="Description">FontAwesome packs <code>fas</code>, <code>far</code> and <code>fab</code> are added to the global library in <code>src/utils/FontAwesome/fontAwesome.js</code>, so pass a tuple like <code>icon=&#123;['fas', 'user']&#125;</code>.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>aria-hidden</code></td>
                    <td data-field="Description">Both approaches can be mixed freely; use <code>aria-hidden</code> or a tooltip for decorative icons in controls.</td>
                </TableRow>
            </Table>

        <Card>
        <CardContent>
            <span style={{marginBottom: '20px', display: 'block'}}>This page is a demo for icons. It will showcase different icons and their usage in the application.</span>
            <p style={{fontWeight:'bold', textDecoration: 'underline', marginBottom: '5px'}}>1. Directional Icons</p>
            <Grid className="icon-preview">
                <GridRow>
                    <GridItem>
                        <span>Icon Left</span>
                        <i className="icon icon-left"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Right</span>
                        <i className="icon icon-right"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Up</span>
                        <i className="icon icon-up"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Down</span>
                        <i className="icon icon-down"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Backward</span>
                        <i className="icon icon-backward"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Forward</span>
                        <i className="icon icon-forward"></i>
                    </GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>
                        <span>Icon Step Backward</span>
                        <i className="icon icon-step-backward"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Step Forward</span>
                        <i className="icon icon-step-forward"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Right Arrow</span>
                        <i className="icon icon-right-arrow"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Left Arrow</span>
                        <i className="icon icon-left-arrow"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Top Arrow</span>
                        <i className="icon icon-top-arrow"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Bottom Arrow</span>
                        <i className="icon icon-bottom-arrow"></i>
                    </GridItem>
                </GridRow>
                <GridRow>
                    
                    <GridItem>
                        <span>Icon Top Fill</span>
                        <i className="icon icon-top-fill"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Bottom Fill</span>
                        <i className="icon icon-bottom-fill"></i>
                    </GridItem>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                    <GridItem/>
                </GridRow>
            </Grid>
        </CardContent>
        <CardContent>
            <p style={{fontWeight:'bold', textDecoration: 'underline', marginBottom: '5px'}}>2. File/Document Type Icons</p>
            <Grid className="icon-preview">
                <GridRow>
                    <GridItem>
                        <span>Icon File</span>
                        <i className="icon icon-file"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Video</span>
                        <i className="icon icon-video"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Photo</span>
                        <i className="icon icon-photo"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Folder</span>
                        <i className="icon icon-folder"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Search</span>
                        <i className="icon icon-search"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon flag</span>
                        <i className="icon icon-flag"></i>
                    </GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>
                        <span>Icon Forbidden</span>
                        <i className="icon icon-forbidden"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Gear</span>
                        <i className="icon icon-gear"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Lock</span>
                        <i className="icon icon-lock"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Unlock</span>
                        <i className="icon icon-unlock"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Link</span>
                        <i className="icon icon-link"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon List</span>
                        <i className="icon icon-list"></i>
                    </GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>
                        <span>Icon Filter</span>
                        <i className="icon icon-filter"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Bookmark</span>
                        <i className="icon icon-bookmark"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Sort By</span>
                        <i className="icon icon-sort-by"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Sort By Fill</span>
                        <i className="icon icon-sort-by-fill"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Wrench</span>
                        <i className="icon icon-wrench"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Cloud</span>
                        <i className="icon icon-cloud"></i>
                    </GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>
                        <span>Icon Download</span>
                        <i className="icon icon-download"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Close</span>
                        <i className="icon icon-close"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Drag</span>
                        <i className="icon icon-drag"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Phone</span>
                        <i className="icon icon-phone"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Success</span>
                        <i className="icon icon-success"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Warning</span>
                        <i className="icon-warning"></i>
                    </GridItem>
                </GridRow>
            </Grid>
        </CardContent>
        <CardContent>
            <p style={{fontWeight:'bold', textDecoration: 'underline', marginBottom: '5px'}}>3. Social/Media Icons</p>
            <Grid className="icon-preview">
                <GridRow>
                    <GridItem>
                        <span>Icon Tag</span>
                        <i className="icon icon-tag"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Heart</span>
                        <i className="icon icon-heart"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Comment</span>
                        <i className="icon icon-comment"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Profile</span>
                        <i className="icon icon-profile"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Share</span>
                        <i className="icon icon-share"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Location</span>
                        <i className="icon icon-location"></i>
                    </GridItem>
                </GridRow>
                <GridRow>
                    <GridItem>
                        <span>Icon Eject</span>
                        <i className="icon icon-eject"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Pause</span>
                        <i className="icon icon-pause"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Play</span>
                        <i className="icon icon-play"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Sound</span>
                        <i className="icon icon-sound"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Map Marker</span>
                        <i className="icon icon-map-marker"></i>
                    </GridItem>
                    <GridItem>
                        <span>Icon Clock</span>
                        <i className="icon icon-clock"></i>
                    </GridItem>
                </GridRow>
            </Grid>
        </CardContent>
    </Card>
    </React.Fragment>
  )
}

export default IconsDemo;