import React, { useMemo, useState } from "react";

// useMemo : rendering이 필요한 부분만 실행
const square = (params) => {
    console.log('squre 함수 실행');

    return params * params;
}

export default function SampleUseMemo() {
    
    const [countStateA, setcountStateA] = useState(0);
    const [countStateB, setcountStateB] = useState(0);

    const countResultA = () => {
        setcountStateA((prev) => prev + 1);

        console.log("A + 1 버튼이 클릭되었습니다");
    }

    const countResultB = () => {
        setcountStateB((prev) => prev + 1);

        console.log("B + 1 버튼이 클릭되었습니다");
    }

    // const squareArea = square(countStateB);

    // countStateB가 변경될때만 squre함수를 실행해라
    const squareArea = useMemo(() => square(countStateB), [countStateB]);

    return (
        <div>
            <p>
                계산 결과 A : {countStateA}
                <button onClick={countResultA}>계산</button>
            </p>

            <p>
                계산 결과 B : {countStateB}
                <button onClick={countResultB}>계산</button>
            </p>

            <p>정사각형의 면적</p>
            <p>계산 결과 B * 계산 결과 B = {squareArea}</p>
        </div>
    )
}