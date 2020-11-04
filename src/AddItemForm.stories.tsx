import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {AddItemForm, AddItemFormPropsType} from './AddItemForm'
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/AddItemForm',
    component: AddItemForm,
    argTypes: {
        addItem: {
            description: 'callback that call when Add is clicked ',
            name: "CALLBACK"
        }
    },
} as Meta;

const Template: Story<AddItemFormPropsType> = (args) => <AddItemForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    addItem: action("Button inside form clicked")
};

