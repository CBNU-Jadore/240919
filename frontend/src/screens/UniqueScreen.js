import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import Product2 from '../components/Product2'
import { listDailyRecommendations } from '../actions/productActions'


function UniqueScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    //////
    const perfumeDaily = useSelector(state => state.perfumeDaily)
    const { error: error1, loading: loading1, products: products1 } = perfumeDaily
    useEffect(() => {
        dispatch(listDailyRecommendations())
    }, [dispatch])
    ///////
    console.log(products1)

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])


    const product1 = [
        {
          "_id": 3640,
          "image": "https://fimgs.net/mdimg/perfume/375x500.3640.jpg",
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
          "_id": 3462,
          "image": "https://fimgs.net/mdimg/perfume/375x500.3462.jpg",
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
          "_id": 983,
          "image": "https://fimgs.net/mdimg/perfume/375x500.983.jpg",
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
          "_id": 938,
          "image": "https://fimgs.net/mdimg/perfume/375x500.938.jpg",
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
      


    return (
        <div>
            <h1>'사용자'님을 위한 향수</h1>
            <h4>평가한 향수를 바탕으로 추천해드려요.</h4>
            {/* {!keyword && <ProductCarousel />} */}
            <ProductCarousel />
            <hr></hr>
            <h1>상황별 추천 향수</h1>

            <h2>데일리</h2>
            {/* {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {console.log(products)}
                            {product1.slice(0,4).map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product2 product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            } */}
            {loading1 ? <Loader />
                : error1 ? <Message variant='danger'>{error1}</Message>
                    :
                    <div>
                        <Row>
                            {products1.slice(0,4).map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product2 product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }

            <h2>비즈니스</h2>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.slice(4, 8).map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product2 product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }

            <h2>소개팅</h2>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.slice(0, 4).map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product2 product={product} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }

        </div>
    )
}

export default UniqueScreen
