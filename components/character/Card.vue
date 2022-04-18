<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faPhone, faPerson, faSkull, faMars, faVenus, faHeart, faQuestion, faPaw } from '@fortawesome/free-solid-svg-icons'
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons'

import type { PropType } from 'vue'
import { ref } from 'vue'


import Character from "~/server/data/character"


library.add(faSpinner, faPhone, faPerson, faRedditAlien, faMars, faVenus, faHeart, faQuestion, faSkull, faPaw);

const props = defineProps({
    item: Object as PropType<Character>,
})

const checkSpecies = (species: string) => {
    switch (species) {
        case "Human":
            return "person";
        case "Alien":
            return ['fab', 'reddit-alien'];
        case "Animal":
            return "paw";

        default:
            return "question"
    }
}

const checkStatus = (status: string) => {
    switch (status) {
        case "Alive":
            return "heart";
        case "Dead":
            return "skull";
        default:
            return "question"
    }
}

const color = (status: string) => {
    switch (status) {
        case "Alive":
            return "green";
        case "Dead":
            return "red";
        default:
            return "yellow"
    }
}

const character = reactive({
    species: checkSpecies(props.item?.species),
    status: checkStatus(props.item?.status),
    gender: props.item?.gender === "Female" ? "venus" : "mars",
})

const info = ref('');
const showModal = ref(false);
const charId = useState('charId');

function showInfo(value) {
    info.value = value;
}

function openModal() {

    charId.value = props.item.id;
    showModal.value = true;
}

</script>

<template>



    <div class="card-wrapper" @click="openModal()">

        <div class="card">

            <div class="card-image">
                <img :src="item.image" alt="profile one">
            </div>

            <ul class="social-icons">
                <li @mouseover="showInfo(props.item?.gender)">
                    <a>
                        <font-awesome-icon :icon="character.gender" />
                    </a>
                </li>
                <li @mouseover="showInfo(props.item?.species)">
                    <a>
                        <font-awesome-icon :icon="character.species" />
                    </a>
                </li>
                <li @mouseover="showInfo(props.item?.status)">
                    <a :class="color(props.item?.status)">
                        <font-awesome-icon :icon="character.status" />
                    </a>
                </li>
            </ul>

            <div class="details">
                <h2>{{ item.name }}
                    <br>
                    <span class="job-title">
                        {{ info }}
                    </span>
                </h2>
            </div>
        </div>
    </div>    
    <BaseModal :show="showModal" @close="showModal = false">
        <template #body>
            <CharacterDetail :id="Number(charId)" />
        </template>
    </BaseModal>

</template>


<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: #333;
}



.card-wrapper {
    width: 320px;
    height: 320px;
    position: relative;
}

.card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    overflow: hidden;
    border: 0.15em solid black;
    cursor: pointer;
    transition: 0.5s;

    .card-image {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: #000;
        transition: .5s;
    }

    &:hover img {
        opacity: 0.2;
        transition: .5s;
    }
}

.card:hover .card-image {
    transform: translateY(-100px);
    transition: all .9s;
}

.social-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;

    li {
        list-style: none;

        a {
            position: relative;
            display: block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: #fff;
            font-size: 23px;
            color: #555;
            font-weight: bold;
            margin: 0 6px;
            transition: .4s;
            transform: translateY(200px);
            opacity: 0;
        }
    }
}

.card:hover .social-icons li a {
    transform: translateY(0px);
    opacity: 1;
}

.social-icons li a:hover {
    background: #62a4ab;
    transition: .1s;

    .fab {
        color: #fff;
    }
}

.social-icons li a .fab {
    transition: .8s;

    &:hover {
        transform: rotateY(360deg);
        color: #fff;
    }
}

.card:hover li:nth-child(1) a {
    transition-delay: 0.1s;
}

.card:hover li:nth-child(2) a {
    transition-delay: 0.2s;
}

.card:hover li:nth-child(3) a {
    transition-delay: 0.3s;
}

.card:hover li:nth-child(4) a {
    transition-delay: 0.4s;
}


.details {
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 120px;
    z-index: 1;
    padding: 10px;

    h2 {
        margin: 30px 0;
        padding: 0;
        text-align: center;

        .job-title {
            font-size: 1rem;
            line-height: 2.5rem;
            color: #333;
            font-weight: 300;
        }
    }
}

.jane {
    position: absolute;
    bottom: -120px;
    left: 0;
    opacity: 0;
    background: #fff;
    width: 100%;
    height: 120px;
    z-index: 3;
    padding: 10px;
    transition: .4s;
}

.profile-two .social-icons li a {
    border-radius: 50%;
}

.card:hover .profile-img--two {
    transform: rotateY(180deg);
}

.card:hover .jane {
    bottom: 0;
    left: 0;
    transition-delay: 0.5s;
    opacity: 1;
}

.green {
    color: #008000 !important;
}

.red {
    color: #ff0000 !important;
}

.yellow {
    color: #ffa500 !important;
}
</style>