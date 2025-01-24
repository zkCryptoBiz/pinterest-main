import './App.css'

function App() {

  return (
    <div className='wrapper'>
      <aside className='toolbar'>
        <div className='socials-container'>
          <a className="social-link" href="/">
            <img className="social-img" src="/images/icons/pinterest.png" />
          </a>
          <a className="social-link" href="https://x.com/PinterestCoin">
            <img className="social-img" src="/images/icons/x.jpg" />
          </a>
          <a className="social-link" href="https://t.me/PumpPinterest">
            <img className="social-img" src="/images/icons/tg.png" />
          </a>
          <a className="social-link" href="https://jup.ag/swap/pinchange">
            <img className="social-img" src="/images/icons/jupiterswapbw.jpg" />
          </a>
          <a className="social-link" href="https://pump.fun/coin/pinchange">
            <img className="social-img" src="/images/icons/pumpfunbw1.jpg" />
          </a>
        </div>
      </aside>

      <div className="spinner">
        <img src="/images/icons/pinterest_spinner.webp" alt="Spinner" className='spinner-img'/>
      </div>

      <section className='content'>
        <h1 className='title'>Pinterest</h1>

        <p className='contract'>
          CA:&nbsp;pinchange
        </p>

        <a href="https://pump.fun/coin/pinchange" target='_blank' className='buy-link'>
          BUY
        </a>
      </section>
    </div>
  )
}

export default App
