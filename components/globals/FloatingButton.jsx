import React, {useState} from 'react';

// NEXT
import Link from 'next/link';

const FloatingButton = ({ data, infoMsg}) => {
  return (
    <Link href="/user/new">
      <div className="h-12 w-12 bg-blue-500 flex items-center justify-center rounded-full position fixed bottom-20 right-10 shadow-lg cursor-pointer">
        <i className="la la-user-plus text-white text-2xl"></i>
      </div>
    </Link>
  )
}

export default FloatingButton;