module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '343f4320f1bbeef5330261135b10f418'),
  },
});
