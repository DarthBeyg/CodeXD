'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<{ id: number; name: string }[]>([]); // State variable to store fetched data
  const [name, setName] = useState(''); // State variable to store new name
  const [id, setId] = useState('');  // State variable to store new ID

  useEffect(() => {
    fetchData(); // Fetched data on component mount
  }, []);

  const fetchData = async () => {   // Asynchronous function to fetch data from an external API
    const response = await fetch('/api/users'); // Fetch data from API  
    const jsonData = await response.json();  // Parse the JSON response
    setData(jsonData); // Set the fetched data in the state variable
  };

  const handleNewName = (e: React.ChangeEvent<HTMLInputElement>) => { // Function to handle new name 
    setName(e.target.value);  // Set the new name in the state variable
  };
  const handleNewId = (e: React.ChangeEvent<HTMLInputElement>) => {// Function to handle new ID
  setId(e.target.value);  // Set the new ID in the state variable
  }
  const handleSubmit = async () => { // Function to handle form submission
    const userObj = { name, id }; //user  Object to be submitted   
    const response = await fetch('/api/users', {// API call to add new user
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(userObj), 
      });
    if(response.ok){ 
    fetchData(); // Mounted again with updated data upon submission
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-400"> {/* Flex container for layout */}
      <div className="flex-grow overflow-y-auto pb-16"> {/* Scrollable content */}
      <div className="flex items-center justify-center"> {/* Centering table */}
        <table className="table-auto border-collapse border border-gray-500 ">{/* Table styling */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Name</th>
              <th className="px-4 py-2 border border-gray-200 text-left">ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (   // Map the fetched data to table rows
              <tr key={item.id}>     
                <td className="px-4 py-2 border border-gray-200">{item.name}</td>  
                <td className="px-4 py-2 border border-gray-200">{item.id}</td>     
              </tr>
            ))}
          </tbody>
        </table>
       </div> 
      </div>
      
        <div className="flex justify-start items-center p-10"> {/* Form styling */}
          <form className="bg-slate-300 rounded-lg shadow-xl p-10 w-1/4" > {/* Form styling */}
            <div className="mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"                
                onChange={handleNewName}               
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                name="id"                                
                onChange={handleNewId}                
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white rounded-lg px-4 py-2"> 
              Submit
            </button>
          </form>
        </div>
      </div>
    
  );
}

