<template>
  <div id="app">
    <InboxScreen />
  </div>
</template>

<script>
import InboxScreen from './components/InboxScreen';
export default {
  name: 'app',
  components: {
    InboxScreen,
  },
};
</script>

<style lang="scss">
@import url('./scss/utils/_tutorial.scss');
</style>
