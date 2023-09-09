// YourComponent.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './index.vue';

const meta: Meta<typeof Button> = {
  component: Button,
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<YourComponent v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};