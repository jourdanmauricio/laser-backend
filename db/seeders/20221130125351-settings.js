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
          '<h1 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Doctora Laura Rodriguez</span></h1><h2 class="ql-align-center"><span style="color: rgb(255, 255, 255);">Ginecologa</span></h2>',
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
        value: '46%',
        comment: null,
      },
      {
        type: 'style',
        feature: 'heroPosX',
        value: 'center',
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
        type: 'color',
        feature: 'aboutBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'color',
        feature: 'aboutTextColor',
        value: '#1e293b',
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
      // SERVICES
      {
        type: 'color',
        feature: 'servicesBgColor',
        value: '#ebebeb',
        comment: null,
      },
      {
        type: 'color',
        feature: 'servicesTextColor',
        value: '#1e293b',
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
      // BLOG
      {
        type: 'color',
        feature: 'blogBgColor',
        value: '#f3f4f6',
        comment: null,
      },
      {
        type: 'color',
        feature: 'blogTextColor',
        value: '#1e293b',
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
        type: 'color',
        feature: 'clinicBgColor',
        value: '#ebebeb',
        comment: null,
      },
      {
        type: 'color',
        feature: 'clinicTextColor',
        value: '#0f172a',
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
      // SOCIAL MEDIA
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
      // METADATA
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
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
