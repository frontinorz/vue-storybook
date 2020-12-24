<template>
  <div id="app">
    <TaskList />
  </div>
</template>

<script>
import TaskList from './components/TaskList';
export default {
  name: 'app',
  components: {
    TaskList,
  },
};
</script>

<style lang="scss">
@import url('./scss/utils/_tutorial.scss');
</style>
