
<script setup lang="ts">

const props = defineProps({ id: Number })
const { pending, data: itemData, error } = await useFetch(`/api/rick-and-morty/character`, { params: { detail: props.id }, lazy: true });
const show = ref(false);

</script>

<template>
    <div>
        <div v-if="pending" class="info">
            Loading ...
        </div>
        <div v-else class="card">

            <div class="img-avatar">
                <img :src="itemData.image" alt="profile one">
            </div>
            <div class="card-text">
                <div class="portada">

                </div>
                <div class="title-total">
                    <div class="title">{{ itemData.status }}</div>
                    <h2> {{ itemData.name }}</h2>
                    <div class="desc">
                        {{ itemData.location.name }}
                    </div>
                    <div class="actions">


                        <button>{{ itemData.species }}</button>
                        <button>{{ itemData.gender }}</button>
                        <button>{{ itemData.type }}</button>

                    </div>
                    <button type="button" @click="show = !show" class="collapsible">Episodes</button>
                    <Transition v-if="show">
                    <div class="collContainer">


                        <div class="content">

                            <p v-for="(epi, index) in itemData.episode" :key="index">
                                {{ epi }}
                            </p>

                        </div>

                    </div>
                    </Transition>
                </div>

            </div>




        </div>

    </div>
</template>


<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}


.collContainer {
    height: 300px;
    overflow-x: auto;
}

.card {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
    max-width: 640px;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    position: relative;
    height: 600px;
}

.card h2 {
    margin: 0;
    padding: 0 1rem;
}

.card .title {
    padding: 1rem;
    text-align: right;
    color: green;
    font-weight: bold;
    font-size: 12px;
}

.card .desc {
    padding: 0.5rem 1rem;
    font-size: 12px;
}

.card .actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0.5rem 1rem;
}

.card img {
    width: 85px;
    height: 85px;
    margin: 0 auto;
    border-radius: 50%;
}

.img-avatar {
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 50%;
    border: 6px solid white;
    background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
    top: 15px;
    left: 15%;
}

.card-text {
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.title-total {
    padding: 2.5em 1.5em 1.5em 1.5em;
}

path {
    fill: white;
}

.img-portada {
    width: 100%;
}

.portada {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: url("/img/portal.png");
    background-position: bottom center;
    background-size: cover;
}

button {
    border: none;
    background: none;
    font-size: 24px;
    color: #8bc34a;
    cursor: pointer;


}
</style>