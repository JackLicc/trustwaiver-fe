import React, { useState, useCallback } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent, DragOverEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import FieldPalette from './FieldPalette';
import FormCanvas from './FormCanvas';
import FieldSettings from './FieldSettings';
import { FormFieldProps } from "~/types/formFieldProps";
import { getNewFieldByType } from './Utils';
import { ClientOnly } from "remix-utils/client-only"

const FormBuilder: React.FC = () => {
  const [fields, setFields] = useState<FormFieldProps[]>([]);
  const [selectedField, setSelectedField] = useState<FormFieldProps | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragOver = useCallback((event: DragEndEvent) => { }, []);

  const handleDragEnd = useCallback((event: DragOverEvent) => {
    const { active, over } = event;

    // handle existing fields
    if (over && typeof over.id !== "undefined"
      && active.id !== over.id &&
      !active.id.toString().startsWith('predefined-') &&
      !over?.id.toString().startsWith('predefined-')
    ) {
      setFields((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });

      return;
    }

    if (active.id.toString().startsWith('predefined-') && over && !fields.some(field => field.id === active.id)) {
      const newField: FormFieldProps = getNewFieldByType(active.id.toString().split('-')[1])!;

      setFields((prevFields) => {
        if (over.id === 'form-canvas') {
          return [...prevFields, newField];
        } else {
          const overIndex = prevFields.findIndex((field) => field.id === over.id);
          return [
            ...prevFields.slice(0, overIndex + 1),
            newField,
            ...prevFields.slice(overIndex + 1),
          ];
        }
      });
    }
  }, [fields]);

  return (
    <ClientOnly>
      {() => (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
        >
          <div className="flex h-screen">
            <div className="bg-slate-100 w-64">
              <FieldPalette />
            </div>
            <div className="flex-grow">
              <SortableContext items={fields} strategy={verticalListSortingStrategy}>
                <FormCanvas
                  fields={fields}
                  onSelectField={setSelectedField}
                />
              </SortableContext>
            </div>
            <div className="flex-4">
              <FieldSettings
                field={selectedField}
                onUpdateField={setSelectedField}
              />
            </div>
          </div>
        </DndContext>
      )}
    </ClientOnly>
  );
};

export default FormBuilder;

