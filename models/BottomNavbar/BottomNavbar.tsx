import { navbar_data } from '@/data'
import s from './BottomNavbar.module.scss'
import Link from 'next/link'

export function BottomNavbar (){
    return (
        <div className={s.navbar}>
            <div  className={s.navbar__content}>
            {
                navbar_data.map((i, index)=>(
                    <Link className={s.navbar__link} key={index} href={i.href}>
                        <div className={s.navbar__block}>
                            <img className={s.navbar__image} src={i.image} alt={i.title} />
                            <p className={s.navbar__text}>{i.title}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        </div>
    )
}