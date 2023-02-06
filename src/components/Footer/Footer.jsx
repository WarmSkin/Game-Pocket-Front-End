import NavStick from "../NavStick/NavStick"
import styles from './Footer.module.css'

const Footer = ({ user }) => {
  return (
    <>
      <NavStick user={user} />
      <div className={styles.linkContainer}>
        <a href="https://github.com/WarmSkin/Game-Pocket-Front-End" target="_blank" rel="noreferrer">GitHub</a>
        <p>|</p>
        {/* link in attributions must be changed once README is done */}
        <a href="/" target="_blank" rel="noreferrer">Attributions</a>
      </div>
    </>
  )
}

export default Footer