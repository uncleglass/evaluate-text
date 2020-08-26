export const getModelCode = (lang) => {
  const models = new Map([
    ["English", "IPTC_en"],
    ["Spanish", "IPTC_es"],
    ["French", "IPTC_fr"],
    ["Italian", "IPTC_it"],
    ["Portuguese", "IPTC_pt"],
    ["Catalan", "IPTC_ca"],
  ]);

  return models.get(lang);
};
