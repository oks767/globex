import React from 'react'
import Person from '../widgets/Person'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../shared/store'

function People() {
  const people = useSelector(state => state.add.value)
  const dispatch = useDispatch()
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        {console.log(dispatch(add))
        }
            <Person />

    </div>
    </div>
  )
}

export default People