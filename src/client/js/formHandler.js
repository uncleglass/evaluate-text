 export const handleSubmit = async (event) => {
  event.preventDefault();

  const text = document.getElementById("text").value;
  const lang = await Client.checkLanguage(text);

  const langParagraph = document.getElementById("lang");
  const classDiv = document.getElementById("classification");
  classDiv.innerHTML = "";
  langParagraph.textContent = `The entered text is in ${lang}.`;

  if (Client.isLanguageHasModel(lang)) {
    console.log(Client.getModelCode(lang));
    const classification = await Client.checkClassification(text, Client.getModelCode(lang));
    const list = document.createElement("ul");
    for (const key in classification) {
      console.log(key);
      const { label } = classification[key];
      console.log(label);
      const li = document.createElement("li");
      li.textContent = label;
      list.appendChild(li);
    }
    const header = document.createElement("h3");
    header.textContent = "Text classification:";
    classDiv.appendChild(header);
    classDiv.appendChild(list);
    console.log(classification);
  } else {
    const myPara = document.createElement("p");
    myPara.textContent =
      "The above language does not have a classification model so it cannot be analyzed.";
    classDiv.appendChild(myPara);
    console.log("no model");
  }
};