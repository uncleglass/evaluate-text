const checkClassification = async (text, modelCode) => {
  const response = await fetch("/class", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ data: text, model: modelCode }),
  });

  try {
    const newData = await response.json();
    const category = newData.category_list;
    return category;
  } catch (error) {
    console.log("error", error);
  }
};
