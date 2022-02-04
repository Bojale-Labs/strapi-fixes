## Strapi not uploading pictures to Cloudinary


One of the first thing to look at for is to update your nodejs verson to ^14.17.6 and above.


Now let's go ahead and install this package

```
yarn add @strapi/provider-upload-cloudinary

# using npm
npm install @strapi/provider-upload-cloudinary --save
```

After installation we need to go update the *plugin.js* file inside the *config* folder with this below

```
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  
});

```

Due to the default settings in the Strapi Security Middleware you will need to modify the contentSecurityPolicy settings to properly see thumbnail previews in the Media Library.

Inside the *config* folder open the *middlewares.js* and paste this there.

```
module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];

```

Now you need to restart your server.
