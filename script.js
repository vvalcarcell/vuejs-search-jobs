Vue.config.devtools = true;

new Vue(
    {
        el: '#root',
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Junior Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/computer.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Perferendis',
                    position: 'Senior Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/computer.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Estathè',
                    position: 'Responsabile Risorse Umane',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/estathe-logo.png',
                    city: 'Milano',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'Coca-Cola',
                    position: 'Responsabile Risorse Umane',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/logo-coca-cola.jpg',
                    city: 'Bergamo',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Vodafone',
                    position: 'Assistenza Clienti',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'img/vodafone-logo.png',
                    city: 'Torino',
                    contract: 'Full Time'
                },
            ],
            starred: [1, 2, 3],
            applied: [4, 5]

        },
        methods: {
            favorite: function (index) {
                if (!this.starred.includes(index + 1)) {
                    this.starred.push(index + 1);
                } else {
                    this.starred.splice(index, 1);
                }
            },
            isApplied: function (index) {
                if (!this.applied.includes(index + 1)) {
                    return null;
                } else {
                    return 'applied';
                }
            }

        }
    }

);