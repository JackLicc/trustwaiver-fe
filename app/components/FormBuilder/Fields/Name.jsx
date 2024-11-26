import React, { useRef, useState } from "react";
import { ContactRound } from "lucide-react";
import { nanoid } from "nanoid";

export default function ViewComponent({ field }) {
  if (typeof field.id === "undefined") {
    throw new Error("field.id is required");
  }

  const [firstname, setFirstname] = useState(field.firstname || "");
  const [lastname, setLastname] = useState(field.defaultLastname || "");

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          name={`${field.id}-firstname`}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First name"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          name={`${field.id}-lastname`}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last name"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
}

export function AttributesComponent({ field, handleChange, onDone, onRemove }) {
  return (
    <>
      <div className="w-1/4 p-4 bg-gray-200 overflow-y-auto">
        <div className="space-y-4">
          <div>
            <ContactRound /> Fullname field
          </div>
          <div>
            <input
              type="text"
              name="label"
              id="label"
              value={field.label}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isOptional"
              checked={field.isOptional}
              onChange={handleChange}
              className="mr-2"
            />
            Optional
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isEditable"
              checked={field.isEditable}
              onChange={handleChange}
              className="mr-2"
            />
            Editable
          </label>

          <div className="flex justify-between mt-4">
            <button
              onClick={onDone}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Done
            </button>
            <button
              onClick={() => onRemove(field.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function tplField() {
  return {
    type: "name",
    name: "Name",
    icon: ContactRound,
  };
}

// isNew is set to false by default
export function defaultField() {
  return {
    id: nanoid(),
    type: "name",
    label: "Please enter your name",
    isOptional: false,
    isEditable: true,

    firstname: "",
    lastname: "",

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
