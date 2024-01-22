<script >
    import SingleCard from './SingleCard.vue';
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store
            };
        },
        components: {
            SingleCard
        }

    }
</script>

<template>
    <main>
        <div>
            <select class="mb-2" id="inputGroupSelect01">
                <option selected value="Alien">Alien</option>
            </select>
        </div>
        <div class="card-container">
            <div id="number-card">
                Found {{store.cards.length}} Cards
            </div>
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

    main {
        padding: 20px 60px;
        background-color: #D48F39;

        div>select {
            width: 100px;
            
        }

        .card-container {
            background-color: white;
            padding: 20px;

            #number-card {
                width: 100%;
                padding: 10px;
                height: 50px;
                background-color: black;
                color: white;
            }
        }
    }

</style>
