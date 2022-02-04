## Adding cloudinary to strapi 


## If you are using older version of Strapi then this works fine for you. But if you are using the lastest version then scroll down.

To connect cloudinary to strapi We need to first install this package below.

```
yarn add strapi-provider-upload-cloudinary

# using npm
npm install strapi-provider-upload-cloudinary

```

Now at this stage you need restart your server.

Then create a file name *plugins.js* inside the ***config*** folder, and paste the following code into it:

```
module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_API_KEY'),
      api_secret: env('CLOUDINARY_API_SECRET'),
    },
  },    
});

```


Fill the missing values with the corresponding values found in your Cloudinary dashboard.

```
CLOUDINARY_NAME = ********************
CLOUDINARY_API_KEY = *****************
CLOUDINARY_API_SECRET = **************

```

Now you need to restart your server.



## If you are using the lastest version of strapi then you need to install this package

```
yarn add @strapi/provider-upload-cloudinary

# using npm
npm install @strapi/provider-upload-cloudinary --save
```

and update your *plugin.js* file with this 

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