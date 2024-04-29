import React from 'react';
import { useNavigate } from 'react-router-dom';
//import styled from 'styled-components';

/* const NewItem = styled.div`
  background: ${props => props.isNew ? '#fd6562' : 'transparent'};
  color: ${props => props.isNew ? '#fff' : '#585858'};
  padding: 3px 5px;
  font-size: 15px;
`; */

export const ProductCard = ({ item }) => {
    // isNew prop을 사용하여 새 상품 여부를 NewItem에 전달
    // `item.new`가 undefined일 수 있으므로, boolean 값으로 변환
    // item이 존재하고 그 속성 중에 new가 있는 경우에만 isNew 변수를 true로 설정
    //!! 연산자는 값을 불리언 값으로 강제 변환시키는 데 사용. 
    //!! 연산자는 값이 존재하면 true로, 값이 존재하지 않으면 false로 변환
    const isnew = !!item?.new;  
    const navigate = useNavigate();
    
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div className='product_info' onClick={showDetail}>
            <div className="img_box"><img src={item?.img} alt={item?.title} /></div>
            <div className="top">
                <div className="item_new"
                 style={{
                    backgroundColor: isnew ? "#fd6562" : "transparent",
                    color: isnew? "#fff" : "#585858"
                 }}
                >
                    {item?.new? "New Product" : ""}
                </div>
                <div className="item_title">{item?.title}</div>
            </div>
            <div className="bottom">
                <span className="item_price">＄{item?.price}</span>
                <span className="item_discount">{item?.discount == true ? "Sale item" : ""}</span>
            </div>
        </div>
    )
}
