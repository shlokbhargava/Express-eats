import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, getOrderDetails } from '../actions/orderAction'
import Message from '../components/Message'
import Progress from '../components/Progress'
import { getStringPrice } from '../utility'

const ReviewOrderScreen = ({ history }) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems, paymentMethod } = cart
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const addressDetail = useSelector((state) => state.addressDetail)
    const { address } = addressDetail

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate

    const itemsPrice = Number(cartItems.reduce((acc, item) => acc + item.qty*item.price, 0).toFixed(2))
    const deliveryPrice = itemsPrice >= 500 ? 0 : 50
    const packagingPrice = Number((0.06*itemsPrice).toFixed(2))
    const gst = Number((0.05*itemsPrice).toFixed(2))
    const totalPrice = Number((itemsPrice+gst+packagingPrice+deliveryPrice).toFixed(2))

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            deliveryAddress: address._id,
            paymentMethod: paymentMethod,
            itemPrice: itemsPrice,
            gst: gst,
            deliveryPrice: deliveryPrice,
            packagingPrice: packagingPrice,
            totalPrice: totalPrice
        }))
    }

    useEffect(() => {
        if (success) {
            dispatch(getOrderDetails(order._id))
            history.push(`/order/${order._id}`)
        }
    }, [success, dispatch, history, order])

    return (
        <>
            <Progress step2 step3 step4 />   
            <br></br>
            <Container className='mt-3'>
                <Row>
                    <Col md={8}>
                    <h2>Review Order</h2>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <h4>1. Order Items</h4>
                                {cartItems.length === 0 ? <Message variant='danger'>Your Cart is Empty</Message> : (
                                    <ListGroup variant='flush'>
                                        {cartItems.map((item, index) => (
                                            <ListGroupItem key={index}>
                                                <Row>
                                                    <Col md={2}>
                                                        <Image src={item.image} alt={item.name} fluid thumbnail />
                                                    </Col>
                                                    <Col md={4}>
                                                        <strong>{item.name}</strong><br></br>
                                                        <p>Quantity: {item.qty}</p>
                                                        Delivery In : &nbsp; 30 Minutes
                                                    </Col>
                                                    <Col md={{ span: 3, offset: 3 }}>
                                                        {item.qty}&nbsp; x &nbsp;₹{getStringPrice(item.price)}&nbsp; = &nbsp;₹{getStringPrice(item.qty*item.price)}
                                                    </Col>
                                                </Row>
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroupItem>

                            <ListGroupItem>
                                <h4>2. Delivery</h4>
                                Name : <b>{userInfo.name}</b> <br></br>
                                Email : {userInfo.email} <br></br>
                                {address.address}, <br></br>
                                {address.city} - {address.postalCode}, <br></br>
                                {address.country} <br></br>
                            </ListGroupItem>

                            <ListGroupItem>
                                <h4>3. Payment Method</h4>
                                {paymentMethod}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <Card.Header as="h5">  
                                    <Row>
                                    <Col><b>Order total :</b></Col>  
                                    <Col><b>₹{ getStringPrice(totalPrice) }</b>
                                    </Col>
                                    </Row>
                                </Card.Header>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Items : </Col>
                                        <Col>₹{getStringPrice(itemsPrice)}</Col>
                                    </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col>GST : </Col>
                                        <Col>₹{getStringPrice(gst)}</Col>
                                    </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col>Packaging Charges : </Col>
                                        <Col>₹{getStringPrice(packagingPrice)}</Col>
                                    </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col>Delivery Charges : </Col>
                                        <Col>₹{getStringPrice(deliveryPrice)}</Col>
                                    </Row>
                                </ListGroupItem>
                                        
                                <ListGroupItem>
                                    <div className="d-grid gap-2">
                                        <Button type='button' variant='dark' disabled={cartItems.length === 0} onClick={placeOrderHandler} block>
                                            Pay & Confirm
                                        </Button>
                                    </div>
                                </ListGroupItem>                            
                            </ListGroup>
                        </Card>
                        { error && <Message variant='danger'>Order can't be placed{error}</Message> }
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default ReviewOrderScreen