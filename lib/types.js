export const CountryCodeList = ["VI", "US", "AU", "SG", "KR"];
export const RegionList = [
  "Africa",
  "Americas",
  "Antarctic",
  "Asia",
  "Europe",
  "Oceania",
];
export const SubregionList = [
  "Southern Asia",
  "Southern Europe",
  "Northern Africa",
  "Polynesia",
  "Middle Africa",
  "Caribbean",
  "South America",
  "Western Asia",
  "Australia and New Zealand",
  "Western Europe",
  "Eastern Europe",
  "Central America",
  "Western Africa",
  "North America",
  "Southern Africa",
  "Eastern Africa",
  "South-Eastern Asia",
  "Eastern Asia",
  "Northern Europe",
  "Melanesia",
  "Micronesia",
  "Central Asia",
  "Central Europe",
];
export const TranslationLanguageCodeList = [
  "common",
  "cym",
  "deu",
  "fra",
  "hrv",
  "ita",
  "jpn",
  "nld",
  "por",
  "rus",
  "spa",
  "svk",
  "fin",
  "zho",
  "isr",
];
export var FlagType;
(function (FlagType) {
  FlagType["FLAT"] = "flat";
  FlagType["EMOJI"] = "emoji";
})(FlagType || (FlagType = {}));
export function isCountryCode(str) {
  return CountryCodeList.some((code) => code === str);
}
//# sourceMappingURL=types.js.map
