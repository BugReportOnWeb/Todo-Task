import { MdDelete } from 'react-icons/md'

const Header = ({ day, date, taskLength, deleteCompletedTask }) => {
    return (
        <div className='header'>
            <div className='day'>
                <h1>{day}</h1>
            </div>

            <div className='date'>
                <p>{date}</p>
            </div>
            
            {taskLength > 0 && <MdDelete className='delete-completed' onClick={deleteCompletedTask} />}
        </div>
    )
}

export default Header
