import React, { useState, useEffect} from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(product)
  const getProductDetail = async () => {
    /* let url = `https://my-json-server.typicode.com/HeoSsaM/peachnlily/products/${id}`; */
    let url = `https://my-json-server.typicode.com/HeoSsaM/peachnlily/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <Row className="product-detail">
        <Col className="productDetail-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div className="new">{product?.new === true ? "[신상품]" : ""}</div>
          <div className="title">{product?.title}</div>
          <div className="content">{product?.content}</div>
          <div className="price">{product?.price}</div>
          <div className="choie">
            {product?.new === true ? "new product" : ""}
          </div>
          
          <Button variant="dark">주문하기</Button>
         </Col>
      </Row>
    </div>
  )
}
