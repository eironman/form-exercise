import {SelectOptionModel} from "../models/select-option.model";

export enum CountriesEnum {
  IRELAND='Ireland',
  UNITED_KINGDOM='United Kingdom',
}

export function countriesAsSelectOptions(): SelectOptionModel[] {
  return Object.values(CountriesEnum)
    .map(country => ({value: country, label: country}));
}
