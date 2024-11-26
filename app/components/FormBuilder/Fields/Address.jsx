import React, { useRef, useState } from "react";
import { MapPinned } from "lucide-react";
import { nanoid } from "nanoid";

export default function ViewComponent({ field }) {
  if (typeof field.id === "undefined" || !field.id) {
    throw new Error("field.id is required");
  }

  const [addressLine1, setAddressLine1] = useState(field.addressLine1 || "");

  const [addressLine2, setAddressLine2] = useState(field.addressLine2 || "");

  const [label, setLabel] = useState(field.label || "");
  const [city, setCity] = useState(field.city || "");
  const [postcode, setPostcode] = useState(field.postcode || "");
  const [province, setProvince] = useState(field.province || "");
  const [country, setCountry] = useState(field.country || "");

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          name={`${field.id}-addressLine1`}
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          placeholder="Address line 1"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          name={`${field.id}-addressLine2`}
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
          placeholder="Address line 2"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          name={`${field.id}-city`}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Town/City"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="text"
          name={`${field.id}-postcode`}
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="Postcode"
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
            <MapPinned /> Address field
          </div>
          <div>
            <input
              type="text"
              name={`${field.id}-label`}
              value={field.label}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name={`${field.id}-isOptional`}
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
    type: "address",
    name: "Address",
    icon: MapPinned,
  };
}

// isNew is set to false by default
export function defaultField() {
  return {
    id: nanoid(),
    type: "address",
    label: "Please enter your address",
    isOptional: false,
    isEditable: true,

    showProvince: true,
    showCountry: false,

    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    province: "",
    country: "",

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
