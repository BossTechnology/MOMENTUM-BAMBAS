// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames";
import isValidString from "../../utils/isValidString";

function TextArea({
  rows = 5,
  style,
  value,
  disabled,
  onChange,
  textLabel,
  className,
  placeholder,
  containerStyle,
  containerClassName,
  customTextArea = {},
}) {
  return (
    <div
      style={containerStyle}
      className={classnames([containerClassName, "form-control-container"])}
    >
      {isValidString(textLabel) && (
        <label className="input-label mb-1">{textLabel}</label>
      )}

      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...customTextArea}
        rows={rows}
        style={style}
        autoComplete="new-password"
        className={classnames(["form-control py-2", className])}
        disabled={disabled ?? customTextArea?.disabled}
      />
    </div>
  );
}

TextArea.propTypes = {
  rows: PropTypes.number,
  disabled: PropTypes.bool,

  style: PropTypes.object,
  customTextArea: PropTypes.object,

  value: PropTypes.string,
  textLabel: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default memo(TextArea, (prevProps, nextProps) => {
  return (
    prevProps.style === nextProps.style &&
    prevProps.value === nextProps.value &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.className === nextProps.className &&
    prevProps.customTextArea === nextProps.customTextArea &&
    prevProps.containerClassName === nextProps.containerClassName
  );
});
