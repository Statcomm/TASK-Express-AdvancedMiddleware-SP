const Product = require('../../models/Product');

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product
  } catch (error) {
    next(error)
  }
}

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
exports.productDelete = async (req, res) => {
  try {
 await Product.findByIdAndDelete({_id: req.product.id});
      return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.productUpdate = async (req, res) => {
  try {
    const foundProduct = await Product.findByIdAndUpdate(
      {_id: req.product.id}, 
      req.body,
      {new:true, runValidators: true});

      return res.json(foundProduct);

  } catch (error) {
    next(error);
  }
};
