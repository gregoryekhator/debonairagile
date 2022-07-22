import React, {useState, useEffect} from 'react';

// NEXT
import {useRouter} from 'next/router';

const EditUser = (props) => {
  const history = useRouter();
  
  // State
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('user')) || {};
    
    if (data !== null || Object.keys(data).length > 0) {
      setFirstname(data.firstname);
      setMiddlename(data.middlename);
      setLastname(data.lastname);
      setPhone(data.phone);
      setLocation(data.location);
      setFacebook(data.facebook);
      setInstagram(data.instagram);
      setTwitter(data.twitter);
    }
    else {
      history.push('/')
    }
  }, []);
  
  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center overflow-hidden">
      <section className="h-full md:h-auto w-full md:w-4/12 bg-white md:rounded-md md:my-10 shadow-lg 
        flex flex-col items-center justify-start space-y-8 p-3 py-5">
        <div className="h-auto w-full flex items-center justify-between">
          <i 
          onClick={() => history.back()}
          className="h-10 w-10 rounded-full la la-arrow-left text-lg bg-gray-100 flex items-center justify-center cursor-pointer"></i>
          <h1 className="font-medium text-lg">Edit User</h1>
        </div>
        <form className="h-auto w-full bg-transparent flex flex-col items-center justify-center space-y-3">
          {/* Field Group */}
          <div className="h-auto md:h-10 w-full flex items-start justify-start space-x-2 rounded-md">
            <i className="la la-user text-lg"></i>
            <div className="h-auto md:h-10 w-full flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-2">
              <input 
                type="text" 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Firstname" 
                className="h-10 md:h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              <input 
                type="text"
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)}
                placeholder="Middlename" 
                className="h-10 md:h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              <input 
                type="text" 
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Lastname" 
                className="h-10 md:h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
            </div>
          </div>
          {/* Field Group */}
          <div className="h-auto w-full flex flex-col items-center justify-start space-y-2">
            <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
              <i className="la la-phone text-lg"></i>
              <input 
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone" 
                className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
            </div>
            <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
              <i className="la la-map-marker text-lg"></i>
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location" 
                className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
            </div>
          </div>
          {/* Field Group */}
          <div className="h-auto w-full flex items-center justify-start space-x-2 rounded-md">
            <div className="h-full w-full flex flex-col items-center justify-start space-y-2">
              <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
                <i className="la la-facebook text-lg"></i>
                <input 
                  type="text" 
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="Facebook" 
                  className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              </div>
              
              <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
                <i className="la la-instagram text-lg"></i>
                <input 
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Instagram" 
                  className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              </div>

              <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
                <i className="la la-twitter text-lg"></i>
                <input 
                  type="text" 
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="Twitter" 
                  className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              </div>
            </div>
          </div>
          {/* CTA */}
          <button className="h-10 w-full rounded-md bg-blue-500 text-white font-medium text-md">Add new user</button>
        </form>
      </section>
    </div>
  )
}

export default EditUser;