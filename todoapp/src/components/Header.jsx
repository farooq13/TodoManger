import styles from '../css/header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1Text}>Todo Manager</h1>
    </div>
  )
}