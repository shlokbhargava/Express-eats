import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../components/Message'

const CartScreen = () => {
    return (
        <Container className='mt-5'>
            <Row> 
                <Col md={8}>
                    {/* { 
                        cartItems.reduce((acc, item) => acc + item.qty*item.price, 0) >= 500 ? "" : cartItems.length === 0 ? "" : 
                        <Alert variant="dark">
                            <Alert.Heading>Get Free Delivery!</Alert.Heading>
                            <Message variant="dark">
                                Add items worth <b>₹{(500 - cartItems.reduce((acc, item) => acc + item.qty*item.price, 0).toFixed(2)).toFixed(2)}</b> more for free delivery 
                                &nbsp;<Link to='/'> Add Items <i className="fas fa-arrow-circle-right"></i></Link>
                            </Message>
                        </Alert>
                    } */}
                    <h1>Your Food Cart</h1>
                    {/* { cartItems.length === 0 ?  */}
                    <Message>
                        Your Cart is empty
                        <Link to='/'> Browse Restaurants <i className="fas fa-arrow-circle-right"></i></Link>
                    </Message> : 
                    {/* <ListGroup>
                        { cartItems.map(item => (
                            <ListGroupItem key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ₹{getStringPrice(item.price)}
                                    </Col>
                                    <Col md={2}>
                                        <FormControl as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </FormControl>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="light" onClick={() => removeFromCartHandler(item.product)}> <i className="fas fa-trash"></i> </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )) }
                    </ListGroup>
                    }
                </Col>
                
                <Col md={4}>
                    <br></br>
                    <br></br>
                    <Card>
                        <ListGroup variant='flush'>
                            <Card.Header as='h5'><b>Cart total : ₹{ getStringPrice(cartItems.reduce((acc, item) => acc + item.qty*item.price, 0)) }</b>
                            </Card.Header>
                            <ListGroupItem>
                                <Row>
                                    <Col>Quantity : </Col>
                                    <Col>( {cartItems.reduce((acc, item) => acc + item.qty, 0)} items )</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Shipping Charges : </Col>
                                    <Col>{ cartItems.reduce((acc, item) => acc + item.qty*item.price, 0) >= 500 ? "FREE" : cartItems.length === 0 ? "" : "₹50.00"}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Delivery By : </Col>
                                    <Col>{cartItems.length === 0 ? "" : getDeliveryDate(3)}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button variant="primary" disabled={cartItems.length === 0} onClick={checkoutHandler} block>Proceed to Checkout</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card> */}
                </Col>
            </Row>
        </Container>
    )
}

export default CartScreen