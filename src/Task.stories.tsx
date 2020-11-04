import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {AddItemForm, AddItemFormPropsType} from './AddItemForm'
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";

export default {
    title: 'TODOLIST/Task',
    component: Task
} as Meta;


const removeCallback=action("Remove callback ")
const changeStatusCallback=action("status callback ")
const changeTitleCallback=action("title callback ")

const Template: Story<TaskPropsType> = (args) => <Task {...args}/>

const baseArgs = {
    changeTaskStatus: changeStatusCallback,
    changeTaskTitle: changeTitleCallback,
    removeTask: removeCallback,
}

export const IsNotCompletedTask = Template.bind({});
IsNotCompletedTask.args = {
    todolistId: "todolistId1",
    ...baseArgs,
    task: {id:'1', isDone: false, title: 'CSS'}
};
export const CompletedTask = Template.bind({});
CompletedTask.args = {
    todolistId: "todolistId1",
    ...baseArgs,
    task: {id:'1', isDone: true, title: 'JS'}
};

