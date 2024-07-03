import axios from "axios";
import {useState, useEffect} from "react";
import ProdInput from "./product/ProdInput";
import ProdBox from "./product/ProdBox";

const Product = () => {



    const [products, setProducts] = useState([]);

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
            setProducts(data);
        } catch (err) {
            console.error(err);

            // 에러 구현
            setErr(true)
        }
    }
    
    useEffect(() => {getProducts()}, []);
    


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
                            <ProdBox key={prod.id} prod={prod} products={products} setProducts={setProducts}></ProdBox>
                        )
                    })
                }
            </div>
            <ProdInput products={products} setProducts={setProducts}></ProdInput>
        </main>
     );
}
 
export default Product;