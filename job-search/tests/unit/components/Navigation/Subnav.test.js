import { mount } from "@vue/test-utils";

import Subnav from "@/components/Navigation/Subnav.vue";

describe("Subnav", () => {
  const createConfig = (routeName) => ({
    // global settings of the component
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      }, // keys or properties in stub object represents the components that we want to stub out to replace whenever test utils mounts a sub component then provide a value since stub is an object and set to true --boolean set up if we have multiple different components being rendered or replace
    },
  });

  describe("when user is on the job page", () => {
    it("display job count", () => {
      const wrapper = mount(Subnav, createConfig("JobResults"));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on the job page", () => {
    it("does NOT display the job count", () => {
      const wrapper = mount(Subnav, createConfig("Home"));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
