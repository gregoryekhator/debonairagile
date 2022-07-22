import Head from 'next/head'

// Components
import EditUser from '../../../components/user_screens/EditUser';

const EditUserPage = () => {
  return (
    <div className="h-auto md:h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      <Head>
        <title>Debonair Contact App | Edit User </title>
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

      <main className="h-auto w-full flex items-center justify-center overflow-hidden">
        <EditUser />
      </main>

      {/* Footer */}
    </div>
  )
}

export default EditUserPage      
