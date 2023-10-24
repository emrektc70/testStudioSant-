import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import more from "./assets/more.png"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  birthDate: string;
  phone: string;
  image: string;
  username: string
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
  const [selectedUserDetails, setSelectedUserDetails] = useState<User | null>(null);
  const [openPopup, setOpenPopup] = useState(false);

  const handleMoreClick = (user: User) => {
    setSelectedUserDetails(user);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };


  const filterUsers = () => {
    return (users && users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    )
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
              <div className={styles.userRow}>
                {user.firstName} {user.lastName}
                <span>Age: {user.age}</span>
              </div>
              <div className={styles.more}>
                <Image src={more} alt='' height={20} width={20} onClick={() => handleMoreClick(user)} />
              </div>
            </li>
          ))}
        </ul>
        {
          selectedUserDetails &&
          <Dialog open={openPopup} onClose={handleClosePopup}>
            <DialogTitle>Informations de l utilisateur</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Nom: {selectedUserDetails.firstName} {selectedUserDetails.lastName}
              </DialogContentText>
              <DialogContentText>
                Prénom: {selectedUserDetails.lastName}
              </DialogContentText>
              <DialogContentText>
                Âge: {selectedUserDetails.age}
              </DialogContentText>
              <DialogContentText>
                Date de naissance: {selectedUserDetails.birthDate}
              </DialogContentText>
              <DialogContentText>
                Numéro de tel: {selectedUserDetails.phone}
              </DialogContentText>
              <DialogContentText>
                username : {selectedUserDetails.username}
              </DialogContentText>
              <DialogContentText>
                Email: {selectedUserDetails.email}
              </DialogContentText>
              <DialogContentText>
                Sexe: {selectedUserDetails.gender}
              </DialogContentText>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePopup} color="primary">
                Fermer
              </Button>
            </DialogActions>
          </Dialog>
        }


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
