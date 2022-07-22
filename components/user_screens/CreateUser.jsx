import React, {useState, useEffect} from 'react';

// NEXT
import {useRouter} from 'next/router';
import axios from 'axios';

// Services
import Storage from '../../services/localstorage.service'

const CreateUser= (props) => {
  const history = useRouter();

  // State Variables
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [error, setError] = useState('');

  // Effects
  useEffect(() => {}, []);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setError('');

      // Create User
      const user = {
        firstname,
        middlename,
        lastname,
        phone,
        location,
        facebook,
        instagram,
        twitter,
      };

      axios.post('/api/users', user)
        .then(res => {
          // update state
          let storage = new Storage();
          storage.setData('contacts', res.data);

          // TODO: ALERT USER
          alert('User created successfully');

          // Redirect to Home page
          setTimeout(() => {
            history.push('/');
          }, 2000);
        })
        .catch(err => {
          setError(err.response.data.message);
        }
      );
    }
    return;
  }

  const validateForm = () => {
    if (firstname === '') {
      setError('Firstname is required');
      return false;
    }
    if (middlename === '') {
      setError('Middlename is required');
      return false;
    }
    if (lastname === '') {
      setError('Lastname is required');
      return false;
    }
    if (phone === '') {
      setError('Phone is required');
      return false;
    }
    if (location === '') {
      setError('Location is required');
      return false;
    }
    if (facebook === '') {
      setError('Facebook is required');
      return false;
    }
    if (instagram === '') {
      setError('Instagram is required');
      return false;
    }
    if (twitter === '') {
      setError('Twitter is required');
      return false;
    }
    return true;
  }

  // Render

  return (
    <div className="h-auto md:h-screen w-full bg-gray-50 flex items-center justify-center overflow-hidden">
      <section className="h-full md:h-auto w-full md:w-4/12 bg-white md:rounded-md md:my-10 shadow-lg 
        flex flex-col items-center justify-start space-y-8 p-3 py-5">
        <div className="h-auto w-full flex items-center justify-between">
          <i 
          onClick={() => history.back()}
          className="h-10 w-10 rounded-full la la-arrow-left text-lg bg-gray-100 flex items-center justify-center cursor-pointer"></i>
          <h1 className="font-medium text-lg">Create New User</h1>
        </div>
        <form 
        onSubmit={handleSubmit}
        className="h-auto w-full bg-transparent flex flex-col items-center justify-center space-y-3">
          {/* Error */}
          <small className='text-sm text-center text-red-500 my-3'>{error}</small>

          {/* Field Group */}
          <div className="h-auto md:h-10 w-full flex items-start justify-start space-x-2 rounded-md">
            <i className="la la-user text-lg"></i>
            <div className="h-auto md:h-10 w-full flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-2">
              <input 
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text" placeholder="Firstname" className="h-10 md:h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              <input 
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
              type="text" placeholder="Middlename" className="h-10 md:h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              <input 
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text" placeholder="Lastname" className="h-10 md:h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
            </div>
          </div>
          {/* Field Group */}
          <div className="h-auto w-full flex flex-col items-center justify-start space-y-2">
            <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
              <i className="la la-phone text-lg"></i>
              <input 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text" placeholder="Phone" className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
            </div>
            <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
              <i className="la la-map-marker text-lg"></i>
              <input 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text" placeholder="Location" className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
            </div>
          </div>
          {/* Field Group */}
          <div className="h-auto w-full flex items-center justify-start space-x-2 rounded-md">
            <div className="h-full w-full flex flex-col items-center justify-start space-y-2">
              <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
                <i className="la la-facebook text-lg"></i>
                <input 
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                type="text" placeholder="Facebook" className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              </div>
              
              <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
                <i className="la la-instagram text-lg"></i>
                <input 
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                type="text" placeholder="Instagram" className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
              </div>

              <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
                <i className="la la-twitter text-lg"></i>
                <input 
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                type="text" placeholder="Twitter" className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
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

export default CreateUser;