'use strict';

module.exports = {
  async up(queryInterface) {
    // ABOUT
    const about_id = await queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'about',
          title:
            '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Sobre mi</span></h2>',
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
            '<p style="color: rgb(0, 0, 0);">¡Hola! Soy Laura, una ginecóloga y sexóloga apasionada por ayudar a las mujeres a tener una vida sexual y reproductiva saludable y satisfactoria.</p><br><p>Me gradué en la Facultad de Medicina hace [Número de años] y desde entonces he trabajado en diversos campos de la ginecología, incluyendo la atención prenatal, el tratamiento de trastornos ginecológicos y la cirugía laparoscópica. Pero mi verdadera pasión es la sexología, donde me especialicé después de darme cuenta de que muchos problemas ginecológicos están relacionados con la salud sexual y emocional de las mujeres.</p><br><p>En mi práctica, ofrezco una variedad de tratamientos de última generación, incluyendo tratamientos con láser para la salud vaginal. Los tratamientos láser son una forma no invasiva y efectiva de tratar muchos problemas ginecológicos, como el síndrome de relajación vaginal, la incontinencia urinaria y la atrofia vaginal. Además, también ofrezco terapia sexual para ayudar a las mujeres a superar cualquier problema relacionado con su vida sexual.</p><br><p>Mi objetivo es ayudar a todas mis pacientes a sentirse cómodas y seguras durante sus visitas, y proporcionarles el tratamiento y el asesoramiento que necesitan para llevar una vida sexual y reproductiva saludable y feliz. Si estás buscando un ginecólogo o sexólogo en quien puedas confiar, no dudes en contactar conmigo. Estoy aquí para ayudarte.</p>',
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
          title:
            '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Servicios</span></h2>',
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
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1678061985/laura_rodriguez/x-ray-of-the-jaw-2416944_640.jpg',
          alt_image: 'Ginecología',
          name: 'Ginecología',
          content:
            '<p style="color: rgb(0, 0, 0);">Existen una amplia variedad de tratamientos ginecológicos, algunos de los cuales son:</p><p><br></p><ul><li> Exámenes de rutina: los exámenes de rutina, como el examen pélvico y el examen de Papanicolaou, son importantes para detectar afecciones ginecológicas temprano y para prevenir enfermedades.</li></ul><p><br></p><ul><li> Tratamiento de infecciones: las infecciones vaginales, como la vaginosis bacteriana y la candidiasis, pueden tratarse con medicamentos antifúngicos o antibióticos.</li></ul><p><br></p><ul><li> Tratamiento de enfermedades de transmisión sexual: las enfermedades de transmisión sexual, como la clamidia, la gonorrea y la sífilis, pueden tratarse con antibióticos.</li></ul><p><br></p><ul><li> Terapia hormonal: la terapia hormonal puede ser útil para tratar síntomas relacionados con la menopausia, como sofocos, sudores nocturnos y sequedad vaginal.</li></ul><p><br></p><p>Es importante que las mujeres visiten regularmente a un ginecólogo para detectar cualquier problema de salud ginecológica temprano y recibir tratamiento adecuado.</p>',
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
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1677275330/laura_rodriguez/home_2%20_opt.jpg',
          alt_image: 'Sexología',
          name: 'Sexología',
          content:
            '<p style="color: rgb(0, 0, 0);">La sexualidad es una parte importante de la vida de los adolescentes y es fundamental que reciban educación sexual y apoyo para desarrollar una sexualidad saludable y positiva. La sexología en la adolescencia se enfoca en ayudar a los jóvenes a entender su cuerpo, sus emociones y sus relaciones, y a tomar decisiones informadas y responsables.</p><p><br></p><p>En la adolescencia, la identidad de género y la orientación sexual pueden ser temas particularmente importantes. La sexología en la adolescencia puede ayudar a los jóvenes a comprender y aceptar su identidad de género y orientación sexual, y a lidiar con la discriminación y el estigma asociados con ciertas identidades sexuales.</p><p><br></p><p>La sexología en la adolescencia y el género son temas importantes para abordar y comprender para ayudar a los jóvenes a desarrollar una sexualidad saludable y positiva, y para promover la igualdad de género y la comprensión de las diferencias sexuales y de género.</p>',
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
          image:
            'https://res.cloudinary.com/dn7npxeof/image/upload/v1676996166/laura_rodriguez/profile%20_opt.jpg',
          alt_image: 'Tratamientos laser',
          name: 'Tratamientos laser',
          content:
            '<p style="color: rgb(0, 0, 0);">Los tratamientos láser ginecológicos son una opción cada vez más popular para abordar diferentes afecciones en el área vaginal y vulvar, tales como la incontinencia urinaria, la sequedad vaginal, la dispareunia, las cicatrices de episiotomía y la atrofia vaginal.</p><p><br></p><p>El tratamiento láser funciona mediante la aplicación de un haz de luz de alta energía en la zona a tratar, lo que estimula la producción de colágeno y elastina y mejora la irrigación sanguínea. Esto a su vez ayuda a mejorar la calidad del tejido y a reducir los síntomas de las diferentes afecciones.</p><p><br></p><p>Uno de los tratamientos más comunes es la terapia láser vaginal, que se utiliza para tratar la sequedad vaginal, la incontinencia urinaria y otros síntomas relacionados con la menopausia. El procedimiento es rápido y prácticamente indoloro. La paciente puede volver a sus actividades normales inmediatamente después del tratamiento.</p><p><br></p><p>Otro tratamiento láser ginecológico es el rejuvenecimiento vulvar, que se enfoca en mejorar la apariencia de la vulva y reducir los síntomas de la atrofia vulvar. También es un procedimiento rápido y seguro que se realiza en el consultorio médico.</p><p><br></p><p>En general, los tratamientos láser ginecológicos son muy seguros y efectivos, y pueden mejorar significativamente la calidad de vida de las mujeres que sufren diferentes afecciones en la zona vaginal y vulvar.&nbsp;</p>',
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
          title:
            '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Entradas destacadas</span></h2>',
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
            '<p style="color: rgb(0, 0, 0);">En mi blog encontrarás una amplia variedad de artículos sobre diversos temas, desde ginecología, hasta sexología y calidad de vida. Nuestro objetivo es proporcionarte contenido interesante y útil que te mantenga informada y entretenida. Siéntete libre de explorar nuestro sitio y no dudes en dejar tus comentarios y sugerencias. ¡Gracias por visitarnos!.</p>',
          section_id: blog_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    // CLINIC
    const clinic_id = await queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'clinic',
          title:
            '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Lugares de atención</span></h2>',
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
          name: 'Clinic',
          content:
            '<p style="color: rgb(0, 0, 0);">Ofrezco servicios en varias clínicas, puedes concertar una cita previa directamente desde esta página web. Elige tu clínica más cercana.</p>',
          section_id: clinic_id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    // CLINIC
    const testimonial_id = await queryInterface.bulkInsert(
      'sections',
      [
        {
          name: 'testimonials',
          title:
            '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Qué dicen mis pacientes</span></h2>',
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
          name: 'testimonials',
          content:
            '<p style="color: rgb(0, 0, 0);">Me enorgullece saber que los pacientes confían en mí y están satisfechos con la calidad del servicio brindado. Estoy comprometida en brindar la mejor atención médica posible y continuar mejorando mis prácticas para satisfacer sus necesidades y expectativas...</p>',
          section_id: testimonial_id,
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
