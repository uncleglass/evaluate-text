import { getModelCode } from "../src/client/js/modelCode";

describe("Testing the getting model code", () => {
  test("Testing the getModelCode() function", () => {
    expect(getModelCode("English")).toBe("IPTC_en");
    expect(getModelCode("Polish")).toBeUndefined();
    expect(getModelCode).toBeDefined();
  });
});
