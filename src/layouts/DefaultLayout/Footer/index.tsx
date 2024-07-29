import './footer.styl'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__content'>
            <p className='footer__text'>
              © Alisa Miller @ {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
