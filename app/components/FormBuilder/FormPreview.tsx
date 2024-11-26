import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { FormFieldProps } from '~/types/formFieldProps';
import { GripVertical } from 'lucide-react';
import { getFieldView } from './Utils';

interface FormPreviewProps {
  fields: FormFieldProps[];
  onSelectField: (field: FormFieldProps) => void;
}

const FormPreview: React.FC<FormPreviewProps> = ({ fields, onSelectField }) => {
  const { setNodeRef } = useDroppable({
    id: 'form-preview',
  });

  return (
    <div className="w-full lg:w-1/2 m-4">
      <div ref={setNodeRef} className="w-full bg-white p-4 shadow-lg rounded-lg min-h-screen">
        <div className="space-y-4">
          {fields.map((field) => (
            <SortableField key={field.id} field={field} onSelect={onSelectField} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SortableFieldProps {
  field: FormFieldProps;
  onSelect: (field: FormFieldProps) => void;
}

const SortableField: React.FC<SortableFieldProps> = ({ field, onSelect }) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={`border border-gray-300 rounded-lg relative group shadow-sm hover:shadow-md transition-shadow duration-200 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={style}
      onClick={() => onSelect(field)}
    >
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center cursor-move transition-colors rounded-tl-lg"
        aria-label={`Drag handle for ${field.label} field`}
      >
        <GripVertical size={16} className="text-gray-500" />
      </div>
      <div className="p-4">
        {getFieldView(field)}
      </div>
    </div>
  );
};

export default FormPreview;
