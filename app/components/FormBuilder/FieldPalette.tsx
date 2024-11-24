import React from 'react'
import { useDrag } from 'react-dnd'

const fields = [
    'name', 'address', 'text'
]

function DraggableField({ type }: { type: string }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'formField',
        item: { type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            className={`p-2 mb-2 bg-white rounded shadow cursor-move ${isDragging ? 'opacity-50' : 'opacity-100'
                }`}
        >
            {type}
        </div>
    )
}

export default function FieldPalette() {
    return (
        <div className="w-1/4 p-4 bg-gray-200 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Form Fields</h2>
            {fields.map((field) => (
                <DraggableField key={field} type={field} />
            ))}
        </div>
    )
}

