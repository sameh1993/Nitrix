<template>
  <div class="home">
    <!-- start header section -->
    <header>
      <!-- start choose demo -->
      <choose-demo></choose-demo>
    </header>
    <!-- end header section -->
  </div>
</template>


<script>
import ChooseDemo from "@/components/home/chooseDemo.vue";

export default {
  components: {
    ChooseDemo,
  },
};
</script>
