/* eslint-disable */

const React = require('react')
const { createScope, map, transformProxies } = require('./helpers')

const scripts = [
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

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
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

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
            <div data-w-id="74f2c014-3101-e120-f770-30e99e28513d" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-notificacion">
              <div data-w-id="ee18a921-e01a-0d4f-2d6c-65406474ce7c" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div data-w-id="7953b3f4-f5bc-7429-cec6-6cdd33cc1976" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal af-class-notificacion">
                  <h1 className="af-class-titulomodal">Nueva notificación</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Selecciona si deseas enviar una notificación masiva o individual.</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-4" name="email-form-4" data-name="Email Form 4" className="af-class-form">
                      <div className="af-class-div-notificacion-tipo"><label htmlFor="name-3" className="af-class-field-label">Tipo de cliente (notificación masiva)</label><select id="field-2" name="field-2" className="af-class-select-field w-select"><option value>Selecciona un tipo..</option><option value="todos">Todos los clientes</option><option value="todosLite">Todos Lite</option><option value="todosDeluxe">Todos Deluxe</option></select><label htmlFor="name-3" className="af-class-field-label">ó</label><label htmlFor="name-3" className="af-class-field-label">Cliente (notificación individual)</label><select id="field-2" name="field-2" className="af-class-select-field w-select"><option value>Selecciona un cliente...</option><option value="cliente1">Andrés Gómez</option><option value="cliente2">Juan Carlos Elorriaga</option><option value="cliente3">Juan Ursúa</option></select></div>
                      <div className="af-class-div-notificacion-mensaje"><label htmlFor="titulo-notificacion" className="af-class-field-label">Título</label><textarea id="titulo-notificacion" name="titulo-notificacion" maxLength={5000} placeholder="Escribe aquí el título de la notificación" required data-name="titulo-notificacion" className="w-input" defaultValue={""} /><label htmlFor="mensaje-notificacion-2" className="af-class-field-label">Mensaje</label><textarea id="mensaje-notificacion-2" name="mensaje-notificacion-2" maxLength={5000} placeholder="Escribe aquí tu notificación" required data-name="Mensaje Notificacion 2" className="w-input" defaultValue={""} /></div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Enviar</a></div>
              </div>
            </div>
            <div data-w-id="e1b018b0-5fae-46e2-d593-89ce972fe853" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-editar-oc">
              <div data-w-id="816d0b64-54b9-e871-d70e-ebf58b78d88d" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div data-w-id="c36e1957-5861-cd91-3fef-1dce0877fa99" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Editar O.C.</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Selecciona un cliente de la lista para reasignar la O.C.</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-3" name="email-form-3" data-name="Email Form 3" className="af-class-form"><label htmlFor="name-3" className="af-class-field-label">Cliente</label><select id="field" name="field" className="af-class-select-field w-select"><option value="cliente1">Juan Carlos Elorriaga</option><option value="cliente2">Juan Ursúa</option><option value="seleccionar">Selecciona un cliente...</option></select><label htmlFor="Ubicacion" className="af-class-field-label">Ubicación</label><select id="Ubicacion" name="Ubicacion" data-name="Ubicacion" className="af-class-select-field w-select"><option value="ub1">Casa</option><option value="Ub2">Oficina</option></select></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Reasignar</a></div>
              </div>
            </div>
            <div data-w-id="484238f3-eb15-8220-fc9d-0a3059440674" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-nuevo-cliente">
              <div id="w-node-708fdc9f71de" data-w-id="1e28e5e1-c6d3-126a-4047-708fdc9f71de" className="af-class-div-general-close" />
              <div id="w-node-f4caf3210750" className="af-class-div-fondo-modal">
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Nuevo cliente</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Ingresa los datos del cliente</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form"><label htmlFor="name" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name" data-name="Name" id="name" /><label htmlFor="Email" className="af-class-field-label">Correo</label><input type="email" className="af-class-text-field w-input" maxLength={256} name="Email" data-name="Email" id="Email" /><label htmlFor="Email-confirmation" className="af-class-field-label">Confirmar correo</label><input type="email" className="af-class-text-field w-input" maxLength={256} name="Email-confirmation" data-name="Email confirmation" id="Email-confirmation" /><label htmlFor="name-3" className="af-class-field-label">Contraseña</label><input type="password" className="af-class-text-field w-input" maxLength={256} name="name-2" data-name="Name 2" id="name-2" /><label htmlFor="Tipo" className="af-class-field-label">Tipo</label><select id="Tipo" name="Tipo" data-name="Tipo" className="af-class-select-field w-select"><option value="lite">Lite</option><option value="deluxe">Deluxe</option></select></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                <div data-w-id="6fb3bf54-9109-b518-b8bd-c7de5fde0396" className="af-class-div-fondo-modal-close" />
              </div>
            </div>
            <div data-w-id="ddf56cf2-e2fc-1681-7b08-df822cb1a86a" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-borrar">
              <div className="af-class-div-fondo-modal">
                <div data-w-id="1578bcd4-c25e-26ee-0e9b-45241d428911" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Borrar</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">¿Estás seguro de borrar este elemento?</h1><a href="#" className="af-class-boton af-class-principal af-class-popup af-class-borrar w-button">Si</a></div>
              </div>
              <div data-w-id="1578bcd4-c25e-26ee-0e9b-45241d428918" className="af-class-div-general-close" />
            </div>
            <div data-w-id="fef7ee91-fae0-33de-54db-0251571da099" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-edicion">
              <div className="af-class-div-fondo-modal">
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Editar Cliente</h1>
                  <h1 cliente="Cliente" className="af-class-titulomodal af-class-subtitulo">agcing@hotmail.com</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form"><label htmlFor="Nombre" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="Nombre" data-name="Nombre" placeholder="Andres Gómez" id="Nombre" required /><label htmlFor="Password-4" className="af-class-field-label">Contraseña</label><input type="password" className="af-class-text-field w-input" maxLength={256} name="Password" data-name="Password" placeholder="Contraseña nueva" id="Password-3" required /><label htmlFor="Tipo-2" className="af-class-field-label">Tipo</label><select id="Tipo-2" name="Tipo" data-name="Tipo" className="af-class-select-field w-select"><option value="lite">Lite</option><option value="deluxe">Deluxe</option></select></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Guardar</a></div>
                <div data-w-id="b476dee1-09b0-916e-7fc9-e548255e6d4b" className="af-class-div-fondo-modal-close" />
              </div>
              <div data-w-id="b476dee1-09b0-916e-7fc9-e548255e6d4c" className="af-class-div-general-close" />
            </div>
            <div className="af-class-section-principal">
              <div className="af-class-container-dashboard w-container">
                <div className="af-class-resumen-ejecutivo af-class-titulo"><img src="images/Logo-Heimer-256.png" alt className="af-class-logo" />
                  <h1 className="af-class-headline af-class-dash af-class-principal">inicio</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo">
                  <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo">Clientes</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-menu"><img src="images/Info.svg" alt className="af-class-icono-menu" /></div>
                <div className="af-class-resumen-ejecutivo af-class-principal">
                  <div className="af-class-div-dashboard-container">
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">4</h1>
                      <div className="af-class-label-dash">Deluxe</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">3</h1>
                      <div className="af-class-label-dash">Lite</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">1</h1>
                      <div className="af-class-label-dash">O.C. asignada</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 dispositivosactivos="Dispositivos Activos" className="af-class-heading">1</h1>
                      <div className="af-class-label-dash">O.C. sin asignar</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-titulo-dashboard">
                  <div className="af-class-div-menu-container">
                    <div data-w-id="42179216-cbe0-daa5-b273-b07f06f3714e" className="af-class-div-boton-navegacion"><img src="images/Nuevo-Cliente.svg" alt className="af-class-icono-dash" />
                      <div className="af-class-texto-nav-dashboard">cliente</div>
                    </div>
                    <div className="af-class-div-boton-navegacion"><a href="nueva-orden.html" className="af-class-linkblockdash w-inline-block"><img src="images/Nueva-OC.svg" alt className="af-class-icono-dash" /><div className="af-class-texto-nav-dashboard">NUEVA&nbsp;O.C.</div></a></div>
                    <div className="af-class-div-boton-navegacion"><a data-w-id="ed84bf49-f69c-c45d-73f5-90f30241342f" href="#" className="af-class-linkblockdash w-inline-block"><img src="images/Notificacion.svg" alt className="af-class-icono-dash" /><div className="af-class-texto-nav-dashboard">Notificación</div></a></div>
                    <div className="af-class-div-boton-navegacion"><a href="#" className="af-class-linkblockdash w-inline-block"><img src="images/Cerrar-Sesion.svg" alt className="af-class-icono-dash" /><div className="af-class-texto-nav-dashboard">Cerrar Sesión</div></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-contenido">
              <div className="af-class-container-contenido w-container">
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-container w-tabs">
                  <div className="af-class-tabs-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="af-class-tablink w-inline-block w-tab-link w--current">
                      <div>Clientes</div>
                    </a>
                    <a data-w-tab="Tab 2" className="af-class-tablink w-inline-block w-tab-link">
                      <div>O.C.</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className="af-class-tabpane w-tab-pane w--tab-active">
                      <div className="af-class-container-busqueda">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar clientes..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                      </div>
                      <div className="af-class-lista-wrapper af-class-listado">
                        <div className="af-class-list-row af-class-titulos">
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Cliente</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Mail</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Contraseña</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Tipo</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Acceso</h1>
                          </div>
                          <div className="af-class-list-column af-class-acciones">
                            <h1 className="af-class-listtitulosweb">Acciones</h1>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div data-w-id="52e9d75b-e489-00d4-f5af-397ea1a5c3b5" className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Andrés Gómez</div><img src="images/down-arrow.svg" data-w-id="3c9b40f2-46e9-346d-95b8-1d6e9b85c325" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">agcing@hotmail.com</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">1234</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Mail</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" width={30} alt className="af-class-imagen-linkblockacciones" /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" width={30} alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div data-w-id="27b69826-4d6e-db1a-58d1-a0a5a055acd0" className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">agcing@hotmail.com</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">1234</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Mail</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" width={32} alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Juan Carlos Elorriaga</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">juancarlos@jjaas.mx</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">4321</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Lite</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Google</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">juancarlos@jjaas.mx</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">4321</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Lite</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Google</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Juan Ursúa</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">juan.ursua@caltec.mx</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">2323</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">juan.ursua@caltec.mx</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">1234</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Cliente</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">2323</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Lite</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">1234</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Ubicaciones</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Lite</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Cliente</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">2323</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Lite</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">1234</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Ubicaciones</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Lite</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Cliente</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">2323</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">1234</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Ubicaciones</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Cliente</h1>
                            <div cliente="Cliente" className="af-class-list-label">Cliente</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Contraseña</h1>
                            <div password="Contraseña" className="af-class-list-label">2323</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Ubicaciones</h1>
                            <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Acceso</h1>
                            <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Mail</h1>
                              <div mail="Mail" className="af-class-list-label">cliente@caltec.mx</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Contraseña</h1>
                              <div password="Contraseña" className="af-class-list-label">1234</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Ubicaciones</h1>
                              <div dispositivos="Cantidad de dispositivos" className="af-class-list-label">Deluxe</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Acceso</h1>
                              <div tipo="Tipo de acceso" className="af-class-list-label">Facebook</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="perfil-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-cliente w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a><a href="#" status="Estatus cliente" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="af-class-tabpane w-tab-pane">
                      <div className="af-class-container-busqueda">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar clientes..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                      </div>
                      <div className="af-class-lista-wrapper af-class-listado">
                        <div className="af-class-list-row af-class-titulos">
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">ID Orden</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Cliente</h1>
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
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">2</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">12-Oct-18</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="accesorios-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" className="af-class-linkblockacciones af-class-editar-oc w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Accesorios</h1>
                              <div mail="Mail" className="af-class-list-label">2</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Creación</h1>
                              <div mail="Mail" className="af-class-list-label">12-Oct-18</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="/ordenes-de-compra" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" width={32} alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-oc w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">ID Orden</h1>
                            <div cliente="Cliente" className="af-class-list-label">87654321</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">Sin asignar</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">3</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Mail</h1>
                            <div mail="Mail" className="af-class-list-label">12-Oct-18</div>
                          </div>
                          <div className="af-class-list-column af-class-acciones af-class-web">
                            <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                            <div className="af-class-accionescontainer"><a href="accesorios-cliente.html" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.svg" alt /></a><a href="#" className="af-class-linkblockacciones af-class-editar-oc w-inline-block"><img src="images/Editar.svg" alt /></a><a href="#" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column af-class-oculto-responsivo">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Cliente</h1>
                              <div mail="Mail" className="af-class-list-label">Andrés Gómez</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Accesorios</h1>
                              <div mail="Mail" className="af-class-list-label">2</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Creación</h1>
                              <div mail="Mail" className="af-class-list-label">12-Oct-18</div>
                            </div>
                            <div className="af-class-list-column af-class-acciones">
                              <h1 className="af-class-list-heading af-class-acciones">Acciones</h1>
                              <div className="af-class-accionescontainer"><a href="/ordenes-de-compra" ver="Ver Perfil" className="af-class-linkblockacciones w-inline-block"><img src="images/Ver.png" width={32} alt /></a><a href="#" editar="Editar Perfil" className="af-class-linkblockacciones af-class-editar-oc w-inline-block"><img src="images/Editar.png" alt /></a><a href="#" borrar="Borrar Cliente" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.png" alt /></a></div>
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

module.exports = IndexView

/* eslint-enable */