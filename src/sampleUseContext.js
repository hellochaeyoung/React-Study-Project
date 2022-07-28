import React, { createContext, useState, useContext } from "react";

// useContext : 값을 전달

let messageOne = ''; // 전역 변수

function Message(props) {
    const [msg, setMsg] = useState();

    console.log(messageOne);

    return (
        <div>Message {props.name}  {msg}</div>
    )
}

const SampleContextObj = createContext();

const ConsumerCompo = () => {
    const humanData = useContext(SampleContextObj);

    console.log(humanData);

    return <p>{humanData}</p>
}

export default function SampleUseContext() {

    const [name, setName] = useState("aaa");

    messageOne = "hello";

    // 넘겨줄 데이터
    const humanData = "나는 aaa입니다."

    return (
        <div>
            <Message name={name} />

            <SampleContextObj.Provider value={humanData}>
                <ConsumerCompo />
            </SampleContextObj.Provider>
        </div>
    )
}