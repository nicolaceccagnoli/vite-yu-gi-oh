import { reactive } from 'vue';

export const store = reactive({
    // API Principale
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0',
    // Creo un Array vuoto dove andrò ad inserire le carte chiamate con l'API
    cards: [],
    // Creo una flag per il Loader
    loaded: true,
    // API degli Archetype
    secondaryUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    // Creo un secondo Array per gli Archetype
    cardsArchetype: [],
    // Creo una variabile con una stringa vuota che corrisponderà al singolo Archetype
    singleArchetype: ''
})
