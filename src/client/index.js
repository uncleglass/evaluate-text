import { checkClassification } from "./js/classChecker";
import { checkLanguage, isLanguageHasModel, getModelCode } from "./js/languageChacker";
import { handleSubmit } from "./js/formHandler";


import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/results.scss";

export { checkClassification, checkLanguage, isLanguageHasModel, getModelCode, handleSubmit };
