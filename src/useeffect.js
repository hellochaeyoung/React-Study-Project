import React, { useEffect, useState } from "react";

export default function UseEffect() {

    const [count, setCount] = useState(0);

    // 현재 컴포넌트가 rendering될 때마다 자동실행
    // 무한 루프로 빠질 소지가 있음
    useEffect( () => {
        console.log("useEffect!!");
    }, []);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => {setCount(count + 1)}}>카운트</button>
        </div>
    )
}