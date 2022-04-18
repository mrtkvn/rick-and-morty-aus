<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'


const route = useRoute();
const router = useRouter();

const page: number = route.params.slug ? Number(route.params.slug[0]) : 1;
let info: any = "";
const cardList: any = list();

const { pending, data: listData } = await useFetch(`/api/rick-and-morty/character`, { params: { page: page } });

setData(listData.value)

function setData(data) {

  cardList.value = data.results;
  info = data.info;
}

function goBack() {
  router.push('/');
}

</script>


<template>
  <div>
    <div v-if="pending" class="info">
      Loading ...
    </div>
    <div v-else class="container">
      <div v-for="character in cardList" :key="character.id">
        <CharacterCard :item="character" />
      </div>
    </div>
    <div v-if="!cardList" class="info">

      No Data found
      <br>
      <button @click="goBack()">Go Back</button>
    </div>
    <KeepAlive v-if="cardList">
      <BasePaging :page="page" :info="info" />
    </KeepAlive>
   
  </div>

</template>



<style lang="scss" scoped>
.info {
  text-align: center;
}

.container {
  max-width: 1024px;
  display: grid;
  justify-content: space-evenly;
  margin: 0 auto;
  grid-gap: 1rem;
}

@media (min-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>