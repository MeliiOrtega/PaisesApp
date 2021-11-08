export interface Country {
  name:         Name;
  cca2:         string;
  cca3:         string;
  cioc?:        string;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  tld?:         string[];
  ccn3?:        string;
  independent?: boolean;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Europe = "Europe",
}

export interface Currencies {
  EUR?: All;
  GBP?: All;
  JEP?: All;
  RON?: All;
  MKD?: All;
  IMP?: All;
  BYN?: All;
  GGP?: All;
  BGN?: All;
  CHF?: All;
  BAM?: BAM;
  NOK?: All;
  SEK?: All;
  HUF?: All;
  RSD?: All;
  HRK?: All;
  CZK?: All;
  DKK?: All;
  FOK?: All;
  PLN?: All;
  MDL?: All;
  ISK?: All;
  RUB?: All;
  UAH?: All;
  ALL?: All;
  GIP?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  sqi?: string;
  srp?: string;
  eng?: string;
  fra?: string;
  nrf?: string;
  por?: string;
  ron?: string;
  slv?: string;
  ita?: string;
  mkd?: string;
  glv?: string;
  bel?: string;
  rus?: string;
  ell?: string;
  nfr?: string;
  deu?: string;
  nld?: string;
  gle?: string;
  bul?: string;
  cnr?: string;
  swe?: string;
  lat?: string;
  bos?: string;
  hrv?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  lav?: string;
  hun?: string;
  lit?: string;
  est?: string;
  ltz?: string;
  tur?: string;
  bar?: string;
  ces?: string;
  slk?: string;
  spa?: string;
  dan?: string;
  fao?: string;
  pol?: string;
  fin?: string;
  isl?: string;
  mlt?: string;
  nor?: string;
  ukr?: string;
  cat?: string;
  gsw?: string;
  roh?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
