
import { Container ,Table ,Button,Image} from "react-bootstrap/lib/Tab";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clear,deleteFromCart } from "../rtk/slices/cart-slice";


function Cart(){
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.cart);
    const totalPrice=cart.reduce((acc,product)=>{
      acc+=product.price*product.quantity;
      return acc;
    },0)
    return(
        <Container>
         <h1 className="py-7">Welcome to cart</h1>
         <Button varient="primary" className="mb-3" onClick={()=>dispatch(clear())}>ClearCart</Button>
         <h2>TotalPrice:{totalPrice.toFixed(2)} $</h2>
         <Table striped bordered hover size="sm" >
          <thead>
           <tr>
           
              <th>#</th>
              <th>Titel</th>
              <th>Price</th>
              <th>Img</th>
              <th>Quantity</th>
              <th>Actions</th>
           
            
           </tr>
          </thead>
          <tbody>
          {cart.map((product)=>(
           <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.titel}</td>
            <td>{product.price}$</td>
            <td>{product.quantity}</td>
            <td><Image src={product.image} alt={product.titel} style={{height:"100px" ,width:"100px"}} /></td>
            <td><Button varient="danger" onClick={()=>(dispatch(deleteFromCart(product)))}>DeleteFromCart</Button></td>
           </tr>
          ))}
          </tbody>
    </Table>
        </Container>
    )
}
export default Cart;