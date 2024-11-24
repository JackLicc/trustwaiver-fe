export interface BaseFormFieldProps {
  id: string; // either a random unique string for new fields or the id of the field from the database
  type: string;
  label: string;
  isOptional: boolean;
  isEditable: boolean;
  isNew: boolean;
}

export interface NameFieldProps extends BaseFormFieldProps {
  firstname: string;
  lastname: string;
}

export interface TextFieldProps extends BaseFormFieldProps {}

export interface AddressFieldProps extends BaseFormFieldProps {
  showProvince: boolean;
  showCountry: boolean;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  province: string;
  country: string;
}

export type FormFieldProps =
  | NameFieldProps
  | TextFieldProps
  | AddressFieldProps;
