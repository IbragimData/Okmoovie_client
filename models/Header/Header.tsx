import Link from "next/link"
import s from "./Header.module.scss"
import { navbar_data } from "@/data"
import { BottomNavbar } from "../BottomNavbar/BottomNavbar"
export function Header(){
    return (
        <div className={s.header}>
            <div className={s.header__navbar}>
                <Link href="/">
                    <img className={s.header__image} src="./images/svg/logo.svg" alt="" />
                </Link>
                <ul className={s.header__list}>
                    {
                        navbar_data.map((i, index)=>(
                            <li key={index} className={s.header__item}><Link className={s.header__link} href={i.href}>{i.title}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className={s.header__content}>
                <button className={s.header__but}>
                    <img className={s.header__img} src="./images/svg/icon/search.svg" alt="" />
                </button>
                <p className={s.header__text}>Войти</p>
            </div>
            <BottomNavbar/>   
        </div>
    )
}