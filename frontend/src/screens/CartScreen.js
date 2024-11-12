import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function CartScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col>
                {/* <h1>Shopping Cart</h1> */}
                <h1>관심 상품</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        즐겨찾기한 향수가 없습니다.
                    </Message>
                ) : (
                    <div>
                    <Row>
                        {cartItems.map(item => (
                            <Col key={item.product} sm={12} md={6} lg={4} xl={3}>
                                <Card className="my-3 p-3 rounded" style={{ height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> 

                                    <Link to={`/product/${item.product}`}>
                                        <Card.Img src={item.image} alt={item.name} fluid rounded />
                                    </Link>
                                    <Button
                                        type='button'
                                        variant='light'
                                        style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', fontSize: '1.3rem' }}
                                        onClick={() => removeFromCartHandler(item.product)}
                                    >
                                        <FontAwesomeIcon icon={faTrash}color={'#666a73'} />
                                    </Button>

                                    <Card.Body>
                                    <Link to={`/product/${item.product}`}>
                                        <Card.Title as="div">
                                            <h4>{item.name}</h4>
                                        </Card.Title>
                                    </Link>
                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                    )}
            </Col>

            {/* <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>


                </Card>
            </Col> */}
        </Row>
    )
}

export default CartScreen