<script >
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store
            };
        },
        computed: {
            len() {
                return this.store.cards.length;
            }
        }
    }
</script>

<template>

    <div id="number-card">
        Found {{ len }} Cards
    </div>

</template>

<style lang="scss" scoped>

#number-card {
    width: 100%;
    padding: 10px;
    height: 50px;
    background-color: black;
    color: white;
}

</style>
