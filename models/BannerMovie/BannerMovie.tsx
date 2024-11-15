import s from './BannerMovie.module.scss'



export function BannerMovie (){
    return (
        <div className={s.BannerMovie} >         
            <div className={s.BannerMovie__bottomgradient}></div>
            <div className={s.BannerMovie__content}>
                <div className={s.BannerMovie__title}>
                </div>
                <div className={s.BannerMovie__list}>
                    <div className={s.list__box}>7.3</div>
                    <div className={s.list__text}>2024</div>
                    <div className={s.list__text}>Жанор</div>
                    <div className={s.list__text}>12+</div>
                </div>
            </div>
        </div>
    )
}