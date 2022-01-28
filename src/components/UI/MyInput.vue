<template>
  <input class="input" :type="type" :value="value" @input="updateInput" />
</template>
<script>
export default {
  name: "MyInput",
  props: {
    type: String,
    modelValue: [String, Number],
    value: String,
  },
  methods: {
    updateInput(e) {
      // this.$emit("update:modelValue", e.target.value);
      this.$emit("update:value", e.target.value);
    },
  },
};
</script>
<style scoped>
.input {
  border: 1px solid teal;
  padding: 5px;
  margin-top: 10px;
}
</style>