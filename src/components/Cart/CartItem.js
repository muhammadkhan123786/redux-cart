import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/cartRedux/cartReducers';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  //const items = useSelector((state) => state.cartReducers.items);
  const item = props.item;
  const dispatch = useDispatch();
  const remove_Item = () => {
    dispatch(removeItem({ id: item.id }));
  };
  const add_item = () => {
    dispatch(addItem(item));
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
            <button onClick={remove_Item}>-</button>
            <button onClick={add_item}>+</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
