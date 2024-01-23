<script >
    import numberCard from './numberCard.vue';
    import SingleCard from './SingleCard.vue';
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store,
            };
        },
        methods: {
            // newArch(x) {
            //     this.store.singleArchetype = x;
            // },

            // onSelect() {
            //     console.log('this.store.singleArchetype: ', this.store.singleArchetype);
            // }
        },
        components: {
            numberCard,
            SingleCard
        }

    }
</script>

<template>
    <main>
        <!-- <div>
            {{ store.singleArchetype }}
        </div> -->

        <div>
            <!-- All'evento @change richiamo l'Api principale che stampa le cards in pagina tramite $emit -->
            <select @change="$emit('performSearch')" v-model="store.singleArchetype" class="mb-2">
                <option selected value="">Select Archetype</option>
                <option v-for="(archetype, i) in store.cardsArchetype" :value="archetype" :key="i">{{ archetype }}</option>
            </select>
        </div>
        <div class="card-container">

            <!-- <div id="number-card">
                Found {{store.cards.length}} Cards
            </div> -->

            <numberCard />
            
            <div class="row mt-3 text-center">

                <SingleCard
                class="mb-3"
                v-for="(card, i) in store.cards"
                :key="i"
                :mySingleCard="card"
                :archetype="card.archetype"/>

            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables.scss' as *;

    main {
        padding: 20px 60px;
        background-color: $main-bg-color;

        div>select {
            width: 200px;
            height: 40px;
            
        }

        .card-container {
            background-color: white;
            padding: 20px;

            // #number-card {
            //     width: 100%;
            //     padding: 10px;
            //     height: 50px;
            //     background-color: black;
            //     color: white;
            // }
        }
    }

</style>
