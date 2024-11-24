import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FieldPalette from "./FieldPalette";
import FormPreview from "./FormPreview";
import FieldAttributes from "./FieldAttributes";
import { useFormBuilder } from "~/hooks/useFormBuilder";

export default function FormBuilder() {
  const {
    formFields,
    addField,
    updateField,
    removeField,
    selectedField,
    setSelectedField,
  } = useFormBuilder();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen bg-gray-100">
        <FieldPalette />
        <FormPreview
          initialFields={formFields}
          onFieldClick={setSelectedField}
          onFieldDrop={addField}
        />
        <FieldAttributes
          field={selectedField}
          onUpdate={updateField}
          onRemove={removeField}
          onDone={() => setSelectedField(null)}
        />
      </div>
    </DndProvider>
  );
}
