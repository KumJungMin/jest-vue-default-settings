// import mount from Vue Test Utils
import { mount } from "@vue/test-utils";

// the component to test
const MessageComponent = {
  template: "<p>{{ msg }}</p>",
  props: ["msg"],
};

test("displays message", () => {
  const wrapper = mount(MessageComponent, {
    propsData: {
      msg: "Hello world",
    },
  });
  expect(wrapper.text()).toContain("Hello world");
});
