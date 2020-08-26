import { checkClassification } from "./js/classChecker";
import { checkLanguage } from "./js/languageChacker";
import { handleSubmit } from "./js/formHandler";
import { getModelCode } from "./js/modelCode";
import { isLanguageHasModel } from "./js/languageModel";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/results.scss";

export { checkClassification, checkLanguage, isLanguageHasModel, getModelCode, handleSubmit };
