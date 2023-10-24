import scss from './Footer.module.scss'

export const Footer = () => {
  return (
    <section className={scss.footer}>
      <div className={scss.footerBlock}>
        <span className={scss.creator}>© 2023 Created by Natallia Mashkouskaya</span>
      </div>
    </section>
  )
}
