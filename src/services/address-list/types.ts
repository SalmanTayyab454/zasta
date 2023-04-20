export interface Response {
  isLoading: boolean;
  isFetched: boolean;
  addressList: Address[];
}

export interface Address {
  uuid: string;
  kreis_name: string;
  kreis_schluessel: string;
  gemeindeverband_name: string;
  gemeindeverband_schluessel: string;
  gemeinde_name: string;
  gemeinde_schluessel: string;
  gemeindeteil_name: string;
  gemeindeteil_schluessel: string;
  strasse_name: string;
  strasse_schluessel: string;
  hausnummer: number;
  hausnummer_zusatz: string;
  postleitzahl: number;
  vergabedatum: string;
  loeschungsdatum: string;
}
