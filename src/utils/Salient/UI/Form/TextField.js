import React from "react";

/**
 * TextFieldV2 - typed text field covering text, email, tel, url, password and search.
 * Full replacement for TextField: keeps the legacy DOM classes (text-field-group,
 * text-field-input, text-field-title) and FormAffix prefix/suffix usage, and adds
 * label tag, helper text and error state on top.
 *
 * Usage:
 *   <TextFieldV2 type="email" label="Email Address" tag="type=email" helper="We'll never share your email" placeholder="john@example.com" />
 *   <TextFieldV2 label="Username" inputPrefix={<FormAffix icon="icon-search" />} inputSuffix={<FontAwesomeIcon icon="eye" />} expandFull={true} />
 *   <TextFieldV2 label="Password" error="Minimum 8 characters required" minlength={8} />
 */
const TextFieldV2 = ({
  type = "text",
  label,
  tag,
  helper,
  error,
  inputPrefix,
  inputSuffix,
  expandFull = false,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={`text-field-group ${expandFull ? "expand-full" : ""} ${error ? "has-error" : ""} ${className || ""}`.trim()}
    >
      {children}
      {label && (
        <label className="text-field-title" htmlFor={rest.id}>
          {label}
          {tag && <span className="text-field-tag">{tag}</span>}
        </label>
      )}
      <div className="text-field-input">
        {inputPrefix ? inputPrefix : ""}
        <input type={type} {...rest} />
        {inputSuffix ? inputSuffix : ""}
      </div>
      {(error || helper) && (
        <p className={`text-field-helper ${error ? "is-error" : ""}`}>
          {error || helper}
        </p>
      )}
    </div>
  );
};

export default TextFieldV2;
