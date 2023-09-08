import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import "./modal.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import user from '../components/AxiosInstance'

function Modal({open, onClose , student}) {

    const [data,setData] = useState([]);
    const [stud,setStud] = useState(student);
    console.log(student)

    useEffect(() =>setStud(student),[open]);
    /* user
    .get("/student") // Replace with your API URL
    .then((response) => {
      console.log(response.data)
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    }) */
     
    
    const handleAddressChange = (e) => {
        setStud({ ...stud, address: e.target.value });
        console.log(stud)
    };

    const handleAgeChange = (e) => {
        setStud({ ...stud, age: e.target.value });
        console.log(stud)
    };

    const SaveChange = () => {
        user.post('/student', stud)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    if (!open) return null

    return createPortal(
        <div>
        <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <h2>{student.name}</h2>
                    <form>
                        {/* <div className="form">
                        <label>
                                <input placeholder=" " onChange={(e) => handleAddressChange(e)}
                                  value={stud.address}></input>
                                <span>Address</span>
                            </label>
                            <label>
                                <input placeholder=" " onChange={(e) => handleAddressChange(e)}
                                  value={stud.age}></input>
                                <span>Age</span>
                            </label>
                        </div> */}
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                           
                            <TextField onChange={(e) => handleAddressChange(e)} value={stud.address} id="standard-basic" label="Address" variant="standard" />
                            <TextField onChange={(e) => handleAgeChange(e)} value={stud.age} id="standard-basic" label="Age" variant="standard" />
                            
                        </Box>
                            
                        <Button onClick={SaveChange} className="buttons" variant="contained">Save</Button>
                    </form>
                    {/* <p>{student.address}</p>
                    <p>{student.age}</p> */}
                    <button onClick={onClose} className="close-modal" >Close</button>
                </div>  
            </div>
        </div>
        </div>,
        document.getElementById('portal')
    )

}

export default Modal