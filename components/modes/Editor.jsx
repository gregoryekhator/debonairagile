import React, {useState, useEffect} from 'react';

// NEXT
import Link from 'next/link';
import { useRouter } from 'next/router';

// axios
import axios from 'axios';

// Services
import Storage from '../../services/storage.service'

const Editor = ({ data, infoMsg}) => {
    const history = useRouter();

    // State variables
    const [localData, setLocalData] = useState([]);
    const [localMsg, setLocalMsg] = useState('');
  
    const editUser = (userId, userData) => {
      let storage = new Storage();
      storage.setData('user', userData);
      history.push(`/user/edit/${userId}`);
    }

    const removeUser = (user) => {
      // Resets user to be deleted or suspended
      const userData = {
        ...user,
        should_be_deleted: true
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
        let filteredData = data.filter(item => item.should_be_deleted === 0) // filter the data to be shown
        if (filteredData.length > 0 ) {
          setLocalData(filteredData);
          setLocalMsg('');
        }
        else {
          setLocalData(filteredData);
          setLocalMsg('No users found, create a user to begin!');
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
              key={`item-${contact.id}`}
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
                  <button
                  onClick={() => editUser(contact.id, contact)}
                  className="bg-green-500 text-white px-3 text-sm py-1 rounded-md flex items-center justify-center">
                    Edit User
                  </button>
                  <button 
                  onClick={() => removeUser(contact)}
                  className="bg-red-500 text-white px-3 text-sm py-1 rounded-md flex items-center justify-center">
                    Temp. Delete
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

export default Editor;