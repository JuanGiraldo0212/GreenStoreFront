import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Energy conservation</h4>
                            <p>Green Store provides you the best environmental friendly technology that improves the energy conservation for houses and even up to factories that are willing to reduce their environmental effect</p>
                            <p><a href="/products">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Water conservation</h4>
                            <p>Green Store provides solutions to water waste by IoT products that improve the monitoring of your resources</p>
                            <p><a href="/products">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>Solar energy</h4>
                            <p>Green Store is all about being environmental friendly, and so we do support all of our customers that want to opt for solar energy as a source of power. We have the best solar panels and IoT devices in the market</p>
                            <p><a href="/products">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
