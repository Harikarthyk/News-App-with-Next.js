import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import Link from 'next/link'

export const Header = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>
            <Link
                href="/"
            >
                <div>Home</div>
            </Link>
            <Link
                href="/feed/1"
            >
                <div>News Feed</div>
            </Link> {/* <div onClick={() => router.push('/eom')}>EOM</div> */}
            <div onClick={() => (window.location.href = 'https://github.com/harikarthyk')}>Github</div>
        </div>
    );
};