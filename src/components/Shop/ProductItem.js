import { useDispatch, useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { updateItemsRed } from '../../store/cartRedux/cartReducers';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducers.items);

  const addProductHandler = () => {
    let updateItems = items.slice();

    const existingItemIndex = updateItems.findIndex(
      (Myitem) => Myitem.id === item.id
    );
    if (existingItemIndex > -1) {
      updateItems = updateItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updateItems.push({ ...item, quantity: 1 });
    }
    const updateItemsFn = {
      newItems: updateItems,
    };

    dispatch(updateItemsRed(updateItemsFn));
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
