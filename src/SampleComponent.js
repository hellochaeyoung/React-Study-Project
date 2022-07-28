import React, { useEffect, useState } from "react";

const INITIAL_COUNT = 0;

const SampleComponent = () => {
    
    const [count, setCount] = useState(INITIAL_COUNT);

    // 콜백함수, 뒤쪽에서 호출되는 함수
    const callbackFunc = () => {
        document.title = `${count} 번 클릭했습니다.`;
    }

    // count 값이 변하면 이 callbackFunc라는 함수를 호출해라.
    useEffect(callbackFunc, [count]);

    const countIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const countReset = () => {
        setCount(INITIAL_COUNT);
    }


    return (
        <div>
            <p>현재 카운드 : {count}</p>

            <button onClick={countIncrement}>+</button>
            <button onClick={countReset}>초기화</button>
        </div>
    )

}

export default SampleComponent;