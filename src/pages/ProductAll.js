import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard } from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

export const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const [error, setError] = useState('');

    const getProducts = async () => {
        try {
            let keyword = query.get("q") || "";
            /* let url = `http://localhost:5000/products?q=${keyword}`; */
            let url= `https://my-json-server.typicode.com/ImZeik/peachaNlily/products/${keyword}`;
            let response = await fetch(url);
            let data = await response.json();
            setProductList(data);

            if (data.length < 1) {
                if (keyword !== "") {
                    setError(`${keyword}와 일치하는 상품이 없습니다`);
                } else {
                    throw new Error("결과가 없습니다.");
                }
            } 
            setProductList(data)
        } catch (error) {
            setError('데이터를 불러오는 중에 오류가 발생했습니다.')
        }
    };

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <Container>
            {error && <p>{error}</p>}
            <Row className='product_list'>
                {productList.map((item, index) => (
                    <Col lg={3} key={index}>
                        <ProductCard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
