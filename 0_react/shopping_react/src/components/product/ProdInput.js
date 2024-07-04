import styled from "styled-components";

// 입력할 수 있는 화면

import axios from "axios";
import { useState } from "react";

const ProdInput = ({products, setProducts}) => {
    
    // 상품 추가 state
    const [newProduct, setNewProduct] = useState({name: "", description: "", price: 0});

    // input 입력값이 반영되는 함수
    const handleChange = (e) => {
        const name = e.target.name; // name = 'name' 'price' 부분
        const value = e.target.value; // 입력값
        // const {name, value} = e.target;
        setNewProduct({...newProduct, [name] : value})

        // 최신 문법
        // setNewProduct(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    // products 추가 버튼, 새로고침X 즉시 반영
    const handleAddProd = async() => {
        // if (!products.name || products.price) {
        //     alert('내용을 입력해주세요.')
        // }

        try {
            const res = await axios.post('http://localhost:8080/products', newProduct);
            const newProd = res.data
            setProducts([...products, newProd])
            
        } catch(err) {
            console.error(err)
        }
    }


    return ( 
        <div>
            이름: <input type="text" name='name' value={newProduct.name} onChange={handleChange}></input>
            <br/>
            가격 : <input type="number" name='price' min="0" step="1000" value={newProduct.price} onChange={handleChange}></input>
            <br/>
            설명 : <textarea name='description' value={newProduct.description} onChange={handleChange}></textarea>
            <br/><br/>
            <ProdBtn onClick={handleAddProd} style={{width: '200px', height: '100px'}}>추가하기</ProdBtn>
        </div>
     );
}

const ProdBtn = styled.button`
    background-color: ${props => props.primary ? "aqua" : props.danger ? "orangered" : "white"};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    cursor: pointer;
`
 
export default ProdInput;