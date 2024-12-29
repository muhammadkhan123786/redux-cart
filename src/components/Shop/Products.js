import ProductItem from './ProductItem';
import classes from './Products.module.css';
const products = [
  {
    id: 1,
    price: 67,
    title: 'Test',
    description: 'This is a first product - amazing!',
  },
  {
    id: 2,
    price: 102,
    title: 'Mango',
    description: 'Mango are very tasty',
  },
  {
    id: 3,
    price: 130,
    title: 'Orange',
    description: 'Orange are sour.',
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
