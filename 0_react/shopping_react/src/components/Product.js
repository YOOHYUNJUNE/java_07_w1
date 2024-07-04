import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import ProdInput from "./product/ProdInput";
import ProdBox from "./product/ProdBox";

const productReducer = (state, action) => {

    switch(action.type) {
        // state: []
        // action : {type: 'SET_PRODUCTS', payload: data}
        case 'SET_PRODUCTS' :
            return action.payload;
        case 'ADD_PRODUCT' :
            return [...state, action.payload];
        case 'EDIT_PRODUCT' :
            return state.map(p => (action.payload.id == p.id ? action.payload : p))
        case "DELETE_PRODUCT" :
            return state.filter(p => (p.id != action.payload))
    }
}
const Product = () => {

    // const [products, setProducts] = useState([]);
    // useReducer
    const [products, dispatch] = useReducer(productReducer, [])

    // 로딩화면 함수
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);



    // const getProducts = () => {
    //     axios.get('http://localhost:8080/products') // 데이터를 보냄
    //         .then(res => res.data) // 성공시
    //         .then(data => setProducts(data))
    //         .catch(err => console.error(err))
    // }

    const getProducts = async() => {
        try {
            const res = await axios.get('http://localhost:8080/products')
            // 로딩화면 구현
            setLoading(false)
            const data = res.data;
            dispatch({type: 'SET_PRODUCTS', payload: data}); // 초기값 세팅
        } catch (err) {
            console.error(err);

            // 에러 구현
            setErr(true)
        }
    }
    
    useEffect(() => {getProducts()}, []); // [product]가 있을 경우 무한 반복
    


    // 로딩화면 구현
    if (err) {
        return <div>에러발생</div>
    }
    if (loading) {
        return <div>로딩 중...</div>
    }
    
    


    return ( 
        <main>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {
                    products.map(prod => {
                        return (
                            <ProdBox key={prod.id} prod={prod} dispatch={dispatch}></ProdBox>
                        )
                    })
                }
            </div>
            <ProdInput dispatch={dispatch}></ProdInput>
        </main>
     );
}
 
export default Product;