import { useState } from "react";

const useInputs = (initForm) => {

    const [form, setForm] = useState(initForm);

        const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }

    // input 초기화
    const handleReset = () => {
        setForm(initForm)
    }

    return {form, handleChange, handleReset}

}
 
export default useInputs;

