import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CrudTable = ({ data, updateEntry, deleteEntry }) => {
  return (
    <table className="crud-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => updateEntry(item)}>
                <FaEdit />
              </button>
              <button onClick={() => deleteEntry(item.id)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CrudTable;
