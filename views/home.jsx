const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/homefood.jpg" alt="Outdoor Picnic" />
                    <div>
                        Photo by <a href="https://unsplash.com/@spencerdavis">Spencer Davis</a> on <a href="https://unsplash.com/photos/vJsj-hgOEG0">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home