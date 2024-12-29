import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { ADD_ITEM } from '../../store/cartRedux/cartActions';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(ADD_ITEM(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${(item?.price || 0).toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={addProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
