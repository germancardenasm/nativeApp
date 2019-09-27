import React from "react";
import renderer from "react-test-renderer";

import InputField from "./InputField";

describe("<InputField />", () => {
  it("has 2 children", () => {
    const tree = renderer.create(<InputField />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});
