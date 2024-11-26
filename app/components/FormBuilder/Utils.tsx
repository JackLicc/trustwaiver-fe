import TextFieldView from "./Fields/Text";
import { newField as newTextField } from "./Fields/Text";
import { tplField as textTplField } from "./Fields/Text";

import NameFieldView from "./Fields/Name";
import { newField as newNameField } from "./Fields/Name";
import { tplField as nameTplField } from "./Fields/Name";

import AddressFieldView from "./Fields/Address";
import { newField as newAddressField } from "./Fields/Address";
import { tplField as addressTplField } from "./Fields/Address";


import { FormFieldProps, FormFieldTplProps } from "~/types/formFieldProps";

export function getNewFieldByType(type: string): FormFieldProps | null {
    switch (type) {
        case "name":
            return newNameField()
        case "text":
            return newTextField();
        case "address":
            return newAddressField();
        default:
            return null;
    }
}

export function getFieldView(field: FormFieldProps) {
    switch (field.type) {
        case "name":
            return <NameFieldView field={field} />;
        case "text":
            return <TextFieldView field={field} />;
        case "address":
            return <AddressFieldView field={field} />;
        default:
            return null;
    }
}

export function getFieldTplView(type: string | null) {
    let tf: FormFieldTplProps | null = null;

    switch (type) {
        case "name":
            tf = nameTplField();
            break;
        case "text":
            tf = textTplField();
            break;
        case "address":
            tf = addressTplField();
            break;
        default:
            tf = null;
    }

    if (!tf) {
        return <></>;
    }

    return (
        <div className="flex items-center px-4 py-3 font-light bg-slate-50 text- rounded">
            <tf.icon className="mr-5" />
            <span>{tf.name}</span>
        </div>
    );
}