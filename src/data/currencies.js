export const currencies = {
  XPF: { name: 'Franc pacifique', en: 'Pacific franc', country: 'nc' },
  AUD: { name: 'Dollar australien', en: 'Australian Dollar', country: 'au' },
  NZD: { name: 'Dollar néo-zélandais', en: 'New Zealand Dollar', country: 'nz' },
  CAD: { name: 'Dollar canadien', en: 'Canadian Dollar', country: 'ca' },
  USD: { name: 'Dollar US', en: 'US Dollar', country: 'us' },
  FJD: { name: 'Dollar fidjien', en: 'Fijian Dollar', country: 'fj' },
  SGD: { name: 'Dollar de Singapour', en: 'Singapore Dollar', country: 'sg' },
  THB: { name: 'Baht thaïlandais', en: 'Thai Baht', country: 'th' },
  CHF: { name: 'Franc suisse', en: 'Swiss Franc', country: 'ch' },
  EUR: { name: 'Euro', en: 'Euro', country: 'eu' },
  GBP: { name: 'Livre sterling', en: 'British Pound', country: 'gb' },
  JPY: { name: 'Yen', en: 'Japanese Yen', country: 'jp' },
  VUV: { name: 'Vatu (Vanuatu)', en: 'Vanuatu Vatu', country: 'vu' }
};

export const getFlagUrl = (code) => {
  const countryCode = currencies[code]?.country.toLowerCase();
  return `/flags/${countryCode}.svg`;
};
