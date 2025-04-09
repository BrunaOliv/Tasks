import Link from 'next/link';
import styles from '@/components/header/'

export function Header(){
    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.log}>
                            Tarefas<span>+</span>
                        </h1>
                    </Link>
                </nav>

                <button className={styles.loginButton}>
                    Acessar
                </button>
            </section>
        </header>
    )
}