<script >
    export default {
        data() {
            return {

            };
        },
        props: {
            mySingleCard: Object,

            archetype: {
                type: String,
                default: '[TIPO DI MOSTRO]'
            }
            
        }

    }
</script>

<template>
    <div class="my-single-card">
        <div class="mb-2 w-100">
            <img
            :src="mySingleCard.card_images[0].image_url" 
            :alt="mySingleCard.name">

            <div class="card-info p-5">
                <div class="text-white">
                    {{ mySingleCard.name }}
                </div>
                
                <div class="mt-3">
                    {{ archetype }}
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/mixins' as *;

    .my-single-card {
        @include single-card;

        img {
            width: 100%;
        }

        .card-info {
            height: 200px;
        }

    }
</style>
