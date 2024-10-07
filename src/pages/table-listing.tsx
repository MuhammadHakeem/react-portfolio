// Importing React and necessary hooks
import { Button } from '@mui/material';
import UserList from 'components/Sections/UserList';
import router from 'next/router';
import React from 'react';

// Defining the Props interface (if needed)
interface Props {
  // Define any props that your component will receive here
}

const navigateTo =() => {
    router.push('/'); // Navigate to the specified path
};

// Creating the functional component
const TableListing: React.FC<Props> = () => {
  return (
    <div className='flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm'>
        <h4 className='font-bold text-6xl text-white'>Table Listing</h4>
        <div className='flex justify-end'>
            <Button variant='contained' onClick={navigateTo}>Back</Button>
        </div>
        <UserList></UserList>
    </div>
  );
};

// Exporting the component
export default TableListing;
