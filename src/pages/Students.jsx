import React, { useState, useEffect } from 'react'
import "./student.css"
import axios from 'axios';
import { Space, Table, Tag } from 'antd';


function Students() {

  const [data,setData] = useState([]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const user = axios.create({
    baseURL: "https://64f84206824680fd217f51a7.mockapi.io/",
    header: {
      authorname: "vinayak"
    }
  });

 

  useEffect(() => {
    // Fetch data from your API using Axios
    user
      .get("/student") // Replace with your API URL
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

   
  return (
    <div>
        <div className='main'> 
        
        
        <div>
        {/* <Table dataSource={data} columns={columns} /> */}
        <div>
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                {/* Add more table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Students