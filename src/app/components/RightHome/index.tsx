import styles from "./styles.module.scss";
import Image from 'next/image';
import cake from "./assets/cake1.png"
import cake1 from "./assets/cake2.png"
import gateau from "./assets/cake.png"
import not from "./assets/not.png"
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
    }
  }, []);

  let imageToShow = null;

  switch (true) {
    case totalAge !== null && totalAge > 45:
      imageToShow = cake;
      break;
    case totalAge !== null && totalAge > 25:
      imageToShow = cake1;
      break;
    case totalAge !== null && totalAge > 0:
      imageToShow = gateau;
      break;
    default:
      imageToShow = not;
      break;
  }

  return (
    <div className={styles.right}>
      <div className={styles.rightContent}>
        {imageToShow && <Image src={imageToShow} width={300} height={300} alt="" />}
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
