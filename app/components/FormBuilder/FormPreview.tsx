import React, { useState } from "react";
import { useDrop } from "react-dnd";

import { getNewFieldByType } from "./Utils";

import { FormFieldProps } from "~/types/formFieldsProps";
import TextFieldView, { defaultField as defaultTextField } from "./Fields/Text";
import AddressFieldView, { defaultField as defaultAddressField } from "./Fields/Address";
import NameFieldView, { defaultField as defaultNameField } from "./Fields/Name";

interface FormPreviewProps {
  initialFields: FormFieldProps[];
  onFieldClick: (field: FormFieldProps) => void;
  onFieldDrop: (type: string) => void;
}

export default function FormPreview({
  initialFields,
  onFieldClick,
  onFieldDrop,
}: FormPreviewProps) {

  const [fields, setFields] = useState<FormFieldProps[]>(initialFields);

  const [, drop] = useDrop(() => ({
    accept: "formField",
    drop: (item: { type: string }) => {
      onFieldDrop(item.type);
    },
  }));

  const renderField = (field: FormFieldProps) => {
    switch (field.type) {
      case "name":
        return (
          <NameFieldView field={field} />
        );
      case "text":
        return (
          <TextFieldView field={field} />
        );
      case "address":
        return (
          <AddressFieldView field={field} />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={drop} className="w-1/2 p-4 bg-white overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Form Preview</h2>
      {fields.length > 0 && fields.map((field) => (
        <div
          key={field.id}
          className="p-4 mb-4 border rounded cursor-pointer hover:bg-gray-100"
          onClick={() => onFieldClick(field)}
        >
          <h3 className="font-bold mb-2">{field.label}</h3>
          {renderField(field)}
        </div>
      ))}
      {fields.length === 0 && (
        <p className="text-gray-500">
          Drag and drop fields here to build your form.
        </p>
      )}
    </div>
  );
}
