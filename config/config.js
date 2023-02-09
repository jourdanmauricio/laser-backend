require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  adminFrontEnd: process.env.ADMIN_FRONTEND,
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,

  revalidateToken: process.env.REVALIDATE_TOKEN,
  jwtSecret: process.env.JWT_SECRET,

  adminEmail: process.env.ADMIN_EMAIL,
  adminPass: process.env.ADMIN_PASS,
  adminRole: process.env.ADMIN_ROLE,
  superadminEmail: process.env.SUPERADMIN_EMAIL,
  superadminPass: process.env.SUPERADMIN_PASS,
  superadminRole: process.env.SUPERADMIN_ROLE,

  domain: process.env.DOMAIN,
  apiFrontend: process.env.API_FRONTEND,

  mailerEmail: process.env.MAILER_EMAIL,
  mailerPassword: process.env.MAILER_PASSWORD,

  emailSend: process.env.EMAIL_SEND,
  emailSendPass: process.env.EMAIL_SEND_PASS,
  emailTo: process.env.EMAIL_TO,
};

module.exports = { config };
