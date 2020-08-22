const handleSubmit = async (event) => {
  event.preventDefault();

  const text = document.getElementById("text").value;
  const lang = await checkLanguage(text);
  const langParagraph = document.getElementById("lang");
  langParagraph.innerHTML = `The entered text it is ${lang}.`;
};
