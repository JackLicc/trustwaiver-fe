import TextFieldView from "./Fields/Text";
import { newField as newTextField } from "./Fields/Text";
import { TplComponent as TextFieldTplView } from "./Fields/Text";

import NameFieldView from "./Fields/Name";
import { newField as newNameField } from "./Fields/Name";
import { TplComponent as NameFieldTplView } from "./Fields/Name";

import AddressFieldView from "./Fields/Address";
import { newField as newAddressField } from "./Fields/Address";
import { TplComponent as AddressFieldTplView } from "./Fields/Address";


import { FormFieldProps } from "~/types/formFieldProps";

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

export function getFieldTplView(type: string) {
    switch (type) {
        case "name":
            return <NameFieldTplView />;
        case "text":
            return <TextFieldTplView />;
        case "address":
            return <AddressFieldTplView />;
        default:
            return null;
    }
}