import {FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {CountriesEnum} from "../../enums/countries.enum";

export function postCodeValidator(): ValidatorFn {
  // @ts-ignore
  return (form: FormGroup): ValidationErrors | null => {
    const country = form.get('country')?.value;
    const postCode = form.get('postCode')?.value;
    if (country === CountriesEnum.IRELAND) {
      return validateIrelandPostCode(postCode);
    } else if (country === CountriesEnum.UNITED_KINGDOM) {
      return validateUKPostCode(postCode);
    }
    return null;
  };
}

function validateIrelandPostCode(postCode: string | null): ValidationErrors | null {
  if (!!postCode && (postCode.length < 6 || postCode.length > 10) ) {
    return { postCode: { 'length-min-6-max-10': true } };
  }
  return null;
}

function validateUKPostCode(postCode: string | null): ValidationErrors | null {
  const ukPostCodeRegexp = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabdhjlnp-uw-z]{2}$/;
  if (!postCode) {
    return { postCode: { required: true } };
  } else if (!ukPostCodeRegexp.test(postCode)) {
    return { postCode: { invalid: true } };
  }
  return null;
}
