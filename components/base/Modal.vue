<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClose } from '@fortawesome/free-solid-svg-icons'

library.add(faClose);

defineProps({
    show: Boolean
})
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <a class="modal-default-button" @click="$emit('close')">
                         <font-awesome-icon icon="close" />
                        </a>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                </div>
            </div>
        </div>
    </Transition>

</template>



<style lang="scss" scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {    
     margin: 0px auto;
     padding: 20px 30px;
    
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
    max-width: 640px;
    width: 100%;
    display: block;
    flex-direction: row;
    border-radius: 25px;
    position: relative;
    transition: all 0.3s ease;

}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
    cursor: pointer;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>