import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Pedro", "Matheus", "João"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Pedro", age: 20},
        {id: 2, name: "Matheus", age: 25},
        {id: 3, name: "João", age: 32},
        {id: 4, name: "Gabriel", age: 18},
    ]);

  return (
    <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ListRender