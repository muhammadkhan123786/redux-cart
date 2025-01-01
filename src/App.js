import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendData } from './store/cartRedux/cartReducers';
let initialvalue = true;
function App() {
  const cart = useSelector((state) => state.cartReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialvalue) {
      initialvalue = false;
      return;
    }
    dispatch(sendData(cart));
  }, []);

  return (
    <Fragment>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
