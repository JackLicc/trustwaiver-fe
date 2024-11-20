import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="flex items-center justify-center w-full h-full border-t border-b-primary-300">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    &copy; 2024 纽村省钱快报. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer