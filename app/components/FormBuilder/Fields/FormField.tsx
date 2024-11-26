import React from 'react';

interface FormFieldProps {
    type: string;
    index: number;
}

export default function FormField({ type, index }: FormFieldProps) {
    const fieldNumber = index + 1;
    const fieldLabel = `${fieldNumber}. ${type.charAt(0).toUpperCase() + type.slice(1)} Field`;

    const inputClassName = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500";

    switch (type) {
        case 'text':
            return (
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{fieldLabel}</label>
                    <input type="text" className={inputClassName} placeholder="Enter text here" />
                </div>
            );
        case 'address':
            return (
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{fieldLabel}</label>
                    <textarea className={inputClassName} rows={3} placeholder="Enter address here"></textarea>
                </div>
            );
        default:
            return null;
    }
}

