import styles from './AlbumInput.module.css';

function AlbumInput({ onInputChange, value }) {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Найти композицию в альбомах" value={value} onChange={onInputChange} />
      <div className={styles.iconContainer}>
        <svg  className={styles.imageIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.79 21.76L22.07 21.04C22.44 20.48 22.66 19.8 22.66 19.08C22.66 17.1 21.06 15.5 19.08 15.5C17.1 15.5 15.5 17.1 15.5 19.08C15.5 21.06 17.1 22.66 19.08 22.66C19.81 22.66 20.48 22.44 21.04 22.07L21.76 22.79C21.9 22.93 22.09 23 22.27 23C22.46 23 22.64 22.93 22.78 22.79C23.07 22.5 23.07 22.04 22.79 21.76Z" fill="currentColor" />
          <path d="M12.2302 12.0703C11.8202 12.0703 11.4902 12.4003 11.4902 12.8103C11.4902 13.2203 11.8202 13.5503 12.2302 13.5503C12.6402 13.5503 12.9702 13.2203 12.9702 12.8103C12.9702 12.4003 12.6402 12.0703 12.2302 12.0703Z" fill="currentColor" />
          <path d="M6.76002 13.0596C6.35002 13.0596 6.02002 13.3896 6.02002 13.7996C6.02002 14.2096 6.35002 14.5396 6.76002 14.5396C7.17002 14.5396 7.50002 14.2096 7.50002 13.7996C7.50002 13.3896 7.17002 13.0596 6.76002 13.0596Z" fill="currentColor" />
          <path d="M16.19 2H7.81C7.53 2 7.26 2.01 7 2.05C3.85 2.34 2 4.45 2 7.81V16.19C2 19.55 3.85 21.66 7 21.95C7.26 21.99 7.53 22 7.81 22H13.5C13.89 22 14.14 21.56 13.99 21.2C13.7 20.51 13.5 19.71 13.5 19C13.5 15.97 15.97 13.5 19 13.5C19.76 13.5 20.5 13.65 21.18 13.95C21.55 14.11 22 13.86 22 13.46V7.81C22 4.17 19.83 2 16.19 2ZM14.48 8.05V12.81C14.48 12.82 14.47 12.83 14.47 12.85C14.45 14.07 13.46 15.06 12.23 15.06C10.99 15.06 9.99 14.05 9.99 12.82C9.99 11.58 11 10.58 12.23 10.58C12.49 10.58 12.74 10.63 12.98 10.72V9.03L9.01 10.11V13.81C9.01 13.82 9 13.83 9 13.84C8.98 15.06 7.99 16.04 6.76 16.04C5.52 16.04 4.52 15.03 4.52 13.8C4.52 12.57 5.53 11.56 6.76 11.56C7.02 11.56 7.27 11.61 7.5 11.7V9.54V7.79C7.5 6.86 8.08 6.11 8.97 5.87L11.95 5.05C12.88 4.8 13.45 5.05 13.77 5.29C14.23 5.64 14.46 6.21 14.46 6.97V8.05H14.48Z" fill="currentColor"/>
        </svg>

      </div>
    </div>
  )
}

export default AlbumInput;