/* eslint-disable */

const React = require('react')
const { createScope, map, transformProxies } = require('./helpers')

const scripts = [
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class NuevaOrdenView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NuevaOrdenController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NuevaOrdenView

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
    const proxies = Controller !== NuevaOrdenView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/heimerweb.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-oc">
            <div style={{display: 'none', opacity: 0}} className="af-class-modal af-class-accesorios">
              <div data-w-id="962d52c3-e9fd-5dfe-49dd-6732e2e4fec4" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div className="af-class-div-container-modal af-class-accesorios">
                  <h1 className="af-class-titulomodal">Accesorios</h1>
                  <div className="af-class-form-block af-class-accesorio w-form">
                    <form id="email-form-3" name="email-form-3" data-name="Email Form 3" className="af-class-form"><label htmlFor="name-7" className="af-class-field-label af-class-accesorio">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-2" data-name="Name 2" id="name-2" />
                      <div className="af-class-form-element">
                        <div className="af-class-form-child"><label htmlFor="name-7" className="af-class-field-label af-class-accesorio">O.C.</label>
                          <div className="af-class-label-oc">12345678</div>
                        </div>
                        <div className="af-class-form-child"><label htmlFor="name-7" className="af-class-field-label af-class-accesorio">Tipo</label><select id="field-2" name="field-2" className="af-class-select-field w-select"><option value="tipo1">Tipo 1</option><option value="tipo2">Tipo 2</option><option value="tipo3">Tipo 3</option><option value="tipo4">Tipo 4</option><option value="tipo5">Tipo 5</option></select></div>
                      </div>
                      <div className="af-class-form-element">
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Título ON</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-8" data-name="Field 8" id="field-8" required /></div>
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código ON</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-3" data-name="Field 3" id="field-3" required /></div>
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Titulo OFF</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código OFF</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-3" data-name="Field 3" id="field-3" required /></div>
                      </div>
                      <div className="af-class-form-element" />
                      <div className="af-class-form-element">
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código Pausa</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código 4to</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-3" data-name="Field 3" id="field-3" required /></div>
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código 5to</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                        <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código Final</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                      </div>
                      <div className="af-class-form-element" />
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                <div data-w-id="962d52c3-e9fd-5dfe-49dd-6732e2e4ff00" className="af-class-div-fondo-modal-close" />
              </div>
            </div>
            <div className="af-class-modal af-class-nuevo">
              <div id="w-node-aa6020a183a2" className="af-class-div-general-close af-class-nueva-orden"><a href="index.html" className="af-class-linkblock-div-general-close w-inline-block" /></div>
              <div id="w-node-38cc82309031" className="af-class-div-fondo-modal af-class-nueva-orden">
                <div className="af-class-div-fondo-modal-close"><a href="index.html" className="af-class-linkblockreturn w-inline-block" /></div>
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Nueva orden de compra</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form">
                      <div data-animation="cross" data-easing="ease-in-sine" data-hide-arrows={1} data-disable-swipe={1} data-duration={200} className="af-class-slider w-slider">
                        <div className="af-class-mask w-slider-mask">
                          <div className="af-class-paso w-slide">
                            <div className="af-class-div-container-form">
                              <div className="af-class-div-container-content">
                                <h1 className="af-class-titulomodal af-class-subtitulo">Ingresa un número único para la orden de compra</h1><label htmlFor="oc-3" className="af-class-field-label">No. Orden de compra (8 dígitos)</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="oc-2" data-name="Oc 2" placeholder="Ingresa un número único.." id="oc-2" required /></div>
                              <div className="af-class-counter-pasos">
                                <div className="af-class-text-pasos">1/2</div>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-paso w-slide">
                            <div className="af-class-div-container-form">
                              <div className="af-class-div-container-content">
                                <div className="af-class-div-titulo-pasos">
                                  <h1 className="af-class-titulomodal af-class-subtitulo">Agrega nuevos accesorios.</h1>
                                </div>
                                <div className="af-class-div-container-accesorios-nuevos"><a href="#" data-w-id="a226f9fe-9a77-1776-6a89-3b6c110ddbcc" className="af-class-boton af-class-principal af-class-popup af-class-content w-button">Agregar</a>
                                  <div className="af-class-div-accesorios">
                                    <ul className="af-class-unordered-list w-list-unstyled">
                                      <li className="af-class-list-item">
                                        <div className="af-class-item-accesorios-nuevos">Accesorio dummy 1</div><a href="#" className="af-class-boton-eliminar w-button">Eliminar</a></li>
                                      <li className="af-class-list-item">
                                        <div className="af-class-item-accesorios-nuevos">Accesorio dummy 2</div><a href="#" className="af-class-boton-eliminar w-button">Eliminar</a></li>
                                      <li className="af-class-list-item">
                                        <div className="af-class-item-accesorios-nuevos">Accesorio dummy 3</div><a href="#" className="af-class-boton-eliminar w-button">Eliminar</a></li>
                                      <li className="af-class-list-item">
                                        <div className="af-class-item-accesorios-nuevos">Accesorio dummy 4</div><a href="#" className="af-class-boton-eliminar w-button">Eliminar</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div><a href="#" className="af-class-boton af-class-principal af-class-popup af-class-terminar w-button">guardar</a>
                              <div className="af-class-counter-pasos">
                                <div className="af-class-text-pasos">2/2</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-left-arrow w-slider-arrow-left">
                          <div className="af-class-atras af-class-web">atrás</div>
                          <div className="af-class-atras af-class-responsivo">&lt;</div>
                        </div>
                        <div className="af-class-boton-siguiente-container w-slider-arrow-right">
                          <div className="af-class-boton af-class-principal af-class-popup af-class-pasos">siguiente</div>
                        </div>
                        <div className="af-class-slide-nav w-slider-nav w-slider-nav-invert w-round" />
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-container-2 w-container" />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

module.exports = NuevaOrdenView

/* eslint-enable */