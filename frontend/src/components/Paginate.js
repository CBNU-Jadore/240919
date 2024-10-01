import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    const pageLimit = 10; // 표시할 페이지 수
    let startPage, endPage;

    if (pages <= pageLimit) {
        // 전체 페이지 수가 pageLimit 이하이면 모두 표시
        startPage = 1;
        endPage = pages;
    } else if (page <= Math.ceil(pageLimit / 2)) {
        // 현재 페이지가 중앙 값 이하이면 처음 pageLimit 개의 페이지를 표시
        startPage = 1;
        endPage = pageLimit;
    } else if (page + Math.floor(pageLimit / 2) >= pages) {
        // 현재 페이지가 마지막에서 중앙 값 이내일 때 마지막 pageLimit 개의 페이지를 표시
        startPage = pages - pageLimit + 1;
        endPage = pages;
    } else {
        // 그 외의 경우 현재 페이지 기준으로 좌우로 필요한 만큼 표시
        startPage = page - Math.floor(pageLimit / 2);
        endPage = page + Math.floor(pageLimit / 2);
    }

    return (
        pages > 1 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination >
                {/* First Button */}
                <LinkContainer
                    to={!isAdmin ?
                        `/?keyword=${keyword}&page=1`
                        : `/admin/productlist/?keyword=${keyword}&page=1`
                    }
                    disabled={page === 1}
                >
                    <Pagination.First disabled={page === 1} />
                </LinkContainer>

                {/* Previous Button */}
                <LinkContainer
                    to={!isAdmin ?
                        `/?keyword=${keyword}&page=${page - pageLimit}`
                        : `/admin/productlist/?keyword=${keyword}&page=${page - pageLimit}`
                    }
                    disabled={page === 1}
                >
                    <Pagination.Prev disabled={page === 1} />
                </LinkContainer>

                {/* Page Number Buttons (항상 pageLimit개씩 보이도록 설정) */}
                {[...Array(endPage - startPage + 1).keys()].map((x) => (
                    <LinkContainer
                        key={startPage + x}
                        to={!isAdmin ?
                            `/?keyword=${keyword}&page=${startPage + x}`
                            : `/admin/productlist/?keyword=${keyword}&page=${startPage + x}`
                        }
                    >
                        <Pagination.Item active={startPage + x === page}>{startPage + x}</Pagination.Item>
                    </LinkContainer>
                ))}

                {/* Next Button */}
                <LinkContainer
                    to={!isAdmin ?
                        `/?keyword=${keyword}&page=${page + pageLimit}`
                        : `/admin/productlist/?keyword=${keyword}&page=${page + pageLimit}`
                    }
                    disabled={page === pages}
                >
                    <Pagination.Next disabled={page === pages} />
                </LinkContainer>

                {/* Last Button */}
                <LinkContainer
                    to={!isAdmin ?
                        `/?keyword=${keyword}&page=${pages}`
                        : `/admin/productlist/?keyword=${keyword}&page=${pages}`
                    }
                    disabled={page === pages}
                >
                    <Pagination.Last disabled={page === pages} />
                </LinkContainer>
            </Pagination>
            </div>
        )
    )
}

export default Paginate
