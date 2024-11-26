import React, { memo, useCallback } from 'react';
import { FormFieldProps } from '~/types/formFieldProps';

interface FieldSettingsProps {
    field: FormFieldProps | null;
    onUpdateField: (field: FormFieldProps) => void;
}

const FieldSettings: React.FC<FieldSettingsProps> = memo(({ field, onUpdateField }) => {
    const handleLabelChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (field) {
            onUpdateField({ ...field, label: e.target.value });
        }
    }, [field, onUpdateField]);

    if (!field) {
        return (
            <div className="w-1/4 bg-gray-100 p-4">
                <h2 className="text-lg font-bold mb-4">Field Settings</h2>
                <p>Select a field to edit its settings</p>
            </div>
        );
    }

    return (
        <div className="w-1/4 bg-gray-100 p-4">
            <h2 className="text-lg font-bold mb-4">Field Settings</h2>
            <div className="mb-4">
                <label className="block mb-2">Field Type</label>
                <input type="text" value={field.type} disabled className="w-full p-2 bg-gray-200" />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Field Label</label>
                <input
                    type="text"
                    value={field.label}
                    onChange={handleLabelChange}
                    className="w-full p-2"
                />
            </div>
        </div>
    );
});

FieldSettings.displayName = 'FieldSettings';

export default FieldSettings;

