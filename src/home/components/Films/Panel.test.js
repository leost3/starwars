import { shallow, mount, render } from "enzyme";
import Panel from "./Panel.component";
import React from "react";

it("expect to render Card component", () => {
  expect(shallow(<Panel />)).toMatchSnapshot();
});
