import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


function Product2({ product }) {
    
    return (
        // <Card className="my-3 p-3 rounded">
        <Card className="my-3 p-3 rounded" style={{ height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> 
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            {/* <FontAwesomeIcon icon={faHeart} color={'#db4455'} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '1.5rem' }}/> */}

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <h4>{product.name}</h4>
                    </Card.Title>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default Product2
