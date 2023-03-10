'use strict';

module.exports = {
  async up(queryInterface) {
    // ABOUT
    const about_id = await queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'about',
          title: 'Sobre mi',
          show: true,
          page: '/',
          type: 'TEXT',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'subsections',
      [
        {
          image: '',
          alt_image: '',
          name: 'Unica',
          content:
            '<p>¡Hola! Soy Laura, una ginecóloga y sexóloga apasionada por ayudar a las mujeres a tener una vida sexual y reproductiva saludable y satisfactoria.</p><br><p>Me gradué en la Facultad de Medicina hace [Número de años] y desde entonces he trabajado en diversos campos de la ginecología, incluyendo la atención prenatal, el tratamiento de trastornos ginecológicos y la cirugía laparoscópica. Pero mi verdadera pasión es la sexología, donde me especialicé después de darme cuenta de que muchos problemas ginecológicos están relacionados con la salud sexual y emocional de las mujeres.</p><br><p>En mi práctica, ofrezco una variedad de tratamientos de última generación, incluyendo tratamientos con láser para la salud vaginal. Los tratamientos láser son una forma no invasiva y efectiva de tratar muchos problemas ginecológicos, como el síndrome de relajación vaginal, la incontinencia urinaria y la atrofia vaginal. Además, también ofrezco terapia sexual para ayudar a las mujeres a superar cualquier problema relacionado con su vida sexual.</p><br><p>Mi objetivo es ayudar a todas mis pacientes a sentirse cómodas y seguras durante sus visitas, y proporcionarles el tratamiento y el asesoramiento que necesitan para llevar una vida sexual y reproductiva saludable y feliz. Si estás buscando un ginecólogo o sexólogo en quien puedas confiar, no dudes en contactar conmigo. Estoy aquí para ayudarte.</p>',
          section_id: about_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    // SERVICIOS

    const service_id = await queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'services',
          title: 'Servicios',
          show: true,
          page: '/',
          type: 'SPLIT',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'subsections',
      [
        {
          image: '',
          alt_image: '',
          name: 'Ginecología',
          content: '<p>Servicios de ginecología</p>',
          section_id: service_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'subsections',
      [
        {
          image: '',
          alt_image: '',
          name: 'Sexología',
          content: '<p>Servicios de sexología</p>',
          section_id: service_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'subsections',
      [
        {
          image: '',
          alt_image: '',
          name: 'Tratamientos laser',
          content: '<p>Tratamientos laser</p>',
          section_id: service_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    // BLOG
    const blog_id = await queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'blog',
          title: 'Entradas destacadas',
          show: true,
          page: '/',
          type: 'TEXT',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'subsections',
      [
        {
          image: '',
          alt_image: '',
          name: 'Blog',
          content:
            '<p>En mi blog encontrarás una amplia variedad de artículos sobre diversos temas, desde ginecología, hasta sexología y calidad de vida. Nuestro objetivo es proporcionarte contenido interesante y útil que te mantenga informada y entretenida. Siéntete libre de explorar nuestro sitio y no dudes en dejar tus comentarios y sugerencias. ¡Gracias por visitarnos!.</p>',
          section_id: blog_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('subsections', null, {});
    return queryInterface.bulkDelete('sections', null, {});
  },
};
