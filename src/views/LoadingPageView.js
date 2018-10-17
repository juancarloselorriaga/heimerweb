/* eslint-disable */

const React = require('react')
const { createScope, map, transformProxies } = require('./helpers')

const scripts = [
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class LoadingPageView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LoadingPageController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LoadingPageView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== LoadingPageView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/heimerweb.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-section-principal">
              <div className="w-container">
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-loading" />
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo af-class-loading" />
                <div className="af-class-resumen-ejecutivo af-class-principal af-class-loading" />
                <div className="af-class-titulo-dashboard af-class-loading">
                  <div className="af-class-div-menu-container">
                    <div className="af-class-menu-item-loading" />
                    <div className="af-class-menu-item-loading" />
                    <div className="af-class-menu-item-loading" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-contenido">
              <div className="af-class-container-contenido af-class-loading w-container">
                <div className="af-class-container-busqueda af-class-loading">
                  <div className="af-class-search-loading" />
                </div>
                <div className="af-class-list-row af-class-loading">
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                </div>
                <div className="af-class-list-row af-class-loading">
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                </div>
                <div className="af-class-list-row af-class-loading">
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                </div>
                <div className="af-class-list-row af-class-loading">
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                  <div className="af-class-list-column af-class-loading">
                    <div className="af-class-list-div-loading" />
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

module.exports = LoadingPageView

/* eslint-enable */