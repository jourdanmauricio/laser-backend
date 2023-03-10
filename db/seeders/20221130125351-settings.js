'use strict';

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('settings', [
      // NAV
      {
        type: 'image',
        feature: 'logoImage',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1677218204/laura_rodriguez/logo_desktop.svg',
      },
      {
        type: 'color',
        feature: 'navBgColor',
        value: '#eff6ff',
      },
      {
        type: 'color',
        feature: 'navTextColor',
        value: '#1f2937',
      },
      {
        type: 'stcoloryle',
        feature: 'navHoverColor',
        value: '#000000',
      },
      {
        type: 'color',
        feature: 'navCurrentPageColor',
        value: '#14b8a6',
      },
      // HERO
      {
        type: 'image',
        feature: 'heroImage',
        value:
          'https://res.cloudinary.com/dn7npxeof/image/upload/v1676950615/laura_rodriguez/home.jpg',
      },
      {
        type: 'style',
        feature: 'heroOpacity',
        value: '0.3',
      },
      {
        type: 'text',
        feature: 'heroText',
        value:
          '<h1 class="ql-align-center"><strong style="color: rgb(255, 255, 204);">﻿Doctora Laura Rodriguez</strong></h1>',
      },
      {
        type: 'color',
        feature: 'heroTextColor',
        value: '#fff',
      },
      {
        type: 'style',
        feature: 'heroTop',
        value: '50%',
      },
      // BODY
      {
        type: 'color',
        feature: 'bodyBgColor',
        value: '#f3f4f6',
      },
      // SECTIONS
      {
        type: 'color',
        feature: 'aboutBgColor',
        value: '#f3f4f6',
      },
      {
        type: 'color',
        feature: 'servicesBgColor',
        value: '#f3f4f6',
      },
      {
        type: 'color',
        feature: 'blogBgColor',
        value: '#f3f4f6',
      },
      // FOOTER
      {
        type: 'color',
        feature: 'footerBgColor',
        value: '#161716',
      },
      {
        type: 'color',
        feature: 'footerTextColor',
        value: '#ffffff',
      },
      {
        type: 'color',
        feature: 'footerButtonsColor',
        value: '#ffffff',
      },
      {
        type: 'color',
        feature: 'footerButtonsHoverColor',
        value: '#131213',
      },
      {
        type: 'color',
        feature: 'footerLinksColor',
        value: '#ffffff',
      },
      {
        type: 'color',
        feature: 'footerLinksHoverColor',
        value: '#ffffff',
      },
      {
        type: 'color',
        feature: 'footer2BgColor',
        value: '#131213',
      },
      {
        type: 'color',
        feature: 'footer2TextColor',
        value: '#fefeff',
      },
      // SOCIAL MEDIA
      {
        type: 'SOCIAL_MEDIA',
        feature: 'instagram',
        value: 'https://www.instagram.com/lalaloberia/',
      },
      {
        type: 'SOCIAL_MEDIA',
        feature: 'facebook',
        value: 'https://www.facebook.com/lala.rodriguez.90857/',
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
          'https://wa.me/5492262470100?text=Hola, quiero recibir información',
      },
      {
        type: 'CONTACT',
        feature: 'email',
        value: 'laurarodriguez@gmail.com',
      },
      {
        type: 'CONTACT',
        feature: 'phone',
        value: '(02262) 15 470100',
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
