import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
  const [apiData, setAPiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get('https://6474782e7de100807b1b00e5.mockapi.io/crud').then((response) => {
      setAPiData(response.data);
    });
  }

  function handleDelete(id) {
    axios.delete(`https://6474782e7de100807b1b00e5.mockapi.io/crud/${id}`).then(() => {
      getData();
    });
  }

  function setDataToStorage(id, name, email, address, mobile) {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('mobile', mobile);
  }

  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='mb-2 mt-2'>
          <h1>User Data !!!</h1>
        </div>
        <table className='table table-bordered table-striped table-dark table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_email}</td>
                <td>{item.e_address}</td>
                <td>{item.e_mobile}</td>
                <td>
                  <Link to={`/edit/${item.id}`}>
                    <button className='btn btn-primary'>Edit</button>
                  </Link>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
