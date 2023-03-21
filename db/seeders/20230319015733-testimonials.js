'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('testimonials', null, {});
    return queryInterface.bulkInsert(
      'testimonials',
      [
        {
          name: 'Analia Lopez',
          message:
            'No tengo palabras para describir la buenísima experiencia que he tenido con la ginecóloga Bárbara. \nQuiero agradecer la perfecta atención y rápida respuesta de la persona que gestiona el WhatsApp y destacar la amabilidad de las profesionales que se encargaban de la recepción.\nLa doctora ha sido sumamente amable y empática, al explicarle que tengo vaginismo. Me ha tratado con muchísimo cuidado y palabras de ánimo. No he sentido nada de dolor.',
          stars: '11110',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Karina Maceo',
          message:
            'Excelente profesional, muy atenta, explica con detalle las distintas opciones de tratamiento, muy empática.',
          stars: '11110',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alejandra Martinez',
          message:
            'Fui con un problema muy severo, después de haber ido a otros muchos ginecólogos y la doctora supo diagnosticarmelo enseguida y estoy en tratamiento con ella. Por eso estoy muy agradecida.\nMe parece muy profesional y empatica con las pacientes.',
          stars: '11110',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('testimonials', null, {});
  },
};
