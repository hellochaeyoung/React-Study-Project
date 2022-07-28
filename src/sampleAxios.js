import React, {useState, useEffect} from "react";

import axios from "axios";

export default function SampleAxios() {

    const [memList, setMemList] = useState([]);

    useEffect(() => {

        // const fetchData = async () => {
        //   const response = await axios.post('http://localhost:3000/getBbs', null, {params: {"seq": 17}})
        //   console.log(response.data);
        //   console.log(response.data.id);
        // }
    
        // const fetchData = async () => {
        //   const response = await axios.get('http://localhost:3000/conn_param', {params:{"title":"제목입니다", "num":248}})
        //   console.log(response.data);
        // }
    
        const fetchData = async () => {
          const response = await axios.get('http://localhost:3000/getBbsByKeyword')
    
          setMemList(response.data);
    
        }
    
        // const fetchData = async () => {
        //   const response = await axios.post('http://localhost:3000/getBbs', {})
        //       .then(function(resp) { // success
        //         console.log(resp.data);
        //         console.log(resp.data[0].title);
        //       })
        //       .catch(function(error){ // error
        //         alert("error");
        //       })
        // }
    
        fetchData();
    
    },[]);

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>아이디</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        memList.map(function(obj, i){
                            return (
                                // 1. 태그 직접 생성
                                // <tr>
                                //   <th>{obj.id}</th>
                                //   <td>{obj.title}</td>
                                //   <td>{obj.wdate}</td>
                                //   <td>{obj.content}</td>
                                // </tr>
                  
                                // 2. 컴포넌트로 따로 구현하여 적용
                                <TableRow obj={obj} key={i} cnt={i+1} /> // key 빼면 안되고 중복도 안됨
                              )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

function TableRow(props) {
    return (
      <tr>
        <th>{props.cnt}</th>
        <td>{props.obj.id}</td>
        <td>{props.obj.title}</td>
        <td>{props.obj.wdate}</td>
        <td>{props.obj.content}</td>
      </tr>
    );
  }