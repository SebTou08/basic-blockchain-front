<template>
  <vue-paycard :value-fields="valueFields" />
</template>

<script setup lang="ts">
import { VuePaycard } from "vue-paycard";
const valueFields = {
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
};
</script>
