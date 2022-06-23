<template>
  <Suspense>
    <template #default>
      <div class="wholecontainer">
        <br />
        <br />
        <q-btn
          style="background: #ff0080; color: white"
          label="New Transaction"
          @click="newTransaction"
        />
        <br />
        <br />
        <div
          class="cardContainer boxe"
          v-for="(block, index) in blockchain._chain"
          :key="index"
        >
          <DashbordChild
            :transaction-data="block._body"
            :height="block._height"
            :block="block"
          />
          <br />
        </div>
      </div>
    </template>
    <template #fallback>
      <h3>Loading</h3>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { IBlockchain } from "./dashboard/models/Block";
import axios from "axios";
import dashboardController from "./newBlock/dashboard";
import DashbordChild from "./dashboard/dashbordChild.vue";
import router from "../plugins/router/index";

await dashboardController.loadInfo();

//const response = await axios.get("http://localhost:3000/blockchain");
const blockchain: IBlockchain = dashboardController.$blockchain;

console.log("%c⧭", "color: #aa00ff", blockchain);
/*blockchain._chain = blockchain._chain.map((e) => {
  return {
    _hash: e._hash,
    _height: e._height,
    _previousBlockHash: e._previousBlockHash ?? "GENESIS",
    _time: e._time,
    _body: {
      data: {
        p_block: {
          from: e._body.data.p_block.from ?? "GENESIS",
          to: e._body.data.p_block.to ?? "genesis",
          amount: e._body.data.p_block.amount ?? "GENESIS",
          cardDebited: e._body.data.p_block.cardDebited ?? "genesis",
          accountNumberTo: e._body.data.p_block.accountNumberTo ?? "asdsad",
        },
      },
    },
  };
});*/

const newTransaction = () => {
  router.push("/newblock");
};
console.log("%c⧭", "color: #00a3cc", blockchain);
//blockchain._chain.filter((e) => e._body.from != null && e._body.to != null);
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

.wholecontainer {
  background-image: radial-gradient(
    circle,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  height: 100vh;
  width: 100vw;
  margin-top: -60px;
}
.boxe:before {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(-207deg, #03e5b7 73%, #037ade 200%);
  transform: translate3d(47px, 19px, 0) scale(0.95);
  filter: blur(58px);
  opacity: var(1);
  transition: opacity 0.3s;
  border-radius: inherit;
}

.boxe::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  border-radius: inherit;
}
</style>
