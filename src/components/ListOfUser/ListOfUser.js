import { useEffect, useState } from 'react';
import Search from '../Seach/Search';
import './ListOfUser.css';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';

const fetchUser = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return fetch(url)
        .then(r => r.json());
}

const ListOfUser = (props) => {

    const [originalListOfUser, setOriginalList] = useState([]);
    const [users, setUser] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetchUser()
            .then((user) => {
                setUser(user);
                setOriginalList(user)
                console.log(user)
            });
    }, []);

    useEffect(() => {
        console.log(searchInput)
        if (!searchInput) {
            setUser(originalListOfUser);
            return;
        }

        const newUser = originalListOfUser.filter((user) => user.name.toLowerCase().includes(searchInput.toLowerCase()));
        setUser(newUser);
    }, [searchInput]);


    const handleDelete = (id) => {
        const newUser = originalListOfUser.filter((x) => x?.id !== id);
        setUser(newUser);
        console.log(users);
    }


    const handleSearch = (e) => {
        console.log(e);
        setSearchInput(e.target.value)

    }

    return <div>
        <Search handleSearch={handleSearch} />

        {users?.length == 0 ?
            <div> <p className='text-center bold message'>No Users Available</p></div>
            : <table className="table">
                <thead>
                    <td scope='col'>Name</td>
                    <td scope='col'>Email</td>
                    <td scope='col'>Action</td>
                </thead>
                <tbody>
                    {users.map((u) => {
                        return <tr scope='row' key={u?.id}><td className='my-3' >{u?.name}</td>
                            <td className='my-3'>{u?.email}</td>
                            <td><DeleteSharpIcon className='icon-area' onClick={() => handleDelete(u?.id)} />
                                {/* <ModeEditOutlineSharpIcon className='icon-area'/> */}
                            </td></tr>
                    })}
                </tbody>
            </table>
        }



    </div>
}
export default ListOfUser;