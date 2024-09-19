import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <Container className='pb-3' style={{ position: 'relative', textAlign: 'center' }}>
            <Link to={`/survey`}>
                <img src="/images/banner.jpg" style={{ width: '100%' }} alt="Banner"></img>

                {/* "당신의 향을 찾아드립니다" 문구 */}
                <h2 
                    style={{ 
                        position: 'absolute', 
                        top: '40%',
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        color: '#474040', 
                        fontSize: '2.5rem', 
                        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' 
                    }}
                >
                    당신의 향을 찾아드립니다.
                </h2>

                {/* "설문조사 하러가기" 문구 */}
                <h1 
                    style={{ 
                        position: 'absolute', 
                        top: '67%',
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        color: '#474040', 
                        fontSize: '2rem', 
                        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        border: '2px solid #474040',  // 흰색 테두리
                        padding: '10px 20px',       // 내부 여백
                        borderRadius: '10px',        // 모서리 둥글게
                        // backgroundColor: 'rgba(0, 0, 0, 0.5)'  // 약간의 배경색 추가 (반투명 검정)
                    }}
                >
                    설문 시작하기
                </h1>
            </Link>
        </Container>
    )
}

export default Banner
