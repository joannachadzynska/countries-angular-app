export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  independent: boolean;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  area: number;
  flag: string;
  flags: Flag;
  population: number;
  tld: string[];
  cioc: string;
}

export interface CountryRegions extends Country {}

export interface CountryDetails extends Flag {}

export interface Flag {
  png: string;
  svg: string;
}
