import React, { useEffect } from 'react'
import Person from '../widgets/Person'
import { useDispatch, useSelector } from 'react-redux'
import usersAll from '../shared/async'

import { RootState, AppDispatch } from '../shared/store'
import { User } from '../shared/usersSlice';

 

function People() {
  const { loadingStatus, value: users, error } = useSelector((state: RootState) => state.users)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (loadingStatus === 'idle') {
      dispatch(usersAll())
    }
  }, [dispatch, loadingStatus])

  if (loadingStatus === 'loading') {
    return <div>Loading...</div>
  }

  if (loadingStatus === 'failed') {
    return <div>{error}</div>
  }
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
         {
          users?.map((user: User, i: number)=>(
            <Person key={i} user={user}/>
          ))
         }   

    </div>
    </div>
  )
}

export default People