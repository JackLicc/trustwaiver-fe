import React, { useRef, useState } from "react";
import Editor from "./Editor.client";
import { nanoid } from "nanoid";
import "quill/dist/quill.snow.css";

export default function ViewComponent({ field }) {
  if (typeof field.id === "undefined" || !field.id) {
    throw new Error("field.id is required");
  }

  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  const quillRef = useRef();

  return (
    <>
      <div dataFieldId={field.id}>
        <Editor
          ref={quillRef}
          readOnly={readOnly}
          onSelectionChange={setRange}
          onTextChange={setLastChange}
        />
      </div>
    </>
  );
}

export function AttributesComponent({ field, onDone, onRemove }) {
  if (typeof field.id === "undefined" || !field.id) {
    throw new Error("attributes.id is required");
  }

  return (
    <>
      <div className="w-1/4 p-4 bg-gray-200 overflow-y-auto">
        <div className="flex justify-between mt-4">
          <button
            onClick={onDone}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Done
          </button>
          <button
            onClick={() => onRemove(attributes.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Delete field
          </button>
        </div>
      </div>
    </>
  );
}

// isNew is set to false by default
export function defaultField() {
  return {
    id: nanoid(),
    type: "text",
    label: "",
    isOptional: true,
    isEditable: true,
    value: "",

    isNew: false,
  };
}

export function newField() {
  return {
    ...defaultField(),
    isNew: true,
  };
}

export function unifyField(field = {}) {
  let newField = {};

  const dField = defaultField();

  Object.keys(dField).forEach((key) => {
    if (typeof field[key] !== "undefined") {
      newField[key] = field[key];
    } else {
      newField[key] = dField[key];
    }
  });

  return newField;
}
