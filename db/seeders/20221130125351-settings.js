'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('settings', [
      {
        type: 'image',
        feature: 'logo',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg',
      },
      {
        type: 'image',
        feature: 'hero',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1676950615/laura_rodriguez/home.jpg',
      },
      {
        type: 'text',
        feature: 'textHero',
        value: 'Doctora Laura Rodriguez',
      },
      {
        type: 'style',
        feature: 'posHero',
        value: 'top-1/2',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'instagram',
        value: 'https://www.instagram.com/hathayogaloberia/',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'twitter',
        value: '',
      },
      {
        type: 'CONTACT',
        feature: 'whatsapp',
        value:
          'https://wa.me/5492262470952?text=Hola, quiero recibir información',
      },
      {
        type: 'CONTACT',
        feature: 'email',
        value: 'hathayogaloberia@gmail.com',
      },
      {
        type: 'CONTACT',
        feature: 'phone',
        value: '(02262) 470952',
      },
      {
        type: 'STYLE',
        feature: 'title_color',
        value: '#531253',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_color',
        value: '#121212',
      },
      {
        type: 'STYLE',
        feature: 'button_color',
        value: '#531253',
      },
      {
        type: 'STYLE',
        feature: 'divisor_color',
        value: '#531253',
      },
      {
        type: 'STYLE',
        feature: 'effect_color',
        value: '#531253',
      },
      {
        type: 'STYLE',
        feature: 'error_color',
        value: 'ff0000',
      },
      {
        type: 'STYLE',
        feature: 'h1_color',
        value: '#ffffff',
      },
      {
        type: 'STYLE',
        feature: 'paragraph_header_color',
        value: '#ffffff',
      },
      {
        type: 'STYLE',
        feature: 'background_color',
        value: '#eaeaea',
      },
      {
        type: 'STYLE',
        feature: 'background_footer_color',
        value: '#fafafa',
      },
      {
        type: 'STYLE',
        feature: 'table_header_color',
        value: '#eaeaea',
      },
      {
        type: 'STYLE',
        feature: 'table_header_text_color',
        value: '#170312',
      },
      {
        type: 'STYLE',
        feature: 'table_body_color',
        value: '#eaeaea',
      },
      {
        type: 'STYLE',
        feature: 'table_border_color',
        value: '#170312',
      },
      {
        type: 'STYLE',
        feature: 'table_body_text_color',
        value: '#170312',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
