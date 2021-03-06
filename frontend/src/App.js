import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import SellerRegisterScreen from "./screens/SellerRegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SellerDashboard from "./screens/SellerDashboard";
import EditDishScreen from "./screens/EditDishScreen";
import EditRestaurantScreen from "./screens/EditRestaurantScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ReviewOrderScreen from "./screens/ReviewOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderList from "./screens/OrderList";
import MyOrdersScreen from "./screens/MyOrdersScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/cart' component={CartScreen} />
          <Route path='/seller/register' component={SellerRegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/dashboard' component={SellerDashboard} exact />
          <Route path='/restaurant/edit' component={EditRestaurantScreen} />
          <Route path='/restaurant/:id' component={RestaurantScreen} />
          <Route path='/dish/:id/edit' component={EditDishScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/revieworder' component={ReviewOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/my-orders' component={MyOrdersScreen} />
          <Route path='/orderlist' component={OrderList} />

          <ToastContainer
            theme='dark'
            position="bottom-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
