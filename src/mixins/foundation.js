export function mounted() {
  // eslint-disable-next-line
  $(this.$el).foundation();
}
export function destroyed() {
  // eslint-disable-next-line
  $(this.$el).foundation.destroy();
}
