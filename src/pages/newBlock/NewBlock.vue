<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <h6>Create New Block</h6>
      <div class="cardContainer boxx">
        <q-input
          rounded
          standout
          v-model="blockData.from"
          label="From"
          :rules="[(val) => !!val || 'From  is required']"
        />
        <br />
        <q-input
          rounded
          standout
          v-model="blockData.to"
          label="To"
          :rules="[(val) => !!val || 'To is required']"
        />
        <br />
        <q-input
          filled
          v-model="blockData.amount"
          label="Price with 2 decimals"
          mask="#.##"
          fill-mask="0"
          reverse-fill-mask
          prefix="$"
          input-class="text-right"
          :rules="[(val) => val > 0 || 'Field is required']"
        />
        <br />
        <q-input
          filled
          v-model="blockData.cardDebited"
          label="Card"
          mask="#### #### #### ####"
          fill-mask="#"
        />
        <br />
        <q-input
          filled
          v-model="blockData.accountNumberTo"
          label="CCI destination"
          mask="### ### ########### ##"
          fill-mask="#"
        />
        <br />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import newBlockController, { INewBlock } from "./newBlock";

const blockData: INewBlock = reactive({
  from: "",
  to: "",
  amount: undefined,
  cardDebited: undefined,
  accountNumberTo: undefined,
});
const onSubmit = () => {
  newBlockController.createNewBlock(blockData);
};
</script>

<style scoped>
.cardContainer {
  display: flexbox !important;
  box-shadow: 0px 5px 10px 0px rgba(0, 68, 255, 0.7);
  padding: 40px;
  background: #fff;
  border-radius: 20px;
  gap: 15px;
  max-width: 70vw;
  min-width: 50vw;
  margin: 10px auto;
  margin-left: 100%;
}

.cardContainer:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgb(0, 24, 134);
}
</style>
