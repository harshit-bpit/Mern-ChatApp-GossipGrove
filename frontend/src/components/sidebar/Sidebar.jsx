import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 bg-slate-800 p-6 flex flex-col'>
      <SearchInput />
      <div className='divider px-2'></div>
      <Conversations />
      <LogoutButton />

    </div>
  )
}

export default Sidebar

/*
import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutButton />

    </div>
  )
}

export default Sidebar
 */