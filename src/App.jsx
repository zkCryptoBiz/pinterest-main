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
          <a className="social-link" href="https://t.me/PinterestCoinSol">
            <img className="social-img" src="/images/icons/tg.png" />
          </a>
          <a className="social-link" href="https://dexscreener.com/solana/cyYjYF4zE8qzdZujX7qYnhVDjEydVVh4MA51wJ8rest">
            <img className="social-img" src="/images/icons/dex_screener.jpg" />
          </a>
          <a className="social-link" href="https://www.dextools.io/app/en/solana/pair-explorer/GThKZDWkAhKpjRQxyWMYY7yxLA5pzn5ueHkqa6zVMv41?t=1737651234861">
            <img className="social-img" src="/images/icons/dextools.jpg" />
          </a>
        </div>
      </aside>

      <div className="spinner">
        <img src="/images/icons/pinterest_spinner.webp" alt="Spinner" className='spinner-img'/>
      </div>

      <section className='content'>
        <h1 className='title'>Pinterest</h1>

        <p className='contract'>
          CA:&nbsp;cyYjYF4zE8qzdZujX7qYnhVDjEydVVh4MA51wJ8rest
        </p>

        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=cyYjYF4zE8qzdZujX7qYnhVDjEydVVh4MA51wJ8rest" target='_blank' className='buy-link'>
          BUY
        </a>
      </section>
    </div>
  )
}

export default App
