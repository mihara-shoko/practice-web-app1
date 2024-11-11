import React from 'react';
import MyButton from '../uiparts/Button';
import '../../styles/style.css'

function Page2() {
    return (
      <div className="container">
      <form>
        <input type="text" placeholder="Name" />
        <textarea placeholder="Email" />
        <input type="number" placeholder="Age" />
        <input type="date" />
        <button type="submit">Submit</button>
      </form>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    );
  };

  export default Page2;

