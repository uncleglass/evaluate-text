export const isLanguageHasModel = (lang) => {
  const countriesWithModel = ["English", "Spanish", "French", "Italian", "Portuguese", "Catalan"];
  if (countriesWithModel.includes(lang)) {
    return true;
  }
  return false;
};