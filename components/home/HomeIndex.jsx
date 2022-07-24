import React, { useState, useEffect} from 'react';

// NEXT
import Link from 'next/link';

// components (modes)
import {Admin, Moderator, Editor} from '../modes'
import Header from '../globals/Header'

import FloatingButton from '../globals/FloatingButton'
import Pagination from '../globals/Pagination'

// Services
import Storage from '../../services/storage.service'

const HomeIndex = (props) => {
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState(contacts);
  const [infoMsg, setInfoMsg] = useState('');
  /*
  *
  * The mode settings/options determines what UI component will be displayed to enable a different workspace that allows a user to 
  * perform several activities including:
  * - Moderator: This mode enables viewing all entities records (this is the default behaviour)
  * - Editor: This mode provides options in the view to modify a particular entity and save it to the database
  * - Admin: This mode shows extra options to enable deletion, activation or suspension of an entity (Caution: High severity)
  *
  */
  const [mode, setMode] = useState('moderator'); // moderator (default) | editor | admin

  useEffect(() => {
    let storage = new Storage();
    if (storage.getData('contacts') && storage.getData('contacts').length > 0) {
      setContacts(storage.getData('contacts'));
      setData(storage.getData('contacts'));
    }
    else {
      setContacts([]);
      setData([]);
      setInfoMsg('No contacts found create a contact to begin');
    }
  }, [infoMsg])

  return (
    <div className="h-screen w-full bg-gray-50 flex items-start justify-center overflow-hidden">
      {/* Wrapper */}
      <div className="h-auto w-full bg-gray-50 flex flex-col items-center justify-start space-y-1">
        {/* Header */}
        <Header 
          updateMsg={setInfoMsg}
          updateData={setData}
          updateMode={setMode}
          dataVal={data}
          modeVal={mode}
          contacts={contacts}
        />

        {/* Table */}
        <div className="h-auto w-full px-2 py-2 overflow-hidden">
          <Moderator data={data} infoMsg={infoMsg} />
        </div>
        {/* Table End */}

        {/* Pagintion */}
        {/* <Pagination data={contacts} updateData={setData} /> */}
      </div>
      {/* Wrapper End */}

      {/* Floating Button */}
      <FloatingButton />
    </div>
  )
}

export default HomeIndex;