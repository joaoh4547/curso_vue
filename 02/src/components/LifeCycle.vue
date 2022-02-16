<template>
  <h1>Meu nome é {{ name }}</h1>
</template>

<script>
export default {
  name: "LyfeCycle",
  data() {
    return {
      name: "Nome",
    };
  },
  created() {
    setTimeout(() => {
      this.name = "João";
    }, 1000);
  },
  mounted() {
    setTimeout(() => {
      this.name = "Pedro";
    }, 2000);
  },
};
</script>
