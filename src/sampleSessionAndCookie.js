import React, {useState} from "react";
import Session from "react-session-api";
import {useCookies} from 'react-cookie';

export default function SampleSessionAndCookie() {

    function save() {
        // let counter = 10;
        // Session.set("counter", counter);
    
        // let obj = {'id':"abc", 'pwd':"123"};
        // Session.set("obj", obj);
    
        let jsonObj = [ {'name': 'aaa', 'number':1001}, {'name': 'bbb', 'number':1004}];
        Session.set("jsonObj", jsonObj);
    
    }

    function load() {
        // let count = Session.get("counter");
        // alert(count);
    
        // let obj = Session.get("obj");
        // alert(JSON.stringify(obj));
        // alert(obj.id);
    
        let jsonObj = Session.get("jsonObj");
        alert(jsonObj[1].name);
    }

    const [name, setName] = useState("");

    const [cookie, setCookie] = useCookies(['name']);

    const Save = () => {
            setCookie('name', name, {path: '/'});
    }

    const Load = () => {
            alert(cookie.name);
    }

    const changeName = (e) => setName(e.target.value);


    return (
    <div>
        <h3>session test</h3>

        <button type="button" onClick={save}>session 저장</button>

        <button type="button" onClick={load}>session 불러오기</button>

        <hr />

        <h3>cookie test</h3>

        <input type="text" value={name} onChange={changeName} />

        <button type="button" onClick={Save}>cookie save</button>
        <button type="button" onClick={Load}>cookie load</button>

        <hr />


    </div>
    )
}
