<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Loader from './components/Loader.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppHeader,
        AppMain,
        Loader
    },

    methods: {

    },
    created() {
        
    },
    // Nell ciclo di vita 'created()' richiamo l'API
    mounted() {
        // Uso Axios per richiamare l'API
        axios
        .get(this.store.baseUrl)
        .then((response) => {
            console.log(response);
            this.store.cards = response.data.data;
            console.log(this.store.cards);

            setTimeout(() => {
                this.store.loaded = false;
            }, 3000)
        });
    }

}
</script>

<template>

    <AppHeader />

    <Loader v-if="store.loaded" />

    <AppMain v-if="!store.loaded" />

</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
