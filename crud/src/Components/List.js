
import { useEffect, useState } from 'react';
import axios from 'axios'

function List() {

  //add for open and cross for close
  

  const [dataList, setDataList] = useState([])
  //input value submit
  const getFetchData = async () => {
    const data = await axios.get('http://localhost:8000/crud/list')
    console.log("aaaa",data.data)
    // if (data.success) {
       setDataList(data.data)
    //   alert(data.data.message)

    // }
  }
  useEffect(() => {
    getFetchData()
  }, [])
  console.log("saddsd",dataList)
  return (
    <>
      <div className="container">
        <button className='btn btn-add' onClick={() => setAddSection(true)}>Add</button>
        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>EmailId</th>
                <th>Mobile</th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.map((ele) => {
                //  console.log("dadsadf", ele)
                  return (
                    <tr>
                      <td>{ele.name}</td>
                      <td>{ele.email}</td>
                      <td>{ele.mobile}</td>
                      <td>
                      <button className='btn btn-edit'>Edit</button>
                  <button className='btn btn-delete'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default List;