<template>
  <q-badge></q-badge>
  <div class="info-cnt">
    <div
      class="text-h6"
      style="color: #049dd9; text-align: start; margin-left: 10px"
    >
      {{ props.height }}

      <br />
      <q-markup-table
        flat
        separator="none"
        style="max-width: 800px; margin-left: 25px"
      >
        <tbody>
          <tr>
            <td>From</td>
            <td>
              {{ block._body.from }}
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              {{ block._body.to }}
            </td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>
              {{ block._body.amount }}
            </td>
          </tr>
          <tr>
            <td>HASH</td>
            <td>{{ block._hash }}</td>
          </tr>
          <tr>
            <td>PREV HASH</td>
            <td>
              {{ block._previousBlockHash ?? "IS GENESIS BLOCK" }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ITransaction } from "./models/Block";
const props = defineProps<{
  transactionData: ITransaction;
  height: number;
  block: any;
}>();
</script>

<style></style>
