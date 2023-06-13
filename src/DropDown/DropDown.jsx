import React, { useRef, useState } from "react";
import "./DropDown.css";

const DropDown = () => {
  const [expanded, setExpanded] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const boxRef = useRef();

  const showCheckboxes = () => {
    const checkboxes = boxRef.current;
    if (!expanded) {
      checkboxes.style.display = "block";
      setExpanded(true);
    } else {
      checkboxes.style.display = "none";
      setExpanded(false);
    }
  };

  const options = [
    { id: "1", label: "item 1", readOnly },
    { id: "2", label: "item 2", readOnly },
    { id: "3", label: "item 3", readOnly },
    { id: "4", label: "item 4", readOnly },
  ];

  return (
    <div className="center">
      <div>
        <input
          type="checkbox"
          id="readonlyMode"
          checked={readOnly}
          onChange={(e) => {
            setReadOnly(e.target.checked);
          }}
        />
        <label htmlFor="readonlyMode"> Read Only</label>
      </div>
      <form>
        <div className="multiselect">
          <div className="selectBox" onClick={showCheckboxes}>
            <select>
              <option>Select an option</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div id="checkboxes" ref={boxRef}>
            {options.map((option) => (
              <label htmlFor={option.id} key={option.id}>
                <input
                  type="checkBox"
                  id={option.id}
                  className="input-css"
                  disabled={readOnly}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DropDown;
