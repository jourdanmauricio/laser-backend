'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('settings', [
      // MENU
      {
        type: 'image',
        feature: 'logoImage',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg',
        comment: null,
      },
      {
        type: 'color',
        feature: 'navBgColor',
        value: '#eff6ff',
        comment: null,
      },
      {
        type: 'color',
        feature: 'navTextColor',
        value: '#1f2937',
        comment: null,
      },
      {
        type: 'color',
        feature: 'navHoverColor',
        value: '#000000',
        comment: null,
      },
      {
        type: 'color',
        feature: 'navCurrentPageColor',
        value: '#14b8a6',
        comment: null,
      },
      // HERO
      {
        type: 'image',
        feature: 'heroImage',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1676950615/laura_rodriguez/home.jpg',
        comment: null,
      },
      {
        type: 'style',
        feature: 'heroOpacity',
        value: '0.3',
        comment: null,
      },
      {
        type: 'text',
        feature: 'heroText',
        value:
          '<h1 class="ql-align-center"><strong style="color: rgb(255, 255, 204);">﻿Doctora Laura Rodriguez</strong></h1>',
        comment: null,
      },
      {
        type: 'color',
        feature: 'heroTextColor',
        value: '#fff',
        comment: null,
      },
      {
        type: 'style',
        feature: 'heroTop',
        value: '50%',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveHeroShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveHero',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      // GENERAL
      {
        type: 'color',
        feature: 'bodyBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      // SECTIONS
      {
        type: 'color',
        feature: 'aboutBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveAboutShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveAbout',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      {
        type: 'color',
        feature: 'servicesBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveServiceShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveService',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      {
        type: 'color',
        feature: 'blogBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveBlogShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveBlog',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },
      {
        type: 'color',
        feature: 'clinicBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveClinicShow',
        value: 'true',
        comment: null,
      },
      {
        type: 'style',
        feature: 'waveClinic',
        value:
          'M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
        comment: null,
      },

      // FOOTER
      {
        type: 'color',
        feature: 'footerBgColor',
        value: '#1c211c',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footerTextColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footerButtonsColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footerButtonsHoverColor',
        value: '#131213',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footerLinksColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footerLinksHoverColor',
        value: '#ffffff',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footer2BgColor',
        value: '#131213',
        comment: null,
      },
      {
        type: 'color',
        feature: 'footer2TextColor',
        value: '#fefeff',
        comment: null,
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'instagram',
        value: 'https://www.instagram.com/lalaloberia/',
        comment: null,
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'facebook',
        value: 'https://www.facebook.com/lala.rodriguez.90857/',
        comment: null,
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'twitter',
        value: '',
        comment: null,
      },
      {
        type: 'CONTACT',
        feature: 'whatsapp',
        value:
          'https://wa.me/5492262470100?text=Hola, quiero recibir información',
        comment: null,
      },
      {
        type: 'CONTACT',
        feature: 'email',
        value: 'laurarodriguez@gmail.com',
        comment: null,
      },
      {
        type: 'CONTACT',
        feature: 'phone',
        value: '(02262) 15 470100',
        comment: null,
      },
      // Metadata
      {
        type: 'METADATA',
        feature: 'meta_description',
        value:
          'Web especializada en ginecología y sexología. Encontrarás información actualizada sobre la salud sexual femenina y para obtener el cuidado médico que necesita',
        comment: null,
      },
      {
        type: 'METADATA',
        feature: 'meta_title',
        value: 'Doctora Laura Rodriguez - Ginecóloga',
        comment: null,
      },
      {
        type: 'METADATA',
        feature: 'meta_canonical',
        value: 'http://hathayogaloberia.ga',
        comment: null,
      },
      {
        type: 'METADATA',
        feature: 'meta_url',
        value: 'http://hathayogaloberia.ga',
        comment: null,
      },

      // {
      //   type: 'STYLE',
      //   feature: 'button_color',
      //   value: '#531253',
      // },
      // {
      //   type: 'STYLE',
      //   feature: 'divisor_color',
      //   value: '#531253',
      // },
      // {
      //   type: 'STYLE',
      //   feature: 'effect_color',
      //   value: '#531253',
      // },
      // {
      //   type: 'STYLE',
      //   feature: 'error_color',
      //   value: 'ff0000',
      // },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
