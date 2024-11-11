import React, {useState} from 'react';
import Button from '../uiparts/Button';
import InputForm from '../uiparts/InputForm';
import Form from '../layout/SearchForm';
import Dialog from '../layout/Dialog';
import Table from '../uiparts/Table';
import TableGeneral from '../uiparts/TableGeneral';



interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function Page1() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const initialData: User[] = []

  const [dialogData, setDialogData] = useState('initial')

  function onShow(newValue: string) {
    console.log('click button');
    setDialogData('change text')
  
  }

  const sampleData: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 28 },
  ];

  const [data, setTableData] = useState<User[]>([]);

  const toggleTable = () => {
    setTableData(initialData)
    setTableData(sampleData)
  };

    return (
      <div>
          <h1>Page1です！</h1>
          <Button text="I'm a disabled button" onClick={onShow}/>
          <br></br>
          <br></br>
          <Form></Form>
          <br></br>

          <button onClick={openDialog} >Open Dialog</button>

          <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Sample Dialog" dialogData={dialogData}>
            <p>This is a dialog content.</p>
          </Dialog>
          <br></br>
          <Button text='show table' onClick={toggleTable} />

          <br></br>
          {data.length > 0 ? (
          <Table data={data} columns={['id', 'name', 'email', 'age']}/>
          ) : (
            <p>No results found</p>
          )}

          <br></br>
          <p>general table</p>
          {data.length > 0 ? (
          <Table data={data} columns={['id', 'name', 'email', 'age']}/>
          ) : (
            <p>No results found</p>
          )}
      </div>
    );
  };

  export default Page1;