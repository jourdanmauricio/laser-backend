'use strict';

module.exports = {
  async up(queryInterface) {
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
          image: '',
          alt_image: '',
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
          image: '',
          alt_image: '',
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
          image: '',
          alt_image: '',
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
