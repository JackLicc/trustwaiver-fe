import NameField from "./Fields/Name";
import AddressField from "./Fields/Address";
import { newField as newTextField } from "./Fields/Text";
import { newField as newNameField } from "./Fields/Name";
import { newField as newAddressField } from "./Fields/Address";
import { FormFieldProps } from "~/types/formFieldsProps";

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