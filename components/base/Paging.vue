
<script setup lang="ts">
import {  reactive} from 'vue'

const props = defineProps({ page: Number, info: { type: Object } })

function paginate(arr, size) {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        let page = acc[idx] || (acc[idx] = [])
        page.push({ page: val + 1, id: idx })

        return acc
    }, [])
}


const state = reactive({ pagination: [] })

state.pagination = loadPages();

function loadPages() {
    const pageArray = Array.from(Array(props.info.pages).keys())
    const tt = paginate(pageArray, 7);

    let currentGroup = 0;
    tt.map((item) => {
        item.map((pp) => {
            if (pp.page === props.page) {
                currentGroup = pp.id;
            }

        })
    })

    return tt[currentGroup];
}

function lastPage(list: Array<any>) {
    if (list) {
        return list[list.length - 1].page + 1;
    } else {
        return props.page;
    }
}

function firstPage(list: Array<any>) {
    if (list) {
        return list[0].page - 1;
    } else {
        return props.page;
    }
}

</script>

<template>
    <div class="center">        
        <div class="pagination">
            
            <NuxtLink v-if="firstPage(state.pagination)!==0" :to="`/characters/${firstPage(state.pagination)}`">&laquo;</NuxtLink>
            <NuxtLink v-for="(item, index) in state.pagination" :key="index" :to="`/characters/${item.page}`"
                :class="{ active: page === item.page }">
                {{ item.page }}
            </NuxtLink>
            <NuxtLink :to="`/characters/${lastPage(state.pagination)}`">&raquo;</NuxtLink>
            
        </div>
    </div>
</template>



<style lang="scss" scoped>

.center {
  text-align: center;
}
.pagination {
  display: inline-block;
}

.pagination a {
     color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 0.15em solid black;
  margin: 0 4px;
}

.pagination a.active {
  background-color: #62a4ab;
  color: white;
  border: 1px solid #44281D;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>