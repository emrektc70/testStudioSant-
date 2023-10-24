import styles from "./styles.module.scss";
import Image from 'next/image';

import gateau from "./assets/cake.png"
type Props = {
  totalAge: number
};

const View: React.FC<Props> = ({ totalAge }) => {
  return (
    <div className={styles.right}>
      <div className={styles.rightContent}>
        <Image src={gateau} width={300} height={300} alt="" />
        <div className={styles.total}>Total de lâge sélectionné : {totalAge}</div>
      </div>

    </div>
  )
};

export default View;
