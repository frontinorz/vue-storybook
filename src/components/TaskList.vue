<template>
  <div>
    <PureTaskList
      :tasks="tasks"
      @archive-task="ARCHIVE_TASK"
      @pin-task="PIN_TASK"
    />
  </div>
</template>

<script>
import PureTaskList from './PureTaskList';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TaskList',
  components: { PureTaskList },
  computed: {
    ...mapState('taskList', ['tasks']),
  },
  methods: {
    ...mapActions('taskList', ['ARCHIVE_TASK', 'PIN_TASK']),
  },
};
</script>