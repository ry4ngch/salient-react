import React, { useState } from "react";

/**
 * FileField - file upload replicating the showcase file input (styled selector button + chosen file names).
 *
 * Usage:
 *   <FileField label="Upload Document" tag="type=file" accept=".pdf,.doc,.docx" helper="PDF or Word documents only" onChange={...} />
 *   <FileField label="Upload Images" accept="image/*" multiple helper="Select multiple image files" />
 */
const FileField = ({
  label,
  tag,
  helper,
  error,
  multiple = false,
  accept,
  onChange,
  className,
  ...rest
}) => {
  const [fileNames, setFileNames] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files || []);
    setFileNames(files.map((f) => f.name));
    if (typeof onChange === "function") {
      onChange(multiple ? files : files[0] || null, e);
    }
  };

  return (
    <div
      className={`file-field ${error ? "has-error" : ""} ${className || ""}`.trim()}
      {...rest}
    >
      {label && (
        <label className="text-field-title">
          {label}
          {tag && <span className="text-field-tag">{tag}</span>}
        </label>
      )}
      <div className="file-field-input">
        <input
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
        />
        {fileNames.length > 0 && (
          <span className="file-field-names">{fileNames.join(", ")}</span>
        )}
      </div>
      {(error || helper) && (
        <p className={`text-field-helper ${error ? "is-error" : ""}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
};

export default FileField;
