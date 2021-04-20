import bcrypt from 'bcrypt';
const data = {
    users: [
        {
            name: 'AliBanyAli',
            email: 'banyali@bk.ru',
            password: bcrypt.hashSync('12345', 8),
            isAdmin: true,

        }, {
            name: 'HasanSaimeh',
            email: 'hasan@gmail.com',
            password: bcrypt.hashSync('11111', 8),
            isAdmin: false,

        }
    ],
    products: [
        {

            name: 'Men Formal Dress 1',
            category: 'Clothes',
            image: '/images/1.jpg',
            price: 200,
            countInStock: 10,
            brand: 'Lacoste',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {

            name: 'Men Formal Dress 2',
            category: 'Clothes',
            image: '/images/2.jpg',
            price: 350,
            countInStock: 11,
            brand: 'Nike',
            rating: 5,
            numReviews: 15,
            description: 'high quality product',

        },
        {

            name: ' Men Formal Dress 3',
            category: 'Clothes',
            image: '/images/3.jpg',
            price: 300,
            countInStock: 0,
            brand: 'Zara',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',

        },
        {

            name: 'Men Formal Dress 4',
            category: 'Clothes',
            image: '/images/1.jpg',
            price: 250,
            countInStock: 3,
            brand: 'adidas',
            rating: 4,
            numReviews: 20,
            description: 'high quality product',

        },
        {

            name: 'Men Formal Dress 5',
            category: 'Clothes',
            image: '/images/1.jpg',
            price: 220,
            countInStock: 4,
            brand: 'Puma',
            rating: 3.5,
            numReviews: 22,
            description: 'high quality product',

        },
        {

            name: 'Men Formal Dress 11',
            category: 'Clothes',
            image: '/images/1.jpg',
            price: 300,
            countInStock: 1,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 30,
            description: 'high quality product',

        },

    ],
};
export default data;