import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import axios from 'axios'
import Product2 from '../components/Product2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartS } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartR} from '@fortawesome/free-regular-svg-icons'
import Product2NoName from '../components/Product2NoName'

function ProductScreen({ match, history }) {
    // v1
    // const product = products.find((p) => p._id == match.params.id)

    // v2 - axios
    // const [ product, setProduct] = useState([])
    // useEffect(()=> {
    //     async function fetchProduct() {
    //         const {data} = await axios.get('/api/products/${match.params.id}')
    //         setProduct(data)
    //     }
    //     fetchProduct()
    // }, [])

    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    const rp1=product._id * 10 % 30000;
    const rp2=product._id * 11 % 30000;
    const rp3=product._id * 12 % 30000;
    const rp4=product._id * 13 % 30000;
    const product1 = [
        {
          "_id": rp1,
          "image": `https://fimgs.net/mdimg/perfume/375x500.${rp1}.jpg`,
          "reviews": [],
          "name": "Scent of Dubrovnik",
          "brand": "Macal Palma",
          "accords": "citrus,woody,balsamic,powdery,floral,warm spicy",
          "season": "winter",
          "gender": "women",
          "daynight": "1",
          "longevity": 4,
          "sillage": 2,
          "top": "bergamot,orange",
          "middle": "rose,lily-of-the-valley,jasmine,cinnamon,pink pepper",
          "base": "amber,vanilla,patchouli,sandalwood",
          "rating": "5.00",
          "numReviews": 5,
          "createdAt": null,
          "user": null
        },
        {
          "_id": rp2,
          "image": `https://fimgs.net/mdimg/perfume/375x500.${rp2}.jpg`,
          "reviews": [],
          "name": "Les Quatre Saisons - Muguet de Printemps",
          "brand": "Guerlain",
          "accords": "floral,rose,white floral,citrus,green",
          "season": "autumn",
          "gender": "women",
          "daynight": "2",
          "longevity": 1,
          "sillage": 4,
          "top": "jasmine,lily-of-the-valley,bergamot,rose",
          "middle": "",
          "base": "",
          "rating": "5.00",
          "numReviews": 4,
          "createdAt": null,
          "user": null
        },
        {
          "_id": rp3,
          "image": `https://fimgs.net/mdimg/perfume/375x500.${rp3}.jpg`,
          "reviews": [],
          "name": "Cognac",
          "brand": "Aftelier",
          "accords": "woody,fresh spicy,sweet,citrus,warm spicy,fruity",
          "season": "winter",
          "gender": "women,men",
          "daynight": "1",
          "longevity": 3,
          "sillage": 4,
          "top": "cognac,ginger,olive,bitter orange",
          "middle": "",
          "base": "",
          "rating": "5.00",
          "numReviews": 2,
          "createdAt": null,
          "user": null
        },
        {
          "_id": rp4,
          "image": `https://fimgs.net/mdimg/perfume/375x500.${rp4}.jpg`,
          "reviews": [],
          "name": "Beleza",
          "brand": "Abinoam",
          "accords": "powdery,woody,musky,vanilla,balsamic,floral",
          "season": "winter",
          "gender": "women,men",
          "daynight": "1",
          "longevity": 2,
          "sillage": 4,
          "top": "musk,orchid,tahitian vanilla",
          "middle": "",
          "base": "",
          "rating": "5.00",
          "numReviews": 2,
          "createdAt": null,
          "user": null
        },
        {
          "_id": 3754,
          "image": "https://fimgs.net/mdimg/perfume/375x500.3754.jpg",
          "reviews": [],
          "name": "Garden Sensuel",
          "brand": "Guerlain",
          "accords": "white floral,aromatic,sweet,citrus,balsamic,yellow floral",
          "season": "winter",
          "gender": "women",
          "daynight": "2",
          "longevity": 3,
          "sillage": 1,
          "top": "rose",
          "middle": "gardenia,peach,ylang-ylang",
          "base": "sandalwood,tonka bean,vanilla",
          "rating": "5.00",
          "numReviews": 10,
          "createdAt": null,
          "user": null
        }
      ]

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match, successProductReview])

    const [isFavorite, setIsFavorite] = useState(false);

    const addToCartHandler = () => {
        setIsFavorite(!isFavorite)
        history.push(`/cart/${match.params.id}?qty=${qty}`)  // 이동
    }

    const addToFavorites = () => {
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={7} className="d-flex justify-content-center">
                                    <div md={6}>
                                    <Image src={product.image} alt={product.name} fluid />
                                    </div>
                                    
                                    <div md={6}>

                                    </div>
                                </Col>

                                <Col md={5}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                            <h5>{product.brand}</h5>
                                            <FontAwesomeIcon 
                                                icon={isFavorite ? faHeartS : faHeartR} 
                                                onClick={addToCartHandler} 
                                                type='button'
                                                color={'#db4455'} style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '1.5rem' }}/>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        {product.accords && (
                                            <ListGroup.Item>
                                                <h5 className='text-warning'>accords:</h5> 
                                                <h5>{product.accords.split(',').map(item => item.trim()).join(', ')}</h5>
                                            </ListGroup.Item>
                                        )}

                                        <ListGroup.Item>
                                            {product.top && (
                                                <>
                                                    <h5 className='text-warning'>Top:</h5>
                                                    <h5>{product.top.split(',').map(item => item.trim()).join(', ')}</h5>
                                                </>
                                            )}

                                            {product.middle && (
                                                <>
                                                    <h5 className='text-warning'>Middle:</h5>
                                                    <h5>{product.middle.split(',').map(item => item.trim()).join(', ')}</h5>
                                                </>
                                            )}

                                            {product.base && (
                                                <>
                                                    <h5 className='text-warning'>Base:</h5>
                                                    <h5>{product.base.split(',').map(item => item.trim()).join(', ')}</h5>
                                                </>
                                            )}
                                        </ListGroup.Item>

                                        

                                        <ListGroup.Item>
                                            {product.description}
                                        </ListGroup.Item>

                                    </ListGroup>
                                </Col>


                                {/* <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            {
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {
                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }
                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            }


                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col> */}
                            </Row>


                            <Row>
                                <h3>이 향수와 유사한 향수</h3>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
                                <Row>
                                    {product1.slice(0, 4).map(product => (    // products
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product2NoName product={product} />
                                    </Col>
                                    ))}
                                </Row>
                                

                            </Row>
                            
                            <Row>
                                <Col md={12}>
                                    <h3>상품 사용 후기</h3>
                                    {product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {product.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>리뷰 작성하기</h4>

                                            {loadingProductReview && <Loader />}
                                            {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1 - Poor</option>
                                                            <option value='2'>2 - Fair</option>
                                                            <option value='3'>3 - Good</option>
                                                            <option value='4'>4 - Very Good</option>
                                                            <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                        </div>
                    )

            }


        </div >
    )
}

export default ProductScreen
