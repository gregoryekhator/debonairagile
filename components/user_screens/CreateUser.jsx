import React, {useState, useEffect, useRef} from 'react';

// NEXT
import {useRouter} from 'next/router';
import axios from 'axios';

// Services
import Storage from '../../services/storage.service'

const CreateUser= (props) => {
  const history = useRouter();
  const errorElementRef = useRef();
  const fileInputRef = useRef();

  // State Variables
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');

  // Effects
  useEffect(() => {}, []);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setError('');

      // upload user photo
      uploadPhoto();
    }
    return;
  }

  const validateForm = () => {
    if (firstname === '') {
      setError('Firstname is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (middlename === '') {
      setError('Middlename is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (lastname === '') {
      setError('Lastname is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (phone === '') {
      setError('Phone is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (location === '') {
      setError('Location is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (email === '') {
      setError('Email is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (!isValidEmail(email)) {
      setError("Email field is invalid")
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (facebook === '') {
      setError('Facebook is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (instagram === '') {
      setError('Instagram is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (twitter === '') {
      setError('Twitter is required');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    if (photo === '') {
      setError('Select a photo');
      errorElementRef.current.scrollIntoView()
      return false;
    }
    return true;
  }

  // verify email
  const isValidEmail = (s) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s);
  }

  const resetForm = () => {
    setFirstname('');
    setMiddlename('');
    setLastname('');
    setEmail('');
    setPhone('');
    setLocation('');
    setFacebook('');
    setInstagram('');
    setTwitter('');
    setPhoto('');

    setError('')
  }

  const handlePhotoChange  = () => {
    const file = fileInputRef.current.files[0];
    const src = URL.createObjectURL(file);
    setPhoto(src);
  }

  const handlePhotoClick = () => {
    fileInputRef.current.click(); 
  }

  const uploadPhoto = () => {
    setLoading(true);

    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('photo', file);
    axios.post('/api/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        // sanitize photo url
        const newPhoto = res.data.file;
        uploadUser(newPhoto);
      })
      .catch(err => {
        console.log(err);
        setError('Error uploading photo');
        setLoading(true);
      }
    );
  }

  const uploadUser = (photo) => {
    // Create User
    const user = {
      firstname,
      middlename,
      lastname,
      email,
      phone,
      location,
      facebook,
      instagram,
      twitter,
      photo: photo
    };

    axios.post('/api/users', user)
    .then(res => {
      // update state
      let storage = new Storage();
      storage.setData('contacts', res.data);

      // TODO: ALERT USER
      alert('User created successfully');

      // RESET FORM
      resetForm()

      // Redirect to Home page
      setTimeout(() => {
        history.back();
      }, 1000);
    })
    .catch(err => {
      setLoading(false);
      console.log(err);
      setError('Error creating user');
    });
  }

  // Render

  return (
    <div className="h-auto md:h-screen w-full bg-gray-50 flex items-center justify-center overflow-hidden">
      <section className="h-full md:h-auto w-full md:w-4/12 bg-white md:rounded-md md:my-10 shadow-lg 
        flex flex-col items-center justify-start space-y-8 p-5 py-5">
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
          <small ref={errorElementRef} className='text-sm text-center text-red-500 my-3'>{error}</small>

          {/* Field Group */}
          <div className="h-auto w-full flex flex-col items-center justify-start space-y-2">
            <div 
            onClick={handlePhotoClick}
            className='h-12 w-12 bg-gray-100 cursor-pointer overflow-hidden rounded-full'>
              <img src={photo} alt="" />
            </div>
            <input type="file" accept='image/*' ref={fileInputRef} onChange={handlePhotoChange} hidden />
          </div>

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
            <div className="h-10 w-full flex items-center justify-start space-x-2 rounded-md">
              <i className="la la-envelope text-lg"></i>
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text" placeholder="Email" className="h-full w-full bg-gray-50 px-3 focus:outline-none text-sm text-gray-800" />
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
          <button className="h-10 w-full rounded-md bg-blue-500 text-white font-medium text-md">
            {
              loading ? 'Loading...' : 'Add new user'
            }
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateUser;