export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      ron: {
        official: string;
        common: string;
      };
    };
  };
  independent: true;
  unMember: true;
  currencies: {
    RON: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  languages: {
    ron: string;
  };
  borders: string[];
  area: number;
  flag: string;
  flags: string[];
}
