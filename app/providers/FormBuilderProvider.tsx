// create field provider to let FormBuilder share fields
import React, { createContext, useContext, useState } from 'react';
import { FormFieldProps } from '~/types/formFieldProps';
import { useFormBuilder } from "~/hooks/useFormBuilder";

interface FormBuilderContextProps {
    formFields: FormFieldProps[];
    setFormFields: (fields: FormFieldProps[]) => void;
    addField: (type: string) => void;
    updateField: (updatedField: FormFieldProps) => void;
    removeField: (id: string) => void;
    selectedField: FormFieldProps | null;
    setSelectedField: (selectedField: FormFieldProps | null) => void;
}

const FormBuilderContext = createContext<FormBuilderContextProps>(null!);

export const FormBuilderProvider = ({ children }: { children: React.ReactNode }) => {
    const {
        formFields,
        setFormFields,
        addField,
        updateField,
        removeField,
        selectedField,
        setSelectedField,
    } = useFormBuilder();

    return (
        <FormBuilderContext.Provider value={{
            formFields,
            setFormFields,
            addField,
            updateField,
            removeField,
            selectedField,
            setSelectedField,
        }}>
            {children}
        </FormBuilderContext.Provider>
    );
};

export const useFormBuilderContext = (): FormBuilderContextProps => {
    const context = useContext(FormBuilderContext);
    if (!context) {
        throw new Error('useFieldContext must be used within a FieldProvider');
    }
    return context;
};
