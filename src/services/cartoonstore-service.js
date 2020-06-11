export default class CartoonstoreService {
    data = [
        {
            id: 1,
            title: 'The Lion King',
            type: 'Cartoon film',
            price: 15,
            image: 'https://i2.wp.com/kublia.lionking.org/~uzuri/pics/Tlkcomic.jpg'
        },
        {
            id: 2,
            title: 'Tom and Jerry',
            type: 'Cartoon serial',
            price: 50,
            image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg'
        }
    ];

    getCartoons() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Stranger things'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    };
};