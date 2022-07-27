import React, { useState } from "react"
import Radio_compo from "./radioCompo";
import Select_compo from "./selectCompo";

function App() {

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


  return (
    <div>

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

      <Select_compo />
      <Radio_compo />
      
    </div>
  );
}
export default App;
