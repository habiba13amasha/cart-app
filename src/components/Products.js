import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap/lib/Tab';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../rtk/slices/product-slices';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addToCart} from '../rtk/slices/cart-slice';
function Products(){
    const Products=useSelector((state)=>state.products)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return(
        <>
       <Container className='py-5'>
        
        <div className='row py-5'  >
            {Products.map((product)=>(
               <div className='col'key={product.id}>
               <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} style={{height:"300px"}}/>
                <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                  {product.description}
                 </Card.Text>
                 <Card.Text>
                  {product.price}$
                 </Card.Text>
                 <Button variant="primary" onClick={()=>(dispatch(addToCart({product})))}>Add To Cart</Button>
                </Card.Body>
               </Card>
              </div>
            ))}
          
          
        </div>
        
     </Container>
        </>
    )
}
export default Products;