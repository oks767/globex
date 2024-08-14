import styles from './Person.module.scss'
interface UserProps {
  fullname: string;
  position_date: string;
  system_id: string;
}

interface PersonProps {
  user: UserProps;
}
const Person: React.FC<PersonProps> = ({user}) => {
  return (
    
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">            
          {
            <li style={styles}>
              <div className="flex items-center gap-x-6">
                <div>
                  <span className='text-base font-semibold leading-7 tracking-tight text-gray-900'>ФИО: </span>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{user.fullname}</h3>
                  <span className='text-base font-semibold leading-7 tracking-tight text-gray-900'>Дата приема: </span>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{user.position_date}</p>
                  <span className='text-base font-semibold leading-7 tracking-tight text-gray-900'>ID: </span>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{user.system_id}</p>
                </div>
              </div>
            </li>
          }
        </ul>
      
  )
}

export default Person