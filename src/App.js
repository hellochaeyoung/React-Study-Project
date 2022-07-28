import React, { useState } from "react"
import Radio_compo from "./radioCompo";
import SampleComponent from "./SampleComponent";
import Select_compo from "./selectCompo";
import UseEffect from "./useeffect";

function App() {

  // component -> 맨 첫글자는 대문자로! '_' 포함하면 경고
  function MyMessage() {
    return (
      <h1>MyMessage Component</h1>
    )
  }

  // select
  const [content, setContent] = useState();

  const options = [
    {key:1, value:"apple"},
    {key:2, value:"banana"},
    {key:3, value:"kiwi"},
    {key:4, value:"orange"},
  ]

  const onChangeOptions = (e) => {
    setContent(e.currentTarget.value);
  }

  // radio
  const [choice, setChoice] = useState("");

  const radios = [
    {key:"male", value:"남자"},
    {key:"remale", value:"여자"},
  ]

  const onHandleRadio = (e) => setChoice(e.currentTarget.value);


  {/* hook == 변수 */}
  const [text, setText] = useState("초기값");
  //      get    set

  // Component, function과 동일한 방법 (const)
  const Msg = () => {

    const [inputText, setInputText] = useState("hello");

    console.log(inputText);

    function btnClick() {
      setText(inputText);
    }

    function handleChange(e) {
      setInputText(e.target.value);
    }

    return (
      <div>
        <p>메시지입니다.</p>
        <h3>text, {text}</h3>
        <button type="button" onClick={btnClick} >버튼</button>

        <input type="text" value={inputText} onChange={handleChange}></input>
      </div>
      
    )
  }

  


  return (
    <div>

      {/* 1. 동일 파일 내 선언 */}
      <p>{content}</p>


      <select onChange={onChangeOptions} value={content}>
        {options.map((item, index) => (
          <option key={item.key} value={item.value}>{item.value}</option>

        ))}
      </select>


      <p>{choice}</p>


      <form>
        {radios.map((item) => (
          <div>
            <input type="radio" id={item.key} name="gender" value={item.value}
                onChange={onHandleRadio}/>
            <label for={item.value}>{item.value}</label>
          </div>
        ))}
      </form>

      {/* 2. import 파일 방식 */}
      <Select_compo />
      <Radio_compo />


      {/* //////////////////////////////// */}
      <MyMessage />
      <Msg />

      <UseEffect />

      <SampleComponent />
      
    </div>
  );
} 
export default App;
