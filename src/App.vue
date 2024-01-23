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
        // Creo una Funzione per la chiamata all' API principlae
        getApiResults () {
            // Uso Axios per richiamare l'API
            axios
            .get(this.store.baseUrl)
            .then((response) => {
                console.log(response);
                this.store.cards = response.data.data;
                console.log(this.store.cards);

                setTimeout(() => {
                    this.store.loaded = false;
                }, 1000)
            })
            .catch((error) => {
                this.store.cards = [];
            })
            .finally(() => {
                console.log('Questo console.log viene eseguito sempre alla fine della chiamata API');
            });
        },
        // Creo una funzione per la chiamata all'API degli Archetype
        getArchetypeResult () {
            axios
            .get(this.store.secondaryUrl)
            .then((response) => {
                console.log(response);
                this.store.cardsArchetype = response.data;
                console.log(this.store.cardsArchetype);
            })
        }
    },
    // Nell ciclo di vita 'created()' richiamo l'API
    created() {
        this.getApiResults();
        this.getArchetypeResult();
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
