<template>
  <div
    class="page__title"
    :style="style"
    :class="classes"
  >
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Page title',
    },
    borderColor: {
      type: String,
      default: '#aaa',
    },
    level: {
      type: String,
      default: 'primary',
      validator: (value) => {
        ['primary', 'secondary'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        'page__title-primary': this.level == 'primary',
        'page__title-secondary': this.level == 'secondary',
      };
    },
    style() {
      return {
        borderColor: this.borderColor,
      };
    },
  },
};
</script>

<style lang="scss">
@import './scss/title';
</style>