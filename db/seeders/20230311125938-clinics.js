'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('clinics', null, {});
    return queryInterface.bulkInsert(
      'clinics',
      [
        {
          name: 'Clínica los Sauces',
          email: 'turnos@lossauces.com',
          phone: '(0223) 452 9565',
          main: true,
          state: 'Buenos Aires',
          city: 'Mar del Plata',
          cp: '7600',
          street: 'Colón',
          number: '2120',
          order: 1,
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1679064311/laura_rodriguez/mardelplata_opt.png',
          alt_image: 'Mar del Plata',
          days: '',
          observation: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'San Juan de Dios',
          email: 'admin@sanjuan.com',
          phone: '(0221) 453 8585',
          main: true,
          state: 'Buenos Aires',
          city: 'La Plata',
          cp: '1900',
          street: '70',
          number: '2562',
          order: 2,
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1678061985/laura_rodriguez/x-ray-of-the-jaw-2416944_640.jpg',
          alt_image: 'La plata',
          days: '',
          observation: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Estética Belleza y Bienestar',
          email: 'bellezaybienestar@gmail.com',
          phone: '(02262) 450 7575',
          main: true,
          state: 'Buenos Aires',
          city: 'Necochea',
          cp: '7630',
          street: '6',
          number: '1315',
          floor: '3',
          apartment: 'B',
          order: 3,
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1677275330/laura_rodriguez/home_2%20_opt.jpg',
          alt_image: 'Necochea',
          days: '',
          observation: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('clinics', null, {});
  },
};
