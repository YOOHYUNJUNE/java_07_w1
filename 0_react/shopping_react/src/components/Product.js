import axios from "axios";
import {useState, useEffect} from "react";

const Product = () => {

    const temp = [
        {name: '후라이드 치킨', price: '8000', },
        {name: '양념 치킨', price: '9000', },
        {name: '간장 치킨', price: '8500', },
        {name: '마라 치킨', price: '9000', },
        {name: '훈제 치킨', price: '9000', },
        {name: '떡볶이', price: '3000', },
        {name: '오뎅', price: '1000', },
        {name: '새우 튀김', price: '1000', },
        {name: '오징어 튀김', price: '1000', },
    ]

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get('http://localhost:8080/products')
            .then(res => {return res.data})
            .then(data => setProducts(data));
    }

    useEffect(() => {
        getProducts();
    }, []);



    return ( 
        <main>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {
                    temp.map(prod => {
                        return (
                            <div style={{
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '30%',
                                padding: '15px',
                                }}>
            
                                <div style={{
                                    width: '100%',
                                    height: '100px',
                                    backgroundColor: 'lightgray',
                                }}>
                                    <div>{prod.name}</div>
                                    <div>{prod.price}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </main>
     );
}
 
export default Product;