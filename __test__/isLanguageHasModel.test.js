import { isLanguageHasModel } from "../src/client/js/languageModel";

describe("Testing the checking whether language has a model code or not", () => {
    test("Testing the isLanguageHasModel() function", () => {
      expect(isLanguageHasModel("English")).toBeTruthy();
      expect(isLanguageHasModel("Polish")).toBeFalsy();
    });
  });