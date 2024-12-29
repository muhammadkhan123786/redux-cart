import { useDispatch } from 'react-redux';
import { ADD_ITEM, REMOVE_ITEM } from '../../store/cartRedux/cartActions';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  //const items = useSelector((state) => state.cartReducers.items);
  const item = props.item;
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(REMOVE_ITEM(item.id));
  };
  const addItem = () => {
    dispatch(ADD_ITEM(item));
  };
  return (
    <>
      <li key={item.id} className={classes.item}>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>
            ${((item?.quantity || 0) * (item?.price || 0)).toFixed(2)}{' '}
            <span className={classes.itemprice}>
              (${(item?.price || 0).toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeItem}>-</button>
            <button onClick={addItem}>+</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
