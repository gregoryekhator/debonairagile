import React, {useState} from 'react';

// NEXT
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = ({updateData, updateMsg, contacts, modeVal, updateMode, dataVal}) => {
  const history = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  modeVal = history.pathname.split('/')[2];

  // Functions
  const search = (searchTarget) => {
    updateData([]);
    updateMsg('Loading');
    
    if (searchTarget.length > 3) {
      const filteredContacts = dataVal.length === 0 ? contacts.filter(contact => `${contact.firstname} ${contact.middlename} ${contact.lastname}`.toLowerCase().includes(searchTarget.toLowerCase())) : dataVal.filter(contact => `${contact.firstname} ${contact.middlename} ${contact.lastname}`.toLowerCase().includes(searchTarget.toLowerCase()));
     
      if(filteredContacts.length > 0 ) {
        setTimeout(() => updateData(filteredContacts.slice(0, 5)), 100);
        updateMsg('');
      }
      else {
        updateData([]);
        updateMsg('No contacts found!');
      }
    }
    return;
  }

  const searchToDefault = () => {
    if (dataVal.length === 0) {
      updateData(contacts.slice(0, 5));
      setSearchTerm('');
    }
    return;
  }

  const changeMode = (option) => {
    updateData(contacts);
    updateMode(option);
    setSearchTerm('');
  }

  return (
    <header className="h-auto md:h-16 w-full px-3 md:px-2 py-5 md:py-0 bg-black space-y-3 md:space-y-0 
      flex flex-col md:flex-row items-start md:items-center justify-center md:space-x-2">
      {/* Title */}
      <div 
      onClick={() =>history.push('/')}
      className="h-full w-full md:w-[33.33%] bg-transparent text-white 
        flex items-center justify-start font-medium cursor-pointer">
        Debonair Contact App
      </div>
      {/* Form */}
      <div className="h-full w-full md:w-[33.33%] bg-transparent flex items-center justify-center">
        <form className="h-full w-full position relative rounded-md flex items-center justify-center">
          {/* Icon */}
          <i className="la la-search text-gray-400 text-2xl position absolute top-1 md:top-4 left-3"></i>
          {/* Form Field */}
          <input 
            type="text" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyUp={() => search(searchTerm)}
            onBlur={() => searchToDefault()}
            placeholder="Search name here..." 
            className="h-10 w-full bg-gray-50 pl-12 p-3 text-sm text-gray-700 focus:outline-none rounded-md" />
        </form>
      </div>
      {/* Actions */}
      <div className="h-full w-full md:w-[33.33%] bg-transparent flex items-center justify-start md:justify-end space-x-0 divide-x">
        <Link href="/mode/moderator">
          <div 
          onClick={() => changeMode('moderator')}
          className={`h-7 flex items-center justify-center text-sm cursor-pointer px-5 ${modeVal === 'moderator' ? 'bg-white text-black' : 'text-white bg-transparent'}`}>Default</div>
        </Link>
        <Link href="/mode/admin">
          <div 
          onClick={() => changeMode('admin')}
          className={`h-7 flex items-center justify-center text-sm text-white cursor-pointer px-5 ${modeVal === 'admin' ? 'bg-white text-black' : 'text-white bg-transparent'}`}>Admin</div>
        </Link>
        <Link href="/mode/editor">
          <div 
          onClick={() => changeMode('editor')}
          className={`h-7 flex items-center justify-center text-sm text-white cursor-pointer px-4 ${modeVal === 'editor' ? 'bg-white text-black' : 'text-white bg-transparent'}`}>Manager</div>
        </Link>
      </div>
    </header>
  )
}

export default Header;