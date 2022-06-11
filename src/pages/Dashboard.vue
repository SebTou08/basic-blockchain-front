<template>
  <div>
    <div
      class="cardContainer"
      v-for="(block, index) in blockchain._chain"
      :key="index"
    >
      <q-badge></q-badge>
      <div class="info-cnt">
        <div
          class="text-h6"
          style="color: #049dd9; text-align: start; margin-left: 10px"
        >
          {{ block._height }}

          <br />
          <q-markup-table
            flat
            separator="none"
            style="max-width: 800px; margin-left: 25px"
          >
            <tbody>
              <tr>
                <td>From</td>
                <td>{{ block._body.from ?? "IS GENESIS BLOCK" }}</td>
              </tr>
              <tr>
                <td>To</td>
                <td>{{ block._body.to ?? "IS GENESIS BLOCK" }}</td>
              </tr>
              <tr>
                <td>Amount</td>
                <td>{{ block._body.amount ?? "IS GENESIS BLOCK" }}</td>
              </tr>
              <tr>
                <td>HASH</td>
                <td>{{ block._hash }}</td>
              </tr>
              <tr>
                <td>PREV HASH</td>
                <td>{{ block._previousBlockHash ?? "IS GENESIS BLOCK" }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IBlockchain } from "./dashboard/models/Block";
import axios from "axios";

const response = await axios.get("http://localhost:3000/blockchain");
const blockchain: IBlockchain = response.data;
blockchain._chain.filter((e) => e._body.from != null && e._body.to != null);
</script>

<style scoped>
.cardContainer {
  display: flex !important;
  box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7);
  padding: 40px;
  background: #fff;
  border-radius: 20px;
  max-width: 70vw;
  margin: 10px auto;
}
.cardContainer:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px 2px rgba(0, 255, 255, 0.7);
}
.info-cnt {
  flex-grow: 10 !important;
}
.actions-cnt {
  flex-grow: 1;
  justify-content: space-between;
}
</style>
