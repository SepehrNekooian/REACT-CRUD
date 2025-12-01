import React, { useState } from 'react';
import Header from '../components/Header';
import CrudForm from '../components/CrudForm';
import CrudTable from '../components/CrudTable';
import { sampleData } from '../utils/data';

const HomePage = () => {
  const [data, setData] = useState(sampleData);

  const addEntry = (entry) => {
    setData([...data, { id: Date.now(), ...entry }]);
  };

  const updateEntry = (updatedEntry) => {
    setData(data.map((item) => (item.id === updatedEntry.id ? updatedEntry : item)));
  };

  const deleteEntry = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <CrudForm addEntry={addEntry} />
      <CrudTable data={data} updateEntry={updateEntry} deleteEntry={deleteEntry} />
    </div>
  );
};

export default HomePage;
