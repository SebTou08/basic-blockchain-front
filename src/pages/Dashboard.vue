<template>
  <Suspense>
    <template #default>
      <div class="cardContainer" v-for="(block, index) in blockchain._chain" :key="index">
        <q-badge></q-badge>
        <div class="info-cnt">
          <div
            class="text-h6"
            style="color: #049dd9; text-align: start; margin-left: 10px"
          >
           {{block._time}}

            <br />
            <q-markup-table
              flat
              separator="none"
              style="max-width: 400px; margin-left: 25px"
            >
              <tbody>
              <tr>
                <td>Hash</td>
                <td>{{ block._hash }}</td>
              </tr>
              <tr>
                <td>Prev. hash</td>
                <td>{{ block._previousBlockHash }}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{{ block._height }}</td>
              </tr>
              <tr>
                <td>Body</td>
                <td>{{ block._body }}</td>
              </tr>
              </tbody>
            </q-markup-table>
          </div>
        </div>
        <div class="actio">
          <q-card-actions
            align="between"
            vertical
            class="actions-cnt"
            style="height: 200px"
          >
            <div>
              <q-btn flat round @click="removeCollaborator">
                <q-icon name="close" style="color: #605f5f; font-size: 1.4em"
                /></q-btn>
            </div>
            <div>
              <q-btn flat round @click="editCollaborator">
                <q-icon
                  name="mdi-pencil-outline"
                  style="color: #049dd9; font-size: 1.4em"
                /></q-btn>
            </div>
          </q-card-actions>
        </div>
      </div>
    </template>

    <template #fallback>
      <h4>cargando</h4>
    </template>
  </Suspense>

</template>

<script setup lang="ts">
import {IBlockchain} from "./dashboard/models/Block";
import axios from "axios";


const response = await axios.get('http://localhost:3000/blockchain');
const blockchain: IBlockchain = response.data;
console.log("-> blockchain", blockchain);

</script>

<style scoped>
.cardContainer {
  display: flex !important;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
  0 15px 40px rgba(166, 173, 201, 0.2);
  padding: 40px;
  background: #fff;
  border-radius: 20px;
  max-width: 70vw;
  margin: 10px auto;
}
.info-cnt {
  flex-grow: 10 !important;
}
.actions-cnt {
  flex-grow: 1;
  justify-content: space-between;
}
</style>