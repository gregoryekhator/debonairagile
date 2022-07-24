import React, {useState, useEffect} from 'react'
import Head from 'next/head'

// Components
import Header from '../../components/globals/Header';
import FloatingButton from '../../components/globals/FloatingButton';
import Moderator from '../../components/modes/Moderator';

// Services
import Storage from '../../services/storage.service'

const ModeratorMode = () => {
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
  }, [])

  
  return (
    <div className="h-auto md:h-screen w-full bg-white flex items-start justify-center overflow-hidden">
      <Head>
        <title>Debonair Contact App | Moderator Mode </title>
        <meta charSet="utf8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"         
        integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" />
        
      </Head>

      <main className="h-auto w-full flex items-start justify-center overflow-hidden">
        <div className="h-auto w-full bg-gray-50 flex flex-col items-center justify-start space-y-2">
          <Header 
            updateMsg={setInfoMsg}
            updateData={setData}
            updateMode={setMode}
            dataVal={data}
            modeVal={mode}
            contacts={contacts}
          />

          <div className="h-auto w-full px-2 py-2 overflow-hidden">
            <Moderator
            infoMsg={infoMsg}
            data={data}
            />
          </div>
        </div>
      
        <FloatingButton />
      </main>
    </div>
  )
}

export default ModeratorMode      


export async function getServerSideProps (context) {
  return {
    props: {}
  }
}