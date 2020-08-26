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
