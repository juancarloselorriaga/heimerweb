/* eslint-disable */

const React = require('react')
const ReactDOM = require('react-dom')
const { createScope, transformProxies, map } = require('./helpers')

const scripts = [
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  Promise.resolve("$(function(){$(\"#datetimepicker1\").datetimepicker()});"),
  Promise.resolve("1024<screen.width&&(window.onresize=void 0!==window.onresize?window.onresize:function(){location.reload()});"),
  fetch("https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js").then(body => body.text()),
  fetch("https://cdn.jsdelivr.net/momentjs/2.14.1/moment.min.js").then(body => body.text()),
  fetch("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js").then(body => body.text()),
  fetch("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js").then(body => body.text()),
]

let Controller

class OrdenesDeCompraView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/OrdenesDeCompraController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = OrdenesDeCompraView

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
    const proxies = Controller !== OrdenesDeCompraView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/heimerweb.webflow.css);
        ` }} />
        <span className="af-view">
          <div data-w-id="46489c79-1c6e-7040-1b6c-a6b83cadd2e9" className="af-class-modal af-class-ligar-orden">
            <div data-w-id="46489c79-1c6e-7040-1b6c-a6b83cadd2ea" className="af-class-div-general-close">
              <div className="af-class-div-fondo-modal">
                <div data-w-id="46489c79-1c6e-7040-1b6c-a6b83cadd2ec" className="af-class-div-fondo-modal-close">
                  <div className="af-class-div-container-modal">
                    <h1 className="af-class-titulomodal">Ligar O.C</h1>
                    <h1 className="af-class-titulomodal af-class-subtitulo">Selecciona una O.C. de la lista para ligarla al cliente.</h1>
                    <div className="af-class-form-block w-form">
                      <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form"><label htmlFor="name" className="af-class-field-label">ID Orden de compra</label><select id="field-2" name="field-2" data-name="Field 2" className="af-class-select-field w-select"><option value>Selecciona...</option><option value="oc1">12345678</option><option value="oc2">87654321</option></select></form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Ligar</a></div>
                </div>
              </div>
              <div className="af-class-modal af-class-borrar">
                <div className="af-class-div-fondo-modal">
                  <div data-w-id="7e64065d-207d-7182-24ea-b1be248761f3" className="af-class-div-fondo-modal-close">
                    <div className="af-class-div-container-modal">
                      <h1 className="af-class-titulomodal">Borrar</h1>
                      <h1 className="af-class-titulomodal af-class-subtitulo">¿Estás seguro de borrar este elemento?</h1><a href="#" className="af-class-boton af-class-principal af-class-popup af-class-borrar w-button">Si</a></div>
                  </div>
                  <div data-w-id="7e64065d-207d-7182-24ea-b1be248761fa" className="af-class-div-general-close">
                  </div>
                  <div className="af-class-section-principal">
                    <div className="af-class-container-dashboard w-container">
                      <div className="af-class-resumen-ejecutivo af-class-titulo af-class-menu"><img src="images/Menu.svg" alt className="af-class-icono-menu" /></div>
                      <div className="af-class-resumen-ejecutivo af-class-titulo"><img src="images/Logo-Heimer-256.png" alt className="af-class-logo" />
                        <h1 className="af-class-headline af-class-dash af-class-principal">ordenes de compra</h1>
                      </div>
                      <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo">
                        <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo">andrés gómez</h1>
                      </div>
                      <div className="af-class-resumen-ejecutivo af-class-principal">
                        <div className="af-class-dashboard">
                          <div className="af-class-div-datos-dashboard">
                            <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">1</h1>
                            <div className="af-class-label-dash">O.C.</div>
                          </div>
                        </div>
                        <div className="af-class-dashboard af-class-modos">
                          <div className="af-class-div-datos-dashboard">
                            <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">4</h1><a href="#" className="af-class-label-dash">Modos</a></div>
                        </div>
                      </div>
                      <div className="af-class-titulo-dashboard">
                        <div className="af-class-div-accesos-directos">
                          <div className="af-class-div-boton-navegacion"><a href="perfil-cliente.html" className="af-class-linkblockdash w-inline-block"><img src="images/Back.svg" alt className="af-class-image-4" /><div className="af-class-texto-nav-dashboard">Atrás</div></a></div>
                          <div className="af-class-div-boton-navegacion"><a href="index.html" className="af-class-linkblockdash w-inline-block"><img src="images/inicio.svg" alt className="af-class-image-4" /><div className="af-class-texto-nav-dashboard">inicio</div></a></div>
                          <div data-w-id="52b87031-db8d-b4e4-d333-621cf2ea7349" className="af-class-div-boton-navegacion"><img src="images/Nueva-OC.svg" alt className="af-class-image-4" />
                            <div className="af-class-texto-nav-dashboard">Ligar O.C.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-section-contenido">
                    <div className="af-class-container-contenido w-container">
                      <div className="af-class-container-busqueda">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar O.C..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                      </div>
                      <div className="af-class-lista-wrapper af-class-listado">
                        <div className="af-class-list-row af-class-titulos">
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">ID orden</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Accesorios</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Creación</h1>
                          </div>
                          <div className="af-class-list-column af-class-acciones">
                            <h1 className="af-class-listtitulosweb">Acciones</h1>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">ID Orden</h1>
                            <div cliente="Cliente" className="af-class-list-label">12345678</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Accesorios</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">2</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Fecha de creación</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">02-10-2018</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="accesorios-cliente.html" borrar="Borrar Cliente" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Accesorios</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">2</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Creación</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">02-10-2018</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="accesorios-cliente.html" borrar="Borrar Cliente" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* [if lte IE 9]><![endif] */}
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" />
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
                </div></div></div></div></span>
      </span>
    )
  }
}

module.exports = OrdenesDeCompraView

/* eslint-enable */