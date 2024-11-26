import { useState } from 'react';
import { FormFieldProps } from '../types/formFieldProps';
import { getNewFieldByType } from '../components/FormBuilder/Utils';


export function useFormBuilder() {
    const [formFields, setFormFields] = useState<FormFieldProps[]>([]);
    const [selectedField, setSelectedField] = useState<FormFieldProps | null>(null);

    const addField = (type: string) => {
        const newField: FormFieldProps | null = getNewFieldByType(type);
        if (!newField) {
            return;
        }

        setFormFields([...formFields, newField]);
    };

    const updateField = (updatedField: FormFieldProps) => {
        setFormFields(formFields.map(el => el.id === updatedField.id ? updatedField : el));
    };

    const removeField = (fieldId: string) => {
        setFormFields(formFields.filter(el => el.id !== fieldId));
        if (selectedField && selectedField.id === fieldId) {
            setSelectedField(null);
        }
    };

    return {
        formFields,
        setFormFields,
        addField,
        updateField,
        removeField,
        selectedField,
        setSelectedField,
    };
}

