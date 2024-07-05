import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

// 수정, 삭제버튼

const ProdBox = ({prod, dispatch}) => {

    // 수정 모드
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    // 수정 중 상태
    const [product, setProduct] = useState({name: prod.name, price: prod.price, description: prod.description});


    // 수정 버튼
    const handleUpdateMode = () => {
        // 수정 버튼 클릭 시 false -> true
        setIsUpdateMode(true)
    }

    // 수정 input (새 상품 추가랑 같음)
    const handleChange = (e) => {

        // if (!products.name || !products.price) {
        //     alert('내용을 입력해주세요.')
        //     return;
        // }

        setProduct(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
    

    // 수정 후 완료 버튼
    const handleUpdate = async() => {
        try{
            // 반복 변경 시 id를 인식하게 함
            const editProduct = {...product, id: prod.id}
            
            // put: 전체 변경 / patch: 일부 변경
            const res = await axios.put(`http://localhost:8080/products/${prod.id}`, editProduct)

            // 즉시 반영
            dispatch({type: "EDIT_PRODUCT", payload: editProduct})
            // const updateProducts = products.map(p => (p.id === prod.id ? editProduct : p));
            // setProducts(updateProducts);
            setIsUpdateMode(false)
            alert('수정되었습니다.')
        } catch (err) {
            console.error(err);
        }
    }


    // 삭제버튼을 누르면 서버에 신호
    const handleDelete = async() => {
        try {

            const userConfirmed = window.confirm("정말 삭제하시겠습니까?")
            if (userConfirmed) {
                const res = await axios.delete(`http://localhost:8080/products/${prod.id}`);
                // // 즉시 반영
                dispatch({type: "DELETE_PRODUCT", payload: prod.id})
                alert('삭제되었습니다.')
            } else {
                // alert('취소되었습니다.')
            }
            // const newProducts = products.filter(p => {
            //     return p.id != prod.id
            // });
            // setProducts(newProducts)
        } catch (err) {
            console.error(err)
        }
    }

    return ( 

        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            padding: '10px',
            }}> 

        <div style={{
            width: '100%',
            height: '120px',
            backgroundColor: 'lightgray',
            borderRadius: '30px',
            padding: '5px'
            }}> 

                {
                    // 수정: isUpdateMode가 false(현재) -> true(누를 경우) 수정 모드
                    isUpdateMode
                        ?
                        <>
                        {/* 수정모드 */}
                        <div>
                            <div>이름 : <input type="text" value={product.name} name='name' onChange={handleChange}></input></div>
                            <div>가격 : <input type="number" min="0" step="1000" value={product.price} name='price' onChange={handleChange}></input></div>
                            <div>설명 : <textarea type="text" value={product.description} name='description' onChange={handleChange}></textarea></div>
                        </div>
                        
                        <ProdBtn onClick={handleUpdate}>완료</ProdBtn>
                        </>                    
                        :
                        <>
                        {/* false (원래 상태) */}
                        <div><a href={"/product/" + prod.id} style={{textDecoration: 'none'}}>{prod.name}</a></div>
                        <div>[ {prod.price} 원 ]</div>
                        <ProdBtn primary onClick={handleUpdateMode}>수정</ProdBtn>
                        <ProdBtn danger onClick={handleDelete}>삭제</ProdBtn>
                        </>

                }
            </div>
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


 
export default ProdBox;