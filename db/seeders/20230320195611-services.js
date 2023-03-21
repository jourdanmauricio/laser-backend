'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('services', null, {});
    return queryInterface.bulkInsert(
      'services',
      [
        {
          title: 'Sexología',
          content:
            '<p style="color: rgb(0, 0, 0);">La sexualidad es una parte importante de la vida de los adolescentes y es fundamental que reciban educación sexual y apoyo para desarrollar una sexualidad saludable y positiva. La sexología en la adolescencia se enfoca en ayudar a los jóvenes a entender su cuerpo, sus emociones y sus relaciones, y a tomar decisiones informadas y responsables.</p><p><br></p><p>En la adolescencia, la identidad de género y la orientación sexual pueden ser temas particularmente importantes. La sexología en la adolescencia puede ayudar a los jóvenes a comprender y aceptar su identidad de género y orientación sexual, y a lidiar con la discriminación y el estigma asociados con ciertas identidades sexuales.</p><p><br></p><p>La sexología en la adolescencia y el género son temas importantes para abordar y comprender para ayudar a los jóvenes a desarrollar una sexualidad saludable y positiva, y para promover la igualdad de género y la comprensión de las diferencias sexuales y de género.</p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1677275330/laura_rodriguez/home_2%20_opt.jpg',
          alt_image: 'Sexología',
          order: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Ginecología',
          content:
            '<p style="color: rgb(0, 0, 0);">Existen una amplia variedad de tratamientos ginecológicos, algunos de los cuales son:</p><p><br></p><ul><li> Exámenes de rutina: los exámenes de rutina, como el examen pélvico y el examen de Papanicolaou, son importantes para detectar afecciones ginecológicas temprano y para prevenir enfermedades.</li></ul><p><br></p><ul><li> Tratamiento de infecciones: las infecciones vaginales, como la vaginosis bacteriana y la candidiasis, pueden tratarse con medicamentos antifúngicos o antibióticos.</li></ul><p><br></p><ul><li> Tratamiento de enfermedades de transmisión sexual: las enfermedades de transmisión sexual, como la clamidia, la gonorrea y la sífilis, pueden tratarse con antibióticos.</li></ul><p><br></p><ul><li> Terapia hormonal: la terapia hormonal puede ser útil para tratar síntomas relacionados con la menopausia, como sofocos, sudores nocturnos y sequedad vaginal.</li></ul><p><br></p><p>Es importante que las mujeres visiten regularmente a un ginecólogo para detectar cualquier problema de salud ginecológica temprano y recibir tratamiento adecuado.</p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1678061985/laura_rodriguez/x-ray-of-the-jaw-2416944_640.jpg',
          alt_image: 'Ginecología',
          order: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          title: 'Tratamientos laser',
          content:
            '<p style="color: rgb(0, 0, 0);">Existen una amplia variedad de tratamientos ginecológicos, algunos de los cuales son:</p><p><br></p><ul><li> Exámenes de rutina: los exámenes de rutina, como el examen pélvico y el examen de Papanicolaou, son importantes para detectar afecciones ginecológicas temprano y para prevenir enfermedades.</li></ul><p><br></p><ul><li> Tratamiento de infecciones: las infecciones vaginales, como la vaginosis bacteriana y la candidiasis, pueden tratarse con medicamentos antifúngicos o antibióticos.</li></ul><p><br></p><ul><li> Tratamiento de enfermedades de transmisión sexual: las enfermedades de transmisión sexual, como la clamidia, la gonorrea y la sífilis, pueden tratarse con antibióticos.</li></ul><p><br></p><ul><li> Terapia hormonal: la terapia hormonal puede ser útil para tratar síntomas relacionados con la menopausia, como sofocos, sudores nocturnos y sequedad vaginal.</li></ul><p><br></p><p>Es importante que las mujeres visiten regularmente a un ginecólogo para detectar cualquier problema de salud ginecológica temprano y recibir tratamiento adecuado.</p>',
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1676996166/laura_rodriguez/profile%20_opt.jpg',
          alt_image: 'Tratamientos laser',
          order: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('services', null, {});
  },
};
