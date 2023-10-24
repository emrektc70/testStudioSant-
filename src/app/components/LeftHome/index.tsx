import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
};

type Props = {
  users: User[];
  selectedUsers: User[];
  handleUserSelect: (user: User) => void;
  handleDeselectAll: VoidFunction
};


const LeftHome: React.FC<Props> = ({ users, selectedUsers, handleUserSelect, handleDeselectAll }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState('');
  const filterUsers = () => {
    return users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handlePrintInput = useCallback(() => {
    setOpen(!open)
    if (open === true) {
      setSearchTerm('')
    }
  }, [open])

  useEffect(() => {
    if (typeof document !== 'undefined') {
    }
  }, []);




  return (
    <div className={styles.left}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Liste des utilisateurs :</h2>
        <div className={styles.boxContent}>
          {
            open === false ?
              <div onClick={handlePrintInput} className={styles.search}>
                Faire une recherche
              </div> :
              <div className={styles.cancel} onClick={handlePrintInput}
              >
                Annuler
              </div>
          }
          {
            open &&
            <div>
              <input
                type="text"
                placeholder="Rechercher "
                value={searchTerm}
                className={styles.searchBar}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          }
        </div>
        <ul className={styles.userList}>
          {filterUsers().map((user) => (
            <li key={user.id} className={styles.userItem}>
              <input
                type="checkbox"
                checked={selectedUsers.some((selectedUser) => selectedUser.id === user.id)}
                onChange={() => handleUserSelect(user)}
              />
              {user.firstName} {user.lastName}
              <span>Age: {user.age}</span>
            </li>
          ))}
        </ul>

        <div className={styles.number}>
          {
            selectedUsers.length > 0 &&
            <>
              <div>
                Vous avez selectionné {selectedUsers.length} utilisteurs
              </div>
              <div className={styles.reset} onClick={handleDeselectAll}>
                RESET
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
