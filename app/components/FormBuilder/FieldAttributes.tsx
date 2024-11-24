import React from 'react';
import { FormFieldProps } from '~/types/formFieldsProps';
import { getNewFieldByType } from './Utils';

interface FieldProps {
    field: FormFieldProps | null;
    onUpdate: (field: FormFieldProps) => void;
    onRemove: (elementId: string) => void;
    onDone: () => void;
}

export default function FieldAttributes({ field, onUpdate, onRemove, onDone }: FieldProps) {
    if (!field) {
        return (
            <div className="w-1/4 p-4 bg-gray-200">
                <h2 className="text-xl font-bold mb-4">Element</h2>
                <p className="text-gray-500">Select an element to edit its attributes.</p>
            </div>
        );
    }

    return (
        <div className="w-1/4 p-4 bg-gray-200 overflow-y-auto">

        </div>
    );
}

