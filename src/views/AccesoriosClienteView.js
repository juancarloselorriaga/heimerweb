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

class AccesoriosClienteView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AccesoriosClienteController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AccesoriosClienteView

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
    const proxies = Controller !== AccesoriosClienteView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/heimerweb.webflow.css);
        ` }} />
        <span className="af-view">
          <div data-w-id="fc803f42-e089-e955-f52f-97f4e335bf7a" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-agregar-acc-zona">
            <div data-w-id="a6eaba0f-ca2c-9152-b180-c5b0e43a4ca9" className="af-class-div-general-close">
              <div className="af-class-div-fondo-modal">
                <div data-w-id="8926e541-1f7f-b786-6d13-987f0fcd2b0a" className="af-class-div-fondo-modal-close">
                  <div className="af-class-div-container-modal">
                    <h1 className="af-class-titulomodal">Agregar accesorios</h1>
                    <h1 className="af-class-titulomodal af-class-subtitulo">Agrega accesorios existentes a la zona.</h1>
                    <div className="af-class-form-block w-form">
                      <form id="email-form-9" name="email-form-9" data-name="Email Form 9" className="af-class-form">
                        <div className="af-class-div-container-accesorios-nuevos">
                          <div className="af-class-div-accesorios">
                            <ul className="w-list-unstyled">
                              <li>
                                <div className="af-class-checkbox-field-accesorios w-checkbox"><input type="checkbox" id="checkbox-7" name="checkbox-7" data-name="Checkbox 7" className="w-checkbox-input" /><label htmlFor="checkbox-7" className="af-class-checkbox-label w-form-label">Accesorio existente</label></div>
                              </li>
                              <li>
                                <div className="af-class-checkbox-field-accesorios w-checkbox"><input type="checkbox" id="checkbox-7" name="checkbox-7" data-name="Checkbox 7" className="w-checkbox-input" /><label htmlFor="checkbox-8" className="af-class-checkbox-label w-form-label">Accesorio existente</label></div>
                              </li>
                              <li>
                                <div className="af-class-checkbox-field-accesorios w-checkbox"><input type="checkbox" id="checkbox-7" name="checkbox-7" data-name="Checkbox 7" className="w-checkbox-input" /><label htmlFor="checkbox-8" className="af-class-checkbox-label w-form-label">Accesorio existente</label></div>
                              </li>
                              <li>
                                <div className="af-class-checkbox-field-accesorios w-checkbox"><input type="checkbox" id="checkbox-7" name="checkbox-7" data-name="Checkbox 7" className="w-checkbox-input" /><label htmlFor="checkbox-8" className="af-class-checkbox-label w-form-label">Accesorio existente</label></div>
                              </li>
                              <li>
                                <div className="af-class-checkbox-field-accesorios w-checkbox"><input type="checkbox" id="checkbox-7" name="checkbox-7" data-name="Checkbox 7" className="w-checkbox-input" /><label htmlFor="checkbox-8" className="af-class-checkbox-label w-form-label">Accesorio existente</label></div>
                              </li>
                              <li>
                                <div className="af-class-checkbox-field-accesorios w-checkbox"><input type="checkbox" id="checkbox-7" name="checkbox-7" data-name="Checkbox 7" className="w-checkbox-input" /><label htmlFor="checkbox-8" className="af-class-checkbox-label w-form-label">Accesorio existente</label></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Agregar</a></div>
                </div>
              </div>
              <div style={{display: 'none', opacity: 0}} className="af-class-modal af-class-copiar-perfil">
                <div data-w-id="606af28b-2584-0d79-c486-42a1469fec5d" className="af-class-div-general-close">
                  <div className="af-class-div-fondo-modal">
                    <div data-w-id="606af28b-2584-0d79-c486-42a1469fec5f" className="af-class-div-fondo-modal-close">
                      <div className="af-class-div-container-modal">
                        <h1 className="af-class-titulomodal">Copiar perfil</h1>
                        <h1 className="af-class-titulomodal af-class-subtitulo">Selecciona la O.C. en donde se copiará este perfil de accesorios.</h1>
                        <div className="af-class-form-block w-form">
                          <form id="email-form-8" name="email-form-8" data-name="Email Form 8" className="af-class-form"><label htmlFor="name-6" className="af-class-field-label">ID de O.C.</label><select id="field-8" name="field-8" className="af-class-select-field w-select"><option value="oc1">12345678</option><option value="oc2">87654321</option></select></form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                    </div>
                  </div>
                  <div data-w-id="bfff7ac6-5543-11d6-3065-76a2cdfae848" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-rtc">
                    <div data-w-id="f62836d8-7e1a-c4c3-9ac1-3a1cb8d16c8c" className="af-class-div-general-close">
                      <div className="af-class-div-fondo-modal">
                        <div data-w-id="df0e6626-1f9b-68cc-03b6-d03f86090ea4" className="af-class-div-fondo-modal-close">
                          <div className="af-class-div-container-modal">
                            <h1 className="af-class-titulomodal">RTC</h1>
                            <h1 className="af-class-titulomodal af-class-subtitulo">Actual: Sábado 15:00 hrs.</h1>
                            <div className="af-class-form-block w-form">
                              <form id="email-form-7" name="email-form-7" data-name="Email Form 7" className="af-class-form"><label htmlFor="name-6" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-6" data-name="Name 6" id="name-6" /><label htmlFor="name-7" className="af-class-field-label">Día</label><select id="field-7" name="field-7" className="af-class-select-field w-select"><option value="lunes">Lunes</option><option value="martes">Martes</option><option value="miercoles">Miércoles</option><option value="jueves">Jueves</option><option value="viernes">Viernes</option><option value="sábado">Sábado</option><option value="domingo">Domingo</option></select><label htmlFor="name-7" className="af-class-field-label">Hora</label>
                                <div className="af-class-text-field w-embed">
                                  <div className="af-class-form-group">
                                    <div className="af-class-input-group af-class-date" id="datetimepicker1">
                                      <input type="text" className="af-class-form-control" />
                                      <span className="af-class-input-group-addon">
                                        <span className="af-class-glyphicon af-class-glyphicon-calendar">
                                        </span>
                                      </span></div>
                                  </div>
                                </div>
                                <div className="af-class-div-block-16">
                                  <div className="af-class-checkbox-field w-checkbox"><input type="checkbox" id="checkbox-6" name="checkbox-6" data-name="Checkbox 6" className="w-checkbox-input" /><label htmlFor="checkbox-6" className="af-class-checkbox-label-3 w-form-label">Recurrente</label></div>
                                </div>
                              </form>
                              <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                              </div>
                              <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                              </div>
                            </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                        </div>
                      </div>
                      <div style={{display: 'none', opacity: 0}} className="af-class-modal af-class-accesorios">
                        <div data-w-id="abd7a199-bf53-2336-5a62-ddf28f143271" className="af-class-div-general-close">
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
                                    <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Título OFF</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                                    <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio">Código OFF</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-3" data-name="Field 3" id="field-3" required /></div>
                                  </div>
                                  <div className="af-class-form-element">
                                    <div className="af-class-form-element">
                                      <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio"><strong>Código </strong>Pausa</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                                      <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio"><strong>Código </strong>4to</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-3" data-name="Field 3" id="field-3" required /></div>
                                      <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio"><strong>Código </strong>5to</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                                      <div className="af-class-form-child"><label className="af-class-field-label af-class-accesorio"><strong>Código </strong>Final</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="field-4" data-name="Field 4" id="field-4" required /></div>
                                    </div>
                                    <div className="af-class-form-element">
                                      <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                      </div>
                                      <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                      </div>
                                    </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div></form>
                                <div data-w-id="abd7a199-bf53-2336-5a62-ddf28f1432ad" className="af-class-div-fondo-modal-close">
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
                                      <div className="af-class-resumen-ejecutivo af-class-titulo"><img src="images/Logo-Heimer-256.png" alt className="af-class-logo" />
                                        <h1 className="af-class-headline af-class-dash af-class-principal">accesorios</h1>
                                      </div>
                                      <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo">
                                        <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo">andrés gómez</h1>
                                      </div>
                                      <div data-w-id="e77384bc-78a4-62c9-1f77-7c2927b759b5" className="af-class-resumen-ejecutivo af-class-principal">
                                        <div className="af-class-dashboard">
                                          <div className="af-class-div-datos-dashboard">
                                            <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">2</h1>
                                            <div className="af-class-label-dash">Accesorios</div>
                                          </div>
                                        </div>
                                        <div className="af-class-dashboard">
                                          <div className="af-class-div-datos-dashboard">
                                            <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">2</h1>
                                            <div className="af-class-label-dash">Zonas</div>
                                          </div>
                                        </div>
                                        <div className="af-class-dashboard">
                                          <div className="af-class-div-datos-dashboard">
                                            <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">2</h1>
                                            <div className="af-class-label-dash">RTC</div>
                                          </div>
                                        </div>
                                        <div className="af-class-dashboard af-class-modos">
                                          <div className="af-class-div-datos-dashboard">
                                            <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">4</h1><a href="#" className="af-class-label-dash">Modos</a></div>
                                        </div>
                                      </div>
                                      <div className="af-class-resumen-ejecutivo af-class-titulo af-class-menu"><img src="images/Menu.svg" alt className="af-class-icono-menu" /></div>
                                      <div className="af-class-titulo-dashboard">
                                        <div className="af-class-div-accesos-directos">
                                          <div className="af-class-div-boton-navegacion"><a href="perfil-cliente.html" className="af-class-linkblockdash w-inline-block"><img src="images/Back.svg" alt className="af-class-image-4" /><div className="af-class-texto-nav-dashboard">Atrás</div></a></div>
                                          <div data-w-id="6d7a48ee-41bb-f349-d0ec-2fcc4b5646cc" className="af-class-div-boton-navegacion"><img src="images/Nuevo-Accesorio.svg" alt className="af-class-image-4" />
                                            <div className="af-class-texto-nav-dashboard">accesorio</div>
                                          </div>
                                          <div className="af-class-div-boton-navegacion"><a href="nueva-zona.html" className="af-class-linkblockdash w-inline-block"><img src="images/Nueva-Zona.svg" alt className="af-class-image-4" /><div className="af-class-texto-nav-dashboard">zona</div></a></div>
                                          <div data-w-id="bed6ade3-5bd1-fd07-ba53-17c10150510c" className="af-class-div-boton-navegacion"><img src="images/Nuevo-RTC.svg" alt className="af-class-image-4" />
                                            <div className="af-class-texto-nav-dashboard">rtc</div>
                                          </div>
                                          <div data-w-id="1abee73d-9c16-209d-596a-1cd0ab66c85c" className="af-class-div-boton-navegacion"><img src="images/Copiar-Perfil.svg" alt className="af-class-image-4" />
                                            <div className="af-class-texto-nav-dashboard">Copiar </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="af-class-section-contenido">
                                    <div className="af-class-container-contenido w-container">
                                      <div data-duration-in={300} data-duration-out={100} data-easing="ease-in-out" className="af-class-tabs-container w-tabs">
                                        <div className="af-class-tabs-menu w-tab-menu">
                                          <a data-w-tab="Tab 1" className="af-class-tablink w-inline-block w-tab-link w--current">
                                            <div>Todos</div>
                                          </a>
                                          <a data-w-tab="Tab 2" className="af-class-tablink w-inline-block w-tab-link">
                                            <div>Zonas</div>
                                          </a>
                                          <a data-w-tab="Tab 3" className="af-class-tablink w-inline-block w-tab-link">
                                            <div>RTC</div>
                                          </a>
                                        </div>
                                        <div className="w-tab-content">
                                          <div data-w-tab="Tab 1" className="af-class-tabpane w-tab-pane w--tab-active">
                                            <div className="af-class-container-busqueda">
                                              <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} autofocus="true" name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                                            </div>
                                            <div className="af-class-lista-wrapper af-class-listado">
                                              <div className="af-class-list-row af-class-titulos">
                                                <div className="af-class-list-column">
                                                  <h1 className="af-class-listtitulosweb">Nombre</h1>
                                                </div>
                                                <div className="af-class-list-column">
                                                  <h1 className="af-class-listtitulosweb">Tipo</h1>
                                                </div>
                                                <div className="af-class-list-column af-class-acciones">
                                                  <h1 className="af-class-listtitulosweb">Acciones</h1>
                                                </div>
                                              </div>
                                              <div className="af-class-list-row">
                                                <div className="af-class-list-column af-class-expandible-responsivo">
                                                  <h1 className="af-class-list-heading">Nombre</h1>
                                                  <div cliente="Cliente" className="af-class-list-label">Luz Vestíbulo</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                                <div className="af-class-list-column af-class-web">
                                                  <h1 className="af-class-list-heading">Tipo</h1>
                                                  <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                </div>
                                                <div className="af-class-list-column af-class-acciones af-class-web">
                                                  <h1 className="af-class-list-heading">Acciones</h1>
                                                  <div className="af-class-accionescontainer"><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-ver-accesorio w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                                                </div>
                                                <div className="af-class-accordion-content">
                                                  <div className="af-class-list-column">
                                                    <h1 className="af-class-list-heading">Tipo</h1>
                                                    <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                  </div>
                                                  <div className="af-class-list-column af-class-acciones">
                                                    <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                                                    <div className="af-class-accionescontainer"><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-ver-accesorio w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="af-class-list-row">
                                                <div className="af-class-list-column af-class-expandible-responsivo">
                                                  <h1 className="af-class-list-heading">Nombre</h1>
                                                  <div cliente="Cliente" className="af-class-list-label">Luz Cocina</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                                <div className="af-class-list-column af-class-web">
                                                  <h1 className="af-class-list-heading">Tipo</h1>
                                                  <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                </div>
                                                <div className="af-class-list-column af-class-acciones af-class-web">
                                                  <h1 className="af-class-list-heading">Acciones</h1>
                                                  <div className="af-class-accionescontainer"><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-ver-accesorio w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                                                </div>
                                                <div className="af-class-accordion-content">
                                                  <div className="af-class-list-column">
                                                    <h1 className="af-class-list-heading">Tipo</h1>
                                                    <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                  </div>
                                                  <div className="af-class-list-column af-class-acciones">
                                                    <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                                                    <div className="af-class-accionescontainer"><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-ver-accesorio w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div data-w-tab="Tab 2" className="af-class-tabpane w-tab-pane">
                                            <div data-duration-in={300} data-duration-out={100} className="w-tabs">
                                              <div className="af-class-tabs-menu af-class-zonas w-tab-menu">
                                                <a data-w-tab="Tab 1" className="af-class-tablink w-inline-block w-tab-link w--current">
                                                  <div>Estancia</div>
                                                </a>
                                                <a data-w-tab="Tab 2" className="af-class-tablink w-inline-block w-tab-link">
                                                  <div>Cocina</div>
                                                </a>
                                              </div>
                                              <div className="w-tab-content">
                                                <div data-w-tab="Tab 1" className="af-class-tabpane w-tab-pane w--tab-active">
                                                  <div className="af-class-titulo-listado">
                                                    <div className="af-class-container-busqueda">
                                                      <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                                                    </div><a href="#" data-w-id="5e8bb165-b19e-c46a-89e4-0d2ae3f37963" className="af-class-agregar-accesorio-zona w-button" /></div><a href="#" data-w-id="5e8bb165-b19e-c46a-89e4-0d2ae3f37963" className="af-class-agregar-accesorio-zona w-button">
                                                  </a><div className="af-class-lista-wrapper af-class-listado"><a href="#" data-w-id="5e8bb165-b19e-c46a-89e4-0d2ae3f37963" className="af-class-agregar-accesorio-zona w-button">
                                                      <div className="af-class-list-row af-class-titulos">
                                                        <div className="af-class-list-column">
                                                          <h1 className="af-class-listtitulosweb">Nombre</h1>
                                                        </div>
                                                        <div className="af-class-list-column">
                                                          <h1 className="af-class-listtitulosweb">Tipo</h1>
                                                        </div>
                                                        <div className="af-class-list-column af-class-acciones">
                                                          <h1 className="af-class-listtitulosweb">Acciones</h1>
                                                        </div>
                                                      </div>
                                                    </a><div className="af-class-list-row"><a href="#" data-w-id="5e8bb165-b19e-c46a-89e4-0d2ae3f37963" className="af-class-agregar-accesorio-zona w-button">
                                                        <div className="af-class-list-column af-class-expandible-responsivo">
                                                          <h1 className="af-class-list-heading">Nombre</h1>
                                                          <div cliente="Cliente" className="af-class-list-label">Luz Vestíbulo</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                                        <div className="af-class-list-column af-class-web">
                                                          <h1 className="af-class-list-heading">Tipo</h1>
                                                          <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                        </div>
                                                      </a><div className="af-class-list-column af-class-acciones af-class-web"><a href="#" data-w-id="5e8bb165-b19e-c46a-89e4-0d2ae3f37963" className="af-class-agregar-accesorio-zona w-button">
                                                          <h1 className="af-class-list-heading">Acciones</h1>
                                                        </a><div className="af-class-accionescontainer"><a href="#" data-w-id="5e8bb165-b19e-c46a-89e4-0d2ae3f37963" className="af-class-agregar-accesorio-zona w-button" /><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                                                      </div>
                                                      <div className="af-class-accordion-content">
                                                        <div className="af-class-list-column">
                                                          <h1 className="af-class-list-heading">Tipo</h1>
                                                          <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                        </div>
                                                        <div className="af-class-list-column af-class-acciones">
                                                          <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                                                          <div className="af-class-accionescontainer"><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div data-w-tab="Tab 2" className="af-class-tabpane w-tab-pane">
                                                  <div className="af-class-titulo-listado">
                                                    <div className="af-class-container-busqueda">
                                                      <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                                                    </div><a href="#" className="af-class-agregar-accesorio-zona w-button" /></div><a href="#" className="af-class-agregar-accesorio-zona w-button">
                                                  </a><div className="af-class-lista-wrapper af-class-listado"><a href="#" className="af-class-agregar-accesorio-zona w-button">
                                                      <div className="af-class-list-row af-class-titulos">
                                                        <div className="af-class-list-column">
                                                          <h1 className="af-class-listtitulosweb">Nombre</h1>
                                                        </div>
                                                        <div className="af-class-list-column">
                                                          <h1 className="af-class-listtitulosweb">Tipo</h1>
                                                        </div>
                                                        <div className="af-class-list-column af-class-acciones">
                                                          <h1 className="af-class-listtitulosweb">Acciones</h1>
                                                        </div>
                                                      </div>
                                                    </a><div className="af-class-list-row"><a href="#" className="af-class-agregar-accesorio-zona w-button">
                                                        <div className="af-class-list-column af-class-expandible-responsivo">
                                                          <h1 className="af-class-list-heading">Nombre</h1>
                                                          <div cliente="Cliente" className="af-class-list-label">Luz Cocina</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                                        <div className="af-class-list-column af-class-web">
                                                          <h1 className="af-class-list-heading">Tipo</h1>
                                                          <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                        </div>
                                                      </a><div className="af-class-list-column af-class-acciones af-class-web"><a href="#" className="af-class-agregar-accesorio-zona w-button">
                                                          <h1 className="af-class-list-heading">Acciones</h1>
                                                        </a><div className="af-class-accionescontainer"><a href="#" className="af-class-agregar-accesorio-zona w-button" /><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                                                      </div>
                                                      <div className="af-class-accordion-content">
                                                        <div className="af-class-list-column">
                                                          <h1 className="af-class-list-heading">Tipo</h1>
                                                          <div tipo="Tipo de acceso" className="af-class-list-label">4</div>
                                                        </div>
                                                        <div className="af-class-list-column af-class-acciones">
                                                          <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                                                          <div className="af-class-accionescontainer"><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div data-w-tab="Tab 3" className="af-class-tabpane w-tab-pane">
                                            <div className="af-class-container-busqueda">
                                              <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} autofocus="true" name="query" placeholder="Buscar RTC..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                                            </div>
                                            <div className="af-class-lista-wrapper af-class-listado">
                                              <div className="af-class-list-row af-class-titulos">
                                                <div className="af-class-list-column">
                                                  <h1 className="af-class-listtitulosweb">Nombre</h1>
                                                </div>
                                                <div className="af-class-list-column">
                                                  <h1 className="af-class-listtitulosweb">Día</h1>
                                                </div>
                                                <div className="af-class-list-column">
                                                  <h1 className="af-class-listtitulosweb">Horario</h1>
                                                </div>
                                                <div className="af-class-list-column af-class-acciones">
                                                  <h1 className="af-class-listtitulosweb">Acciones</h1>
                                                </div>
                                              </div>
                                              <div className="af-class-list-row">
                                                <div className="af-class-list-column af-class-expandible-responsivo">
                                                  <h1 className="af-class-list-heading">Nombre</h1>
                                                  <div cliente="Cliente" className="af-class-list-label">Vacaciones</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                                <div className="af-class-list-column af-class-web">
                                                  <h1 className="af-class-list-heading">Día</h1>
                                                  <div password="Contraseña" className="af-class-list-label">Lunes</div>
                                                </div>
                                                <div className="af-class-list-column af-class-web">
                                                  <h1 className="af-class-list-heading">Horario</h1>
                                                  <div password="Contraseña" className="af-class-list-label">15:00</div>
                                                </div>
                                                <div className="af-class-list-column af-class-acciones af-class-web">
                                                  <h1 className="af-class-list-heading">Acciones</h1>
                                                  <div className="af-class-accionescontainer"><a href="#" editar="Editar Perfil" data-w-id="ae34091e-6871-6590-24ec-edb81c4546dd" className="af-class-linkblockacciones w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                                                </div>
                                                <div className="af-class-accordion-content">
                                                  <div className="af-class-list-column">
                                                    <h1 className="af-class-list-heading">Día</h1>
                                                    <div password="Contraseña" className="af-class-list-label">Lunes</div>
                                                  </div>
                                                  <div className="af-class-list-column">
                                                    <h1 className="af-class-list-heading">Horario</h1>
                                                    <div password="Contraseña" className="af-class-list-label">15:00</div>
                                                  </div>
                                                  <div className="af-class-list-column af-class-acciones">
                                                    <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                                                    <div className="af-class-accionescontainer"><a href="#" editar="Editar Perfil" data-w-id="6818bd17-d6eb-a828-db85-22f57220bac3" className="af-class-linkblockacciones w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="af-class-list-row">
                                                <div className="af-class-list-column af-class-expandible-responsivo">
                                                  <h1 className="af-class-list-heading">Nombre</h1>
                                                  <div cliente="Cliente" className="af-class-list-label">Jardín</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                                <div className="af-class-list-column af-class-web">
                                                  <h1 className="af-class-list-heading">Día</h1>
                                                  <div password="Contraseña" className="af-class-list-label">Todos los días</div>
                                                </div>
                                                <div className="af-class-list-column af-class-web">
                                                  <h1 className="af-class-list-heading">Horario</h1>
                                                  <div password="Contraseña" className="af-class-list-label">18:00</div>
                                                </div>
                                                <div className="af-class-list-column af-class-acciones af-class-web">
                                                  <h1 className="af-class-list-heading">Acciones</h1>
                                                  <div className="af-class-accionescontainer"><a href="#" editar="Editar Perfil" data-w-id="a9c2770a-0127-e95e-5b08-11f10128a246" className="af-class-linkblockacciones w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                                                </div>
                                                <div className="af-class-accordion-content">
                                                  <div className="af-class-list-column">
                                                    <h1 className="af-class-list-heading">Día</h1>
                                                    <div password="Contraseña" className="af-class-list-label">Lunes</div>
                                                  </div>
                                                  <div className="af-class-list-column">
                                                    <h1 className="af-class-list-heading">Horario</h1>
                                                    <div password="Contraseña" className="af-class-list-label">15:00</div>
                                                  </div>
                                                  <div className="af-class-list-column af-class-acciones">
                                                    <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                                                    <div className="af-class-accionescontainer"><a href="#" editar="Editar Perfil" data-w-id="a9c2770a-0127-e95e-5b08-11f10128a260" className="af-class-linkblockacciones w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* [if lte IE 9]><![endif] */}
                                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" />
                                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
                                </div></div></div></div></div></div></div></div></div></div></div></div></span>
      </span>
    )
  }
}

module.exports = AccesoriosClienteView

/* eslint-enable */