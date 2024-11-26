import React, { memo } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { DragOverlay } from '@dnd-kit/core';
import { useState } from 'react';
import { getFieldTplView } from './Utils';

const predefinedFields = [
  { type: 'text', label: 'Text' },
  { type: 'address', label: 'Address' },
  { type: 'name', label: 'Name' },
];

const FieldPalette: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full p-4 h-full">
      <h6 className="text-sm font-light mb-4 text-slate-700">Drag & drop fields</h6>
      {predefinedFields.map((field) => (
        <DraggableField key={field.type} {...field} setActiveId={setActiveId} />
      ))}
      <DragOverlay dropAnimation={null} >
        {activeId ? (
          <div className="mb-2 cursor-move touch-none">
            {getFieldTplView(activeId)}
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
      className={`mb-2 cursor-move touch-none ${isDragging ? 'opacity-50' : ''}`}
    >
      {getFieldTplView(type)}
    </div>
  );
});

export default FieldPalette;
