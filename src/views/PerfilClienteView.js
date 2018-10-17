/* eslint-disable */

const React = require('react')
const { createScope, map, transformProxies } = require('./helpers')

const scripts = [
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class PerfilClienteView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PerfilClienteController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PerfilClienteView

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
    const proxies = Controller !== PerfilClienteView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/heimerweb.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div style={{display: 'none', opacity: 0}} className="af-class-modal af-class-ligar-orden">
              <div data-w-id="c7b4865a-3d68-16bf-e244-f42c7cf141d9" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div data-w-id="c7b4865a-3d68-16bf-e244-f42c7cf141db" className="af-class-div-fondo-modal-close" />
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
            <div data-w-id="2e3ca5a3-38b5-ffa7-ca35-34d143319516" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-ubicacion">
              <div data-w-id="5a7bbf7c-2492-0aed-fd89-6259e8b2782d" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Nueva ubicación</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Nombra la ubicación e ingresa el no. de serie Heimer.</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-6" name="email-form-6" data-name="Email Form 6" className="af-class-form"><label htmlFor="name-5" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-5" data-name="Name 5" id="name-5" /><label htmlFor="ID-Dispositivo" className="af-class-field-label">No. serie Heimer</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="ID-Dispositivo" data-name="ID Dispositivo" id="ID-Dispositivo" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                <div data-w-id="880ca061-2c62-2120-aebc-d10cad30a689" className="af-class-div-fondo-modal-close" />
              </div>
            </div>
            <div data-w-id="9b5b5110-21c5-5f5b-da71-a2eac1ec1d54" className="af-class-modal af-class-nombre">
              <div data-w-id="7b515d0c-4d8c-d39f-0250-50ac47cee835" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Editar elemento</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Cambia el nombre del elemento</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form"><label htmlFor="name" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name" data-name="Name" id="name" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">guardar</a></div>
                <div data-w-id="3011294e-d633-9b5f-3821-7a23fa234f8e" className="af-class-div-fondo-modal-close" />
              </div>
            </div>
            <div className="af-class-modal af-class-edicion">
              <div className="af-class-div-fondo-modal">
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Editar Cliente</h1>
                  <h1 cliente="Cliente" className="af-class-titulomodal af-class-subtitulo">agcing@hotmail.com</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form"><label htmlFor="Nombre" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="Nombre" data-name="Nombre" placeholder="Andrés Gómez" id="Nombre" required /><label htmlFor="password-3" className="af-class-field-label">Contraseña</label><input type="password" className="af-class-text-field w-input" maxLength={256} name="password-2" data-name="Password 2" placeholder="Contraseña nueva" id="password-2" required /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                <div data-w-id="8b41c03f-5021-e6ae-2ccd-ee2f1cc49997" className="af-class-div-fondo-modal-close" />
              </div>
              <div data-w-id="8b41c03f-5021-e6ae-2ccd-ee2f1cc49998" className="af-class-div-general-close" />
            </div>
            <div style={{display: 'none', opacity: 0}} className="af-class-modal af-class-borrar">
              <div className="af-class-div-fondo-modal">
                <div data-w-id="7e64065d-207d-7182-24ea-b1be248761f3" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Borrar</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">¿Estás seguro de borrar este elemento?</h1><a href="#" className="af-class-boton af-class-principal af-class-popup af-class-borrar w-button">Si</a></div>
              </div>
              <div data-w-id="7e64065d-207d-7182-24ea-b1be248761fa" className="af-class-div-general-close" />
            </div>
            <div className="af-class-section-principal">
              <div className="af-class-container-dashboard w-container">
                <div className="af-class-resumen-ejecutivo af-class-titulo"><img src="images/Logo-Heimer-256.png" alt className="af-class-logo" />
                  <h1 className="af-class-headline af-class-dash af-class-principal">Perfil</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-menu"><img src="images/Info.svg" alt className="af-class-icono-menu" /></div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo">
                  <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo">andrés gómez</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-principal">
                  <div className="af-class-div-dashboard-container">
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">Deluxe</h1>
                      <div className="af-class-label-dash">Tipo</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">2</h1>
                      <div className="af-class-label-dash">Ubicaciones</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">1</h1>
                      <div className="af-class-label-dash">O.C.</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-titulo-dashboard">
                  <div className="af-class-div-menu-container">
                    <div className="af-class-div-boton-navegacion"><a href="index.html" className="af-class-linkblockdash w-inline-block"><img src="images/inicio.svg" alt className="af-class-icono-dash" /><div className="af-class-texto-nav-dashboard">inicio</div></a></div>
                    <div data-w-id="961417ed-24f6-3eb9-f431-033d905a4bcc" className="af-class-div-boton-navegacion"><img src="images/Nueva-Ubicación.svg" alt className="af-class-icono-dash" />
                      <div className="af-class-texto-nav-dashboard">ubicación</div>
                    </div>
                    <div data-w-id="0cd60766-c934-6ba7-a13b-cb4e8ed6a8ad" className="af-class-div-boton-navegacion"><img src="images/Nueva-OC.svg" alt className="af-class-icono-dash" />
                      <div className="af-class-texto-nav-dashboard">Ligar O.C.</div>
                    </div>
                    <div data-w-id="161afc42-8ed2-bd39-68de-26977364bf6e" className="af-class-div-boton-navegacion"><img src="images/Borrar.svg" alt className="af-class-icono-dash" />
                      <div className="af-class-texto-nav-dashboard">Borrar cliente</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-contenido">
              <div className="af-class-container-contenido w-container">
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-container w-tabs">
                  <div className="af-class-tabs-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="af-class-tablink w-inline-block w-tab-link w--current">
                      <div>Ubicaciones</div>
                    </a>
                    <a data-w-tab="Tab 2" className="af-class-tablink w-inline-block w-tab-link">
                      <div>O.C.</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className="af-class-tabpane w-tab-pane w--tab-active">
                      <div className="af-class-container-busqueda">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar ubicaciones..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                      </div>
                      <div className="af-class-lista-wrapper af-class-listado">
                        <div className="af-class-list-row af-class-titulos">
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Nombre</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">No. de serie</h1>
                          </div>
                          <div className="af-class-list-column af-class-acciones">
                            <h1 className="af-class-listtitulosweb">Acciones</h1>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div cliente="Cliente" className="af-class-list-label">Casa</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">No. de serie</h1>
                            <div mail="Mail" className="af-class-list-label">12345678</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-editar-elemento w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">No. de serie</h1>
                              <div mail="Mail" className="af-class-list-label">12345678</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a borrar="Borrar Cliente" href="#" className="af-class-linkblockacciones af-class-editar-elemento w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div cliente="Cliente" className="af-class-list-label">Oficina</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">No. de serie</h1>
                            <div mail="Mail" className="af-class-list-label">87654321</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-editar-elemento w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">No. de serie</h1>
                              <div mail="Mail" className="af-class-list-label">87654321</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a borrar="Borrar Cliente" href="#" className="af-class-linkblockacciones af-class-editar-elemento w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="af-class-tabpane w-tab-pane">
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

module.exports = PerfilClienteView

/* eslint-enable */