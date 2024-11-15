import classNames from "classnames"
import s from './page.module.scss'
import { BannerMovie } from "@/models";
// /pages/about.js
export default function AboutPage() {
  return (
    <main className={s.main}> 
      <BannerMovie/>
    </main>
  );
}