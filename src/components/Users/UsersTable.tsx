import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from "axios";

type User = {
    id: number,
    name: string,
    username: string
}

const UsersTable: FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        void axios.get(url)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .then(response => setUsers(response.data));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        username
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UsersTable;