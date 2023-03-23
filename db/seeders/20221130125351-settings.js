'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkDelete('settings', null, {});
    return queryInterface.bulkInsert('settings', [
      // LOGO
      {
        type: 'logo',
        feature: 'logoImage',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg',
        comment: null,
      },
      // MENU
      {
        type: 'menu',
        feature: 'bgColor',
        value: '#eff6ff',
        comment: null,
      },
      {
        type: 'menu',
        feature: 'textColor',
        value: '#1f2937',
        comment: null,
      },
      {
        type: 'menu',
        feature: 'hoverColor',
        value: '#000000',
        comment: null,
      },
      {
        type: 'menu',
        feature: 'currentPageColor',
        value: '#14b8a6',
        comment: null,
      },
      // HERO
      {
        type: 'hero',
        feature: 'image',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1676950615/laura_rodriguez/home.jpg',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'opacity',
        value: '0.3',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'text',
        value:
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Doctora Laura Rodriguez</span></h1><h2 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Ginecologa</span></h2>',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'textColor',
        value: '#fff',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'top',
        value: '46%',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'posX',
        value: 'center',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'waveShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'hero',
        feature: 'wave',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // HERO BTN
      {
        type: 'heroBtn',
        feature: 'show',
        value: 'true',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'link',
        value: '/contact',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'text',
        value: 'Agendar cita',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'textColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'textColorHover',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'height',
        value: '32px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'width',
        value: '250px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'border',
        value: '1px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'borderColor',
        value: '#ffffff00',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'borderColorHover',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'bgColor',
        value: '#cfcfcf00',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'bgColorHover',
        value: '#adadad00',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'tlRadius',
        value: '0px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'trRadius',
        value: '0px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'blRadius',
        value: '0px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'brRadius',
        value: '0px',
        comment: null,
      },
      {
        type: 'heroBtn',
        feature: 'shadow',
        value: '0px 0px 8px -4px rgba(0,0,0,0.78)',
        comment: null,
      },
      // BODY
      {
        type: 'color',
        feature: 'bodyBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      // ABOUT
      {
        type: 'sectionAbout',
        feature: 'title',
        value:
          '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Sobre mi</span></h2>',
        comment: 'Quill',
      },
      {
        type: 'sectionAbout',
        feature: 'text',
        value:
          '<p style="color: rgb(0, 0, 0);">¡Hola! Soy Laura, una ginecóloga y sexóloga apasionada por ayudar a las mujeres a tener una vida sexual y reproductiva saludable y satisfactoria.</p><br><p>Me gradué en la Facultad de Medicina hace [Número de años] y desde entonces he trabajado en diversos campos de la ginecología, incluyendo la atención prenatal, el tratamiento de trastornos ginecológicos y la cirugía laparoscópica. Pero mi verdadera pasión es la sexología, donde me especialicé después de darme cuenta de que muchos problemas ginecológicos están relacionados con la salud sexual y emocional de las mujeres.</p><br><p>En mi práctica, ofrezco una variedad de tratamientos de última generación, incluyendo tratamientos con láser para la salud vaginal. Los tratamientos láser son una forma no invasiva y efectiva de tratar muchos problemas ginecológicos, como el síndrome de relajación vaginal, la incontinencia urinaria y la atrofia vaginal. Además, también ofrezco terapia sexual para ayudar a las mujeres a superar cualquier problema relacionado con su vida sexual.</p><br><p>Mi objetivo es ayudar a todas mis pacientes a sentirse cómodas y seguras durante sus visitas, y proporcionarles el tratamiento y el asesoramiento que necesitan para llevar una vida sexual y reproductiva saludable y feliz. Si estás buscando un ginecólogo o sexólogo en quien puedas confiar, no dudes en contactar conmigo. Estoy aquí para ayudarte.</p>',
        comment: 'Quill',
      },
      {
        type: 'sectionAbout',
        feature: 'bgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'sectionAbout',
        feature: 'textColor',
        value: '#1e293b',
        comment: null,
      },
      {
        type: 'sectionAbout',
        feature: 'waveShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'sectionAbout',
        feature: 'wave',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // SERVICES
      {
        type: 'sectionServices',
        feature: 'title',
        value:
          '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Servicios</span></h2>',
        comment: 'Quill',
      },
      {
        type: 'sectionServices',
        feature: 'text',
        value: '<p style="color: rgb(0, 0, 0);">Mis servicios.</p>',
        comment: 'Quill',
      },
      {
        type: 'sectionServices',
        feature: 'bgColor',
        value: '#ebebeb',
        comment: null,
      },
      {
        type: 'sectionServices',
        feature: 'textColor',
        value: '#1e293b',
        comment: null,
      },
      {
        type: 'sectionServices',
        feature: 'waveShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'sectionServices',
        feature: 'wave',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // BLOG
      {
        type: 'sectionBlog',
        feature: 'title',
        value:
          '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Entradas destacadas</span></h2>',
        comment: 'Quill',
      },
      {
        type: 'sectionBlog',
        feature: 'text',
        value:
          '<p style="color: rgb(0, 0, 0);">En mi blog encontrarás una amplia variedad de artículos sobre diversos temas, desde ginecología, hasta sexología y calidad de vida. Nuestro objetivo es proporcionarte contenido interesante y útil que te mantenga informada y entretenida. Siéntete libre de explorar nuestro sitio y no dudes en dejar tus comentarios y sugerencias. ¡Gracias por visitarnos!.</p>',
        comment: 'Quill',
      },
      {
        type: 'sectionBlog',
        feature: 'bgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'sectionBlog',
        feature: 'textColor',
        value: '#1e293b',
        comment: null,
      },
      {
        type: 'sectionBlog',
        feature: 'waveShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'sectionBlog',
        feature: 'wave',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // BLOG BTN
      {
        type: 'blogBtn',
        feature: 'show',
        value: 'true',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'link',
        value: '/blog',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'text',
        value: 'Visita mi blog',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'textColor',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'textColorHover',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'height',
        value: '32px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'width',
        value: '250px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'border',
        value: '1px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'borderColor',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'borderColorHover',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'bgColor',
        value: '#cfcfcf',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'bgColorHover',
        value: '#adadad',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'tlRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'trRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'blRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'brRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'blogBtn',
        feature: 'shadow',
        value: '6px 4px 16px -4px rgba(0,0,0,0.78)',
        comment: null,
      },
      // CLINIC
      {
        type: 'sectionClinic',
        feature: 'title',
        value:
          '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Lugares de atención</span></h2>',
        comment: 'Quill',
      },
      {
        type: 'sectionClinic',
        feature: 'text',
        value:
          '<p style="color: rgb(0, 0, 0);">Ofrezco servicios en varias clínicas, puedes concertar una cita previa directamente desde esta página web. Elige tu clínica más cercana.</p>',
        comment: 'Quill',
      },
      {
        type: 'sectionClinic',
        feature: 'bgColor',
        value: '#ebebeb',
        comment: null,
      },
      {
        type: 'sectionClinic',
        feature: 'textColor',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'sectionClinic',
        feature: 'waveShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'sectionClinic',
        feature: 'wave',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // CLINIC BTN
      {
        type: 'clinicBtn',
        feature: 'show',
        value: 'true',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'link',
        value: '/contact',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'text',
        value: 'Pedir cita',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'textColor',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'textColorHover',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'height',
        value: '32px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'width',
        value: '250px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'border',
        value: '1px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'borderColor',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'borderColorHover',
        value: '#0f172a',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'bgColor',
        value: '#cfcfcf',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'bgColorHover',
        value: '#adadad',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'tlRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'trRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'blRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'brRadius',
        value: '5px',
        comment: null,
      },
      {
        type: 'clinicBtn',
        feature: 'shadow',
        value: '6px 4px 16px -4px rgba(0,0,0,0.78)',
        comment: null,
      },
      // TESTIMONIALS
      {
        type: 'sectionTestimonials',
        feature: 'title',
        value:
          '<h2 class="ql-align-center"><span style="color: rgb(0, 0, 0);">Qué dicen mis pacientes</span></h2>',
        comment: 'Quill',
      },
      {
        type: 'sectionTestimonials',
        feature: 'text',
        value:
          '<p style="color: rgb(0, 0, 0);">Me enorgullece saber que los pacientes confían en mí y están satisfechos con la calidad del servicio brindado. Estoy comprometida en brindar la mejor atención médica posible y continuar mejorando mis prácticas para satisfacer sus necesidades y expectativas...</p>',
        comment: 'Quill',
      },
      {
        type: 'sectionTestimonials',
        feature: 'bgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'sectionTestimonials',
        feature: 'textColor',
        value: '#1e293b',
        comment: null,
      },
      {
        type: 'sectionTestimonials',
        feature: 'waveShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'sectionTestimonials',
        feature: 'wave',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // FOOTER
      {
        type: 'footer',
        feature: 'bgColor',
        value: '#1c211c',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'textColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'buttonsColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'buttonsHoverColor',
        value: '#131213',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'linksColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'linksHoverColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'footer2BgColor',
        value: '#131213',
        comment: null,
      },
      {
        type: 'footer',
        feature: 'footer2TextColor',
        value: '#fefeff',
        comment: null,
      },
      // CONTACT
      {
        type: 'contactData',
        feature: 'instagram',
        value: 'https://www.instagram.com/lalaloberia/',
        comment: null,
      },
      {
        type: 'contactData',
        feature: 'facebook',
        value: 'https://www.facebook.com/lala.rodriguez.90857/',
        comment: null,
      },
      {
        type: 'contactData',
        feature: 'twitter',
        value: '',
        comment: null,
      },
      {
        type: 'contactData',
        feature: 'whatsapp',
        value:
          'https://wa.me/5492262470100?text=Hola, quiero recibir información',
        comment: null,
      },
      {
        type: 'contactData',
        feature: 'email',
        value: 'laurarodriguez@gmail.com',
        comment: null,
      },
      {
        type: 'contactData',
        feature: 'phone',
        value: '(02262) 15 470100',
        comment: null,
      },
      // METADATA
      {
        type: 'metaData',
        feature: 'meta_description',
        value:
          'Web especializada en ginecología y sexología. Encontrarás información actualizada sobre la salud sexual femenina y para obtener el cuidado médico que necesita',
        comment: null,
      },
      {
        type: 'metaData',
        feature: 'meta_title',
        value: 'Doctora Laura Rodriguez - Ginecóloga',
        comment: null,
      },
      {
        type: 'metaData',
        feature: 'meta_canonical',
        value: 'http://hathayogaloberia.ga',
        comment: null,
      },
      {
        type: 'metaData',
        feature: 'meta_url',
        value: 'http://hathayogaloberia.ga',
        comment: null,
      },
      // PAGE CONTACT
      {
        type: 'pageContact',
        feature: 'h1',
        value:
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Contáctanos</span></h1>',
        comment: 'Quill',
      },
      {
        type: 'pageContact',
        feature: 'heroBgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageContact',
        feature: 'bgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageContact',
        feature: 'text',
        value:
          '<p><span style="color: rgb(204, 224, 245);">¡Hola! Si quieres ponerte en contacto con nosotros, por favor completa el formulario que encontrarás a continuación. Nos encantaría escuchar tus comentarios, sugerencias, preguntas o cualquier otra cosa que desees compartir con nosotros.</span></p><p><br></p><p><span style="color: rgb(204, 224, 245);">También puedes enviarnos un correo electrónico o contactarnos a través de nuestras redes sociales. Te responderemos lo antes posible.</span></p><p><br></p><p><span style="color: rgb(204, 224, 245);">Gracias por tu interés en contactarnos, ¡esperamos saber de ti pronto!</span></p>',
        comment: 'Quill',
      },
      {
        type: 'pageContact',
        feature: 'decorationColor',
        value: '#5fead5',
        comment: null,
      },
      // PAGE BLOG
      {
        type: 'pageBlog',
        feature: 'h1',
        value:
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Blog, artículos y noticias</span></h1><h2 class="ql-align-center"><span style="color: rgb(255, 255, 255);">¡Bienvenida a mi blog!</span></h2>',
        comment: 'Quill',
      },
      {
        type: 'pageBlog',
        feature: 'heroBgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageBlog',
        feature: 'bgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageBlog',
        feature: 'text',
        value:
          '<p class="ql-align-center"><span style="color: rgb(204, 224, 245);">Aquí encontrarás una variedad de temas interesantes y útiles que te ayudarán a mejorar tu vida y alcanzar tus objetivos. Desde consejos sobre salud y bienestar, hasta artículos sobre tecnología y entretenimiento, mi blog tiene algo para todos.</span></p><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="color: rgb(204, 224, 245);">Mis publicaciones están escritas con el objetivo de informar, inspirar y entretener. Me apasiona compartir información valiosa y útil que pueda ayudarte a tomar decisiones informadas y a mejorar tu vida de alguna manera.</span></p><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="color: rgb(204, 224, 245);">Además, estoy siempre abierto a sugerencias y comentarios de mis lectores. Si tienes alguna pregunta o tema que te gustaría que cubra en mi blog, no dudes en </span><a href="/contact" rel="noopener noreferrer" target="_blank" style="color: rgb(204, 224, 245);">contactarme</a><span style="color: rgb(204, 224, 245);">.</span></p><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="color: rgb(204, 224, 245);">¡Gracias por visitar mi blog! Espero que disfrutes leyendo mis publicaciones tanto como yo disfruto escribirlas.</span></p><p><br></p>',

        comment: 'Quill',
      },
      {
        type: 'pageBlog',
        feature: 'decorationColor',
        value: '#5fead5',
        comment: null,
      },
      // PAGE POST
      {
        type: 'pagePost',
        feature: 'h1',
        value:
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Título ejemplo</span></h1>',
        comment: 'Quill',
      },
      {
        type: 'pagePost',
        feature: 'heroBgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pagePost',
        feature: 'bgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pagePost',
        feature: 'text',
        value:
          '<p><span style="color: rgb(204, 224, 245);">¡Hola! Párrafo ejemplo. Tento el título como el contenido del post se definen y modifican a través del menú Secciones - Blog.</span></p><p><br></p><p><span style="color: rgb(204, 224, 245);">Aquí, definiremos los colores para el background y el texto que se aplicrá a todos los posts generados.</span></p><p><br></p><p><span style="color: rgb(204, 224, 245);">Si tienes dudas, puedes consultar la documentación o contactar al administrado. Muchas gracias. </span></p>',
        comment: 'Quill',
      },
      {
        type: 'pagePost',
        feature: 'decorationColor',
        value: '#5fead5',
        comment: null,
      },
      // PAGE PRIVACY
      {
        type: 'pagePrivacy',
        feature: 'h1',
        value:
          '<p class="ql-align-center"><br></p><h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Políticas de privacidad</span></h1><p class="ql-align-center"><br></p>',
        comment: 'Quill',
      },
      {
        type: 'pagePrivacy',
        feature: 'heroBgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pagePrivacy',
        feature: 'bgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pagePrivacy',
        feature: 'text',
        value:
          '<p><span style="color: rgb(204, 224, 245);">El presente Política de Privacidad establece los términos en que Laura Rodriguez usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. </span></p><p><br></p><p><span style="color: rgb(204, 224, 245);">Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. </span></p><p><br></p><p><span style="color: rgb(204, 224, 245);">Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</span></p><p><br></p>',
        comment: 'Quill',
      },
      {
        type: 'pagePrivacy',
        feature: 'decorationColor',
        value: '#5fead5',
        comment: null,
      },
      // PAGE COOKIES
      {
        type: 'pageCookies',
        feature: 'h1',
        value:
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Política de cookies</span></h1>',
        comment: 'Quill',
      },
      {
        type: 'pageCookies',
        feature: 'heroBgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageCookies',
        feature: 'bgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageCookies',
        feature: 'text',
        value:
          '<p><span style="color: rgb(204, 224, 245);">Cookies Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web. Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</span></p>',
        comment: 'Quill',
      },
      {
        type: 'pageCookies',
        feature: 'decorationColor',
        value: '#5fead5',
        comment: null,
      },
      // PAGE DATAPROTECT
      {
        type: 'pageDataProtect',
        feature: 'h1',
        value:
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Protección de datos</span></h1>',
        comment: 'Quill',
      },
      {
        type: 'pageDataProtect',
        feature: 'heroBgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageDataProtect',
        feature: 'bgColor',
        value: '#0f7491',
        comment: null,
      },
      {
        type: 'pageDataProtect',
        feature: 'text',
        value:
          '<p><span style="color: rgb(204, 224, 245);">La protección de tus datos personales es muy importante para nosotros. Nos comprometemos a cumplir con todas las leyes y regulaciones de protección de datos aplicables y a tratar tus datos personales con cuidado y confidencialidad. Al proporcionarnos tus datos personales, aceptas que los usemos para los fines específicos para los que los hemos recopilado, como procesar tus pedidos, enviarte información relevante sobre nuestros productos y servicios, o responder a tus consultas. No compartiremos tus datos personales con terceros sin tu consentimiento explícito, a menos que sea necesario para cumplir con las leyes aplicables, proteger nuestros derechos legales, o para llevar a cabo actividades comerciales esenciales, como el procesamiento de pagos o el envío de productos. Además, implementamos medidas de seguridad adecuadas para proteger tus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Si tienes alguna pregunta sobre nuestra política de protección de datos, no dudes en contactarnos. Estaremos encantados de ayudarte y brindarte toda la información que necesites.</span></p>',
        comment: 'Quill',
      },
      {
        type: 'pageDataProtect',
        feature: 'decorationColor',
        value: '#5fead5',
        comment: null,
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
