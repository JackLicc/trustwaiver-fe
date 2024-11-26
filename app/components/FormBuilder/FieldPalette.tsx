import React, { memo } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { DragOverlay } from '@dnd-kit/core';
import { useState } from 'react';

const predefinedFields = [
  { type: 'text', label: 'Text' },
  { type: 'address', label: 'Address' },
  { type: 'name', label: 'Name' },
];

const FieldPalette: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h6 className="text-sm font-light mb-4">Drag and drop fields</h6>
      {predefinedFields.map((field) => (
        <DraggableField key={field.type} {...field} setActiveId={setActiveId} />
      ))}
      <DragOverlay dropAnimation={null} >
        {activeId ? (
          <div className="bg-white p-2 mb-2 cursor-move border border-gray-300 rounded touch-none">
            {predefinedFields.find((field) => field.type === activeId)?.label}
          </div>
        ) : null}
      </DragOverlay>
    </div>
  );
};


const DraggableField: React.FC<{ type: string; label: string; setActiveId: (id: string | null) => void }> = memo(({ type, label, setActiveId }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `predefined-${type}`,
  });

  const handleDragStart = () => setActiveId(type);
  const handleDragEnd = () => setActiveId(null);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      {...attributes}
      className={`bg-white p-2 mb-2 cursor-move border border-gray-300 rounded touch-none ${isDragging ? 'opacity-50' : ''}`}
    >
      {label}
    </div>
  );
});

export default FieldPalette;
