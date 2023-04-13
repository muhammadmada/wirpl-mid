import navSyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navSyles.nav}>
            <div className={navSyles.left}>
                <ul>
                    <li>
                        <Link href="/">QuickFashion</Link>
                    </li>
                </ul>
            </div>
            <div className={navSyles.middle}>
                <ul>
                    <li>
                        <Link href='/products'>products</Link>
                    </li>
                    <li>
                        <Link href='/about'>about</Link>
                    </li>
                    <li>
                        <Link href='/help'>help</Link>
                    </li>
                </ul>
            </div>
            <div className={navSyles.right}>
                <ul>
                    <li>
                        <Link href='/login'>login</Link>                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav