import styles from "./styles.module.scss";
import Image from 'next/image';

import gateau from "./assets/cake.png"
import { useEffect } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
};
type Props = {
  totalAge: number | null;
  selectedUsers: User[];
};

const View: React.FC<Props> = ({ totalAge, selectedUsers }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Code qui utilise document (si nécessaire)
    }
  }, []);
  return (
    <div className={styles.right}>
      <div className={styles.rightContent}>
        <Image src={gateau} width={300} height={300} alt="" />
        <div className={styles.total}>
          {
            selectedUsers.length > 0 ?
              <div>
                Moyen de l age :  {totalAge && Math.floor(totalAge)}
              </div> :
              <div>
                Aucun utilisateur sélectionné
              </div>
          }

        </div>
      </div>

    </div>
  )
};

export default View;
