const appService = require('../services/appService');
const error = new Error();
error.status = 'NOT_FOUND';
error.message = null;

const appController = {
    
     /**
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
      test: async (req, res) => {
        res.send('testing environmetn')
    },

    /**
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
     products: async (req, res) => {
        try {
            let products = await appService.products(req, res);
            return helper.apiResponse(res, false, "Products fetch successfully", products);
        }
        catch (error) {
            const statusCode = error.status || "INTERNAL_SERVER_ERROR";
            return helper.apiResponse(res, true, error.message, null, statusCode);
        }
    }
}

module.exports = appController;