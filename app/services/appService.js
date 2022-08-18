const fetch = require('node-fetch');

const appService = {

    products: async (data) => {
        let _URL = `https://${process.env.STORE_URL}/admin/api/2021-10/products.json`;
        return await ((await fetch(_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': process.env.SHOPIFY_APP_TOKEN
            }
        })).json());
    }
}

module.exports = appService;