<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
    },

    methods: {

    },
    // Nell ciclo di vita 'created()' richiamo l'API
    created() {
        // Uso Axios per richiamare l'API
        axios
        .get(this.store.baseUrl)
        .then((response) => {
            console.log(response);
            this.store.cards = response.data.data;
            console.log(this.store.cards);
        });
    }

}
</script>

<template>

    <AppHeader />

    <AppMain />

</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
