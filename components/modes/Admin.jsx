import React, {useState, useEffect} from 'react';

// Storage Service
import Storage from '../../services/storage.service';

// data fetching
import axios from 'axios';

const Admin = ({ data, infoMsg}) => {
    // State variables
    const [localData, setLocalData] = useState([]);
    const [localMsg, setLocalMsg] = useState('');

    // Functions
    const deleteUser = (userId) => {
      axios.delete(`/api/users/${userId}`)
        .then(res => {
          // update state
          let storage = new Storage();
          storage.setData('contacts', res.data);

          // TODO: ALERT USER
          alert('User deleted successfully');

          window.location.reload(true);
        })
        .catch(err => {
          alert('Something went wrong!')
         console.log(err);
        }
      );
    }

    const activateUser = (user) => {
      // Resets user to be deleted or suspended
      const userData = {
        ...user,
        should_be_suspended: false,
        should_be_deleted: false
      }
      
      axios.put(`/api/users/${userData.id}`, userData)
      .then(res => {
        // update state
        let storage = new Storage();
        storage.setData('contacts', res.data);
        window.location.reload(true);
      })
      .catch(err => console.log(err))
    }

    // Effects
    useEffect(() => {
      if (data.length > 0) {
        let filteredData = data.filter(item => item.should_be_suspended === 1 || item.should_be_deleted === 1) // filter the data to be shown
        if (filteredData.length > 0 ) {
          setLocalData(filteredData);
          setLocalMsg('');
        }
        else {
          setLocalData(filteredData);
          setLocalMsg('No users found, to be deleted/activated');
        }
      }
      else {
        setLocalMsg(infoMsg);
      }
    }, [data])
    
    return (
      <section className="h-screen w-full bg-gray-50 grid grid-cols-1 md:grid-cols-4 gap-3 pb-20 overflow-y-auto">
      {
       localData.length > 0 ? localData?.map(contact => {
          return (
            <div 
            key={contact.id}
            className="h-60 w-full bg-white rounded-md p-2 py-4 flex flex-row items-start justify-start space-x-2 shadow-lg">
              {/* Left */}
              <div className="h-full w-[30%] flex items-start justify-center">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                   <img className="bg-cover" src={contact.photo} />
                </div>
              </div>
              {/* Right */}
              <div className="h-full w-[70%] flex flex-col items-start justify-start space-y-2">
                <h2 className="font-medium text-gray-800">
                  {`${contact.firstname} ${contact.middlename.substr(0, 1)}. ${contact.lastname}`}
                </h2>
                <div>{contact.phone}</div>
                <div>{contact.location}</div>
                <div>{contact.email}</div>
                <div>
                  <div className="h-auto w-full flex items-center justify-start space-x-4">
                    <a href={contact.facebook} target="_blank"><i className="la la-facebook text-lg"></i></a>
                    <a href={contact.instagram} target="_blank"><i className="la la-instagram text-lg"></i></a>
                    <a href={contact.twitter} target="_blank"><i className="la la-twitter text-lg"></i></a>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex items-center justify-start space-x-2 col-span-2">
                  {
                    contact.hasOwnProperty('should_be_deleted') && contact.should_be_deleted === 1 ?
                    (
                    <button
                    onClick={() => deleteUser(contact.id)}
                    className="bg-red-500 text-white px-3 text-sm py-1 rounded-md flex items-center justify-center">
                      Delete
                    </button>
                    ) : null
                  }
                  <button 
                  onClick={() => activateUser(contact)}
                  className="bg-blue-500 text-white px-3 text-sm py-1 rounded-md flex items-center justify-center">
                    Activate User
                  </button>
                </div>
              </div>
            </div>
          )
        }) : (<div>{localMsg}</div>)
      }
    </section>
  )
}

export default Admin;