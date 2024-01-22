<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },

    methods: {

    },
    created() {
        axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((response) => {
            console.log(response.data.data)
        });
    }

}
</script>

<template>

    <AppHeader />

    <AppMain />

    <AppFooter />

</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
