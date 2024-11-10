import classNames from "classnames"
import s from './page.module.scss'
// /pages/about.js
export default function AboutPage() {
  return (
    <div className={s.main}>
      <h1 className={classNames(s.block__true, {
        [s.block__false]: false
      })}>Okmoovie</h1>
    </div>
  );
}