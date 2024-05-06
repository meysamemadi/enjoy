import React from 'react'
import UserAlert from './_components/alert';
import { Profile } from './_components/profile';

const PanelPage = () => {
  return (
    <div className=' container'>

        <UserAlert />

        <Profile />
        
    </div>
  )
}

export default PanelPage;