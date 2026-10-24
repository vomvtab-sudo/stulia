"use strict";

async function fetchProducts(){

    const url = 'https://dummyjson.com/products?limit=20';

    try {

        const response = await fetch(url);

        if (!response.ok) {

            const err = await response.json().catch(() => ({}));
            const message = err.message;
            throw new Error(message);

        }

        const data = await response.json();

        const products = data.products.map(product => {

            const apiCategory = product.category.toLowerCase();
            let category; 

            if (apiCategory.includes('furniture') || apiCategory.includes('home')) { 

                category = 'chairs'; 

            } else if (apiCategory.includes('laptop')) { 

                category = 'tables'; 

            } else { 

                category = 'sofas'; 

            } 

            return { 

                id: product.id, 
                name: product.title, 
                price: product.price, 
                category, 
                discount: Math.round(product.discountPercentage || 0) 

            }; 

        });

        return products;

    } catch (error) {

        console.error('Error: ', error);
        throw error;

    }

}

export {fetchProducts};
