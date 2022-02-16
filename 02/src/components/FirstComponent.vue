<template>
  <div>
    <h1></h1>
    <p>Meu Nome é {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data() {
    return {
      name: "João",
    };
  },
};
</script>
