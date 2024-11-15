import s from './BannerMovie.module.scss'



export function BannerMovie (){
    return (
        <div className={s.BannerMovie} >
            <div className={s.BannerMovie__topgradient}></div>
            <div className={s.BannerMovie__leftgradient}></div>
            <div className={s.BannerMovie__bottomgradient}></div>
            <div className={s.BannerMovie__title}>
                <div className={s.BannerMovie__text}>
                    
                </div>
                <div className={s.BannerMovie__description}>
                        <ul className={s.BannerMovie__list}>
                            <li className={s.BannerMovie__liScore}>7.3</li>
                            <li>2024</li>
                            <li>Текст</li>
                            <li>12+</li>
                        </ul>
                </div>
            </div>
            
        </div>
    )
}