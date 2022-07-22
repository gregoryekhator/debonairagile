import React, {useState} from 'react';


const Admin = ({ data, infoMsg}) => {
    
    return (
      <section className="h-[30rem] w-full bg-gray-50 grid grid-cols-1 md:grid-cols-4 gap-3 pb-20 overflow-y-auto">
      {
        data && data.length > 0 ? data?.map(contact => {
          return (
            <div 
            key={contact.id}
            className="h-52 w-full bg-white rounded-md p-2 py-4 flex flex-row items-start justify-start space-x-2 shadow-lg">
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
                  className="bg-orange-500 text-white px-3 text-sm py-1 rounded-md flex items-center justify-center">
                    Suspend
                  </button>
                  <button 
                  className="bg-blue-500 text-white px-3 text-sm py-1 rounded-md flex items-center justify-center">
                    Activate
                  </button>
                </div>
              </div>
            </div>
          )
        }) : (<div>{infoMsg}</div>)
      }
    </section>
  )
}

export default Admin;