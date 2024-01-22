<script >
    export default {
        data() {
            return {

            };
        },
        props: {
            mySingleCard: Object
        }

    }
</script>

<template>
    <div class="my-single-card">
        <div class="mb-2">
            <img
            :src="mySingleCard.card_images[0].image_url" 
            :alt="mySingleCard.name">
        </div>

        <div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    img {
        width: calc(100% / 5);
    }
</style>
