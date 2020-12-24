import Task from './Task';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Tutorial/Task',
  component: Task,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    state: {
      control: {
        type: 'inline-radio',
        options: ['Task_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'],
      },
    },
    updatedAt: { control: 'date' }
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "Task_INBOX",
  updatedAt: new Date(2019, 0, 1, 9, 0)
};

const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: `
  <Task 
    :task="$props" 
    @pin-task="onPinTask" 
    @archive-task="onArchiveTask" 
  />`,
});

export const Default = Template.bind({});
Default.args = taskData

export const Pinned = Template.bind({});
Pinned.args = {
  ...taskData,
  state: 'TASK_PINNED',
};

export const Archived = Template.bind({});
Archived.args = {
  ...taskData,
  state: 'TASK_ARCHIVED',
};