export const checkLanguage = async (text) => {
  const response = await fetch("http://localhost:8082/lang", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ data: text }),
  });

  try {
    const newData = await response.json();
    const lang = newData.language_list[0].name;
    return lang;
  } catch (error) {
    console.log("error", error);
  }
};

export const isLanguageHasModel = (lang) => {
  const countriesWithModel = ["English", "Spanish", "French", "Italian", "Portuguese", "Catalan"];
  if (countriesWithModel.includes(lang)) {
    return true;
  }
  return false;
};

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
