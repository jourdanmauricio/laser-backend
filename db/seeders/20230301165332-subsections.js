'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'subsections',
      [
        {
          image: '',
          content:
            '<p>¡Hola! Soy [Tu Nombre], una ginecóloga y sexóloga apasionada por ayudar a las mujeres a tener una vida sexual y reproductiva saludable y satisfactoria.</p><p>Me gradué en la Facultad de Medicina hace [Número de años] y desde entonces he trabajado en diversos campos de la ginecología, incluyendo la atención prenatal, el tratamiento de trastornos ginecológicos y la cirugía laparoscópica. Pero mi verdadera pasión es la sexología, donde me especialicé después de darme cuenta de que muchos problemas ginecológicos están relacionados con la salud sexual y emocional de las mujeres.</p><p>En mi práctica, ofrezco una variedad de tratamientos de última generación, incluyendo tratamientos con láser para la salud vaginal. Los tratamientos láser son una forma no invasiva y efectiva de tratar muchos problemas ginecológicos, como el síndrome de relajación vaginal, la incontinencia urinaria y la atrofia vaginal. Además, también ofrezco terapia sexual para ayudar a las mujeres a superar cualquier problema relacionado con su vida sexual.</p><p>Mi objetivo es ayudar a todas mis pacientes a sentirse cómodas y seguras durante sus visitas, y proporcionarles el tratamiento y el asesoramiento que necesitan para llevar una vida sexual y reproductiva saludable y feliz. Si estás buscando un ginecólogo o sexólogo en quien puedas confiar, no dudes en contactar conmigo. Estoy aquí para ayudarte.</p>',
          section_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('subsections', null, {});
  },
};
