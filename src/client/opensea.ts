// https://dash.readme.io/api/v1/api-registry/4vnv6l38vynjp
const sdk = require('api')('@opensea/v1.0#4vnv6l38vynjp');

sdk['retrieving-collection-stats-testnets']({collection_slug: 'opensea-creature'})
  .then(res => console.log(res))
  .catch(err => console.error(err));
