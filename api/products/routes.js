const express = require('express');

const { getProducts, productCreate, productDelete, fetchProduct } = require('./controllers');

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
    const product = await fetchProduct(productId, next);
    if (product) {
        req.product = product
        next()
    } else {
        next({status: 404, message: "product not found"})
    }
})

router.get('/', getProducts);
router.post('/', productCreate);
router.delete('/:productId', productDelete);
router.put('/:productId', productUpdate);

module.exports = router;
