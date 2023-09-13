import React, { useState, useEffect } from "react";
import "./student.css";
import user from "../components/AxiosInstance";
import Modal from "../components/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StudCard from "../components/StudCard";
import Group from "../assets/Group.svg";
import reading from "../assets/reading 1.svg";
import vector from "../assets/Vector.svg";

function Students() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [stud, setStud] = useState({});

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  /* const user = axios.create({
    baseURL: "https://64f84206824680fd217f51a7.mockapi.io/",
    header: {
      authorname: "vinayak"
    }
  }); */

  useEffect(() => {
    // Fetch data from your API using Axios
    user
      .get("/student", {
        params: {
          _limit: 10,
        },
      }) // Replace with your API URL
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const ToggleModal = (pid, name, age, address) => {
    setStud({
      id: pid,
      name: name,
      age: age,
      address: address,
    });
    setModal(!modal);
    console.log(stud);
  };

  return (
    <div>
      <Modal open={modal} student={stud} onClose={() => setModal(!modal)} />
      <div className="main">
        <div>
          {/* <Table dataSource={data} columns={columns} /> */}
          <div className="stud-content">
            <div className="class-card-layout">
              <StudCard img={reading} color="#F3F4FF" />
              <StudCard img={Group} color="#ECF2E8" />
              <StudCard img={vector} color="#FFF4E0" />
            </div>
            <h2>Data Table</h2>
            {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
                <tr onClick={() => { ToggleModal(item.id,item.name,item.address,item.age) }} key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
              </tr>
                
            ))}
          </tbody>
        </table> */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={() =>
                        ToggleModal(row.id, row.name, row.age, row.address)
                      }
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
