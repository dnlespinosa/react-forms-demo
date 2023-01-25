import React from 'react'

const UserForm = () => {
    const [userName, setUsername] = useState('ChickenLady')
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`created user ${userName}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Username' type='text' value={userName} onChange={handleChange}/>
            <button>Add me to the list</button>
        </form>
    )
}

export default UserForm