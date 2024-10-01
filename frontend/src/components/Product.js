import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    
    return (
        // <Card className="my-3 p-3 rounded">
        <Card className="my-3 p-3 rounded" style={{ height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> 
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <h4>{product.name}</h4>
                    </Card.Title>
                </Link>
                
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} color={'#f8e825'} />
                    </div>
                </Card.Text>
                
                <Card.Text as="div">
                    <div>
                        <h5>{product.numReviews}개 리뷰</h5>
                    </div>
                </Card.Text>

                {/* <Card.Text as="h3">
                    ${product.price}
                </Card.Text> */}

            </Card.Body>
        </Card>
    )
}

export default Product
