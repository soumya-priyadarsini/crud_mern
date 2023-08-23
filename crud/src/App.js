
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Add from './Components/Add';

function App() {

  //add for open and cross for close
  const [addSection, setAddSection] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    mobile: ""
  })

  const [editSection,setEditSection] = useState(false)
  const [formEdit,setFormEdit] = useState({
    name: '',
    email: "",
    mobile: "",
    id:""
  })

  const [dataList, setDataList] = useState([])
  //input value submit
  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  //form submit
  const handlSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post('http://localhost:8000/crud/add', formData)
    //console.log(data)
    if (data.status === 200) {
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
    }
  }
  const getFetchData = async () => {
    const data = await axios.get('http://localhost:8000/crud/list')
    // console.log("aaaa",data.data)
    // if (data.success) {
    setDataList(data.data)
    //   alert(data.data.message)

    // }
  }
  useEffect(() => {
    getFetchData()
  }, [])

  const handleDelete = async (id) => {
    const data = await axios.delete(`http://localhost:8000/crud/${id}`)
    console.log("DELETE:--", data)

    if (data.status === 200) {
      getFetchData()
      alert(data.data.message)
    }
  }

 const handleUpdate = async(e) =>{
  e.preventDefault()
  console.log("dafdsfsgfdsg",formEdit)
  const data = await axios.put(`http://localhost:8000/crud/${formEdit._id}`,formEdit)
    getFetchData()
    alert(data.data.message)
    setEditSection(false)

 }
  const handleOnChangeEdit = async(e) =>{
    const { value, name } = e.target
    setFormEdit((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleEdit = async (ele) => {
   console.log("dsf:----",ele)
    setFormEdit(ele)
    setEditSection(true)
  }
 
  return (
    <>
      <div className="container">
        <button className='btn btn-add' onClick={() => setAddSection(true)}>Add</button>
        {
          addSection && (
            <Add
              handlSubmit={handlSubmit}
              handleOnChange={handleOnChange}
              handleClose={() => setAddSection(false)}
              rest ={formData}
            />
          )
        }
        {
          editSection && (
            <Add
            handlSubmit={handleUpdate}
            handleOnChange={handleOnChangeEdit}
            handleClose={() => setEditSection(false)}
            rest ={formEdit}
          />
          )
        }
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
                dataList[0] ? (
                  dataList.map((ele) => {
                     // console.log("dadsadf", ele)
                    return (
                      <tr>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.mobile}</td>
                        <td>
                          <button className='btn btn-edit' onClick={() =>handleEdit(ele)}>Edit</button>
                          <button className='btn btn-delete' onClick={() => handleDelete(ele._id)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })) : (
                  <p>No Data Found....</p>
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default App;
