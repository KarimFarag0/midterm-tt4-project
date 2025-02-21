import './index.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";
import lighter from  "/assets/images/pexels-eprism-studio-108171-335257.jpg";
import store from "/assets/images/pexels-gb-the-green-brand-1259697174-30824499.jpg";
import merch from "/assets/images/pexels-gb-the-green-brand-1259697174-30824656.jpg";
import mini_zippers from "/assets/images/pexels-gb-the-green-brand-1259697174-30824657.jpg";
import sd_card from "/assets/images/pexels-jibarofoto-1738641.jpg";
import gel from "/assets/images/pexels-laryssa-suaid-798122-1667088.jpg";
import canon from "/assets/images/pexels-madebymath-90946.jpg";
import lens from "/assets/images/pexels-pixabay-279906.jpg";
import guitar_pick from "/assets/images/pexels-rombo-1510555-3801990.jpg";



document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Fujfilm Camera',
            description: 'Capture your moments with the Fujfilm Camera, providing superior quality for all photography enthusiasts.',
            price: '$499.99',
            image: enginakyurt
        },
        {
            name: 'Canon Camera',
            description: 'The Canon Camera offers cutting-edge technology and high-quality images for every occasion.',
            price: '$799.99',
            image: quangVietNguyen
        },
        {
            name: 'Nikon Camera',
            description: 'Take professional-quality photos with the Nikon Camera, designed for precision and clarity.',
            price: '$699.99',
            image: yaazhini
        },
        {
            name: 'Lighter',
            description: 'This stylish lighter is perfect for any occasion, combining both practicality and elegance.',
            price: '$12.99',
            image: lighter
        },
        {
            name: 'Mystery Box',
            description: 'Our online store provides a variety of products, and you will receive a box of random products from our store.',
            price: '$49.99',
            image: store
        },
        {
            name: 'Merchandise',
            description: 'Explore our exclusive merchandise, featuring trendy and quality products for all.',
            price: '$19.99',
            image: merch
        },
        {
            name: 'Mini Zippers',
            description: 'These durable mini zippers are great for various crafting and fashion applications.',
            price: '$5.99',
            image: mini_zippers
        },
        {
            name: 'SD Card',
            description: 'This SD card offers fast data transfer speeds, perfect for storing your memories.',
            price: '$29.99',
            image: sd_card
        },
        {
            name: 'Gel',
            description: 'The gel is designed for long-lasting hydration and skin care, providing smooth and healthy results.',
            price: '$15.99',
            image: gel
        },
        {
            name: 'Canon Lens',
            description: 'Canon’s professional-grade lens will take your photography to the next level.',
            price: '$999.99',
            image: canon
        },
        {
            name: 'Lens',
            description: 'This lens offers versatility and performance, perfect for both amateur and professional photographers.',
            price: '$199.99',
            image: lens
        },
        {
            name: 'Guitar Pick',
            description: 'High-quality guitar picks, ideal for musicians of all skill levels to enhance their playing.',
            price: '$2.99',
            image: guitar_pick
        },
    ];

    products.forEach(product => {
        // Create a card div
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-12', 'col-md-4'); // Use Bootstrap grid for responsiveness

        // Create the card
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Create the image for the product
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'; // Ensure the image fits properly

        // Create the card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create the product title (name)
        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        // Create the product description
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        // Create the price
        const price = document.createElement('p');
        price.classList.add('card-price');
        price.textContent = product.price;

        // Create the 'Add to cart' button
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('btn', 'btn-success', 'float-end');
        addToCartButton.textContent = "Add to cart";

        // Append all the elements to the card
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);  // Append the price here
        cardBody.appendChild(addToCartButton);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        // Append the card to the products container
        productsContainer.appendChild(cardDiv);
    });
});