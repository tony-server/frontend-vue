<template>
  <div class="about">
    <h1>This is an about 仪表盘</h1>
    <main-nav></main-nav>
  </div>

</template>

<script>
// @ is an alias to /src
import MainNav from "@/components/MainNav.vue";

export default {
  name: "dashboard",
  components: {
    MainNav
  }
};
</script>
