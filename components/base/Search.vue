<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

library.add(faSearch);

const searchText = ref('');
const router = useRouter()

async function searchCharacter() {

    if (searchText.value === "") {
        router.push('/')
    } else {
        const { pending, data: listData, error } = await useFetch(`/api/rick-and-morty/character`, { params: { name: searchText.value } });


        const wait = waiting();
        wait.value = pending;

        if (error.value) {
            setData([])
        }

        setData(listData.value)

        function setData(data) {
            const cardList = list();
            cardList.value = data.results;
        }
    }

}



</script>

<template>
    <div class="search">
        <form @submit.prevent="searchCharacter">
            <button type="submit">
                <font-awesome-icon icon="search" />
            </button>
            <input type="text" v-model="searchText" placeholder="Search name and surname" />
        </form>
    </div>
</template>



<style lang="scss" scoped>
.search {
    display: inline-block;
    float: right;
}
</style>