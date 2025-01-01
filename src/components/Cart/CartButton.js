import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleCart } from '../../store/uiRedux/uiSlice';

const CartButton = () => {
  const items = useSelector((state) => state.cartReducers.items);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(toggleCart());
  };
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
