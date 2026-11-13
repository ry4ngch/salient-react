import React, {useState} from "react";
import Upload from "../utils/Salient/UI/Upload/Upload";
import Banner, {BannerContent} from '../utils/Salient/UI/Banner/Banner';
import CodeBlock from '../components/Docs/CodeBlock';
import Table, {TableRow} from '../utils/Salient/UI/Table/Table';

const UploadDemo = () => {
    const supportedExtensions = ['.png', '.jpg', '.docx', '.pdf'];
    const [errorMsg, setErrorMsg] = useState(null);

    const fileChangeHandler = (response) => {
        // eslint-disable-next-line no-console
        console.log(response);
    }

    const errorHandler = (error) => {
        setErrorMsg(error);
    }

    return (
        <React.Fragment>
            <h2>Upload</h2>
            <p>
                The Upload component provides a drag-and-drop zone (plus a "Choose Files" picker)
                for selecting multiple files. It validates file type, size and duplicates, shows
                the list of selected files, and supports drag-to-reorder within that list.
            </p>
            <h3>Import</h3>
            <CodeBlock code={`import Upload from '../utils/Salient/UI/Upload/Upload';`} />
            <h3>Basic Usage</h3>
            <CodeBlock code={`<Upload
    supportedExtensions={['.png', '.jpg', '.pdf']}
    maxFileSize={25}
    onFilesChange={(files) => console.log(files)}
    validationErrorCallback={(title, message) => console.log(title, message)}
/>`} />
            <h3>Key Props</h3>
            <Table columns={['Prop', 'Description']}>
                <TableRow>
                    <td data-field="Prop"><code>supportedExtensions</code></td>
                    <td data-field="Description">Array of accepted extensions, e.g. <code>['.png', '.pdf']</code>; empty array allows all file types.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>maxFileSize</code></td>
                    <td data-field="Description">Per-file size limit in MB (default 25).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>onFilesChange</code></td>
                    <td data-field="Description">Called with the current file list whenever files are added, removed or reordered.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>validationErrorCallback</code></td>
                    <td data-field="Description">Called as <code>(title, message)</code> when a file is too large, of an unsupported type, or a duplicate.</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>fileDraggable</code></td>
                    <td data-field="Description">Enables drag-to-reorder of files in the list (default <code>true</code>).</td>
                </TableRow>
                <TableRow>
                    <td data-field="Prop"><code>uploadIconClass</code></td>
                    <td data-field="Description">Custom icon class that replaces the default cloud/stack icon.</td>
                </TableRow>
            </Table>
            {errorMsg && 
                <Banner theme="cancel" allowBannerDismiss={true}>
                    <BannerContent>
                        {errorMsg}
                    </BannerContent>
                </Banner>
            }
            <Upload supportedExtensions={supportedExtensions} onFilesChange={fileChangeHandler} validationErrorCallback={errorHandler}/>
        </React.Fragment>

    )
}

export default UploadDemo;