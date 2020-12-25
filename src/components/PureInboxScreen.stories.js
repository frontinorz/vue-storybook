import PureInboxScreen from './PureInboxScreen.vue';

import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import * as TaskListStories from './PureTaskList.stories';

Vue.use(Vuex);

// 對應 app 應用的 store 創建 module
const taskList = {
  namespaced: true,
  state: {
    tasks: TaskListStories.Default.args.tasks,
  },
  actions: {
    ARCHIVE_TASK(context, id) {
      action('archive-task')(id);
    },
    PIN_TASK(context, id) {
      action('pin-task')(id);
    },
  },
}

export const store = new Vuex.Store({
  modules: {
    taskList: taskList
  }
});

export default {
  title: 'tutorial/PureInboxScreen',
  component: PureInboxScreen,
  excludeStories: /.*store$/,
};

const Template = (args, { argTypes }) => ({
  components: { PureInboxScreen },
  props: Object.keys(argTypes),
  template: '<PureInboxScreen v-bind="$props" />',
  store,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };