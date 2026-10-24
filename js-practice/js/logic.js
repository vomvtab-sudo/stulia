"use strict";

export function applyFilter(products, filter){

    if (filter == 'all' || !filter){

        return products;

    }

    return products.filter(product => product.category === filter);

}

export function applySearch(products, query){

    if (!query || !query.trim()){

        return products;

    }

    const normQuery = query.trim().toLowerCase();

    return products.filter(product => product.name.toLowerCase().includes(normQuery));

}

export function applySort(products, sortBy){

    const sorted = [...products];

    switch (sortBy) {

        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;

        case 'name-asc':
            sorted.sort((a, b) => a.name > b.name || a.name < b.name);
            break;

        case 'default':

        default: 
            return sorted;

    }

    return sorted;

}

export function getVisibleProducts(state){

    let result = state.products;

    result = applySearch(result, state.searchQuery);

    result = applyFilter(result, state.filter);

    result = applySort(result, state.sortBy);

    return result;

}