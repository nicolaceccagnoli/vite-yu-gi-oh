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
        performArchSearch () {
            // Creo una condizione che verifica la lunghezza della Stringa che contiene il tipo di Archetype 
            if (this.store.singleArchetype.length == 0) {
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
                }
            else {
                // Uso Axios per richiamare l'API
                axios
                .get(this.store.baseUrl
                ,{
                    params: {
                        archetype: this.store.singleArchetype
                    }
                })
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
            }
        },
        // Creo una funzione per la chiamata all'API degli Archetype
        getArchetypeResult () {
            // Uso Axios per richiamare l'API
            axios
            .get(this.store.secondaryUrl)
            .then((response) => {
                console.log(response);
                // Creo un ciclo che riempa l'Array vuoto che ho creato con i vari Archetypes 
                for (let i = 0; i < response.data.length; i++) {
                    this.store.cardsArchetype.push(response.data[i].archetype_name)
                }
            })
        },
    },
    // Nell ciclo di vita 'created()' richiamo entrambe le API
    created() {
        this.performArchSearch();
        this.getArchetypeResult();
    }

}
</script>

<template>

    <AppHeader />

    <Loader v-if="store.loaded" />

    <!-- Tramite $emit richiamo la chiamata dell'Api principale che stampa le cards in pagina-->
    <AppMain v-if="!store.loaded" @performSearch="performArchSearch()"/>

</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
