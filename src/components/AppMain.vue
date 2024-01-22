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
            <select id="inputGroupSelect01">
                <option selected value="Alien">Alien</option>
            </select>
        </div>
        <div class="card-container">
            <div id="card-info">
                Found X Cards
            </div>
            <div class="row mt-3 text-center">

                <SingleCard
                class="mb-3"
                v-for="(card, i) in store.cards"
                :key="i"
                :mySingleCard="card"/>

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
            max-width: 1600px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;

            #card-info {
                width: 100%;
                padding: 10px;
                height: 50px;
                background-color: black;
                color: white;
            }
        }
    }

</style>
