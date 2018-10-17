/* eslint-disable */

const React = require('react')
const { createScope, map, transformProxies } = require('./helpers')

const scripts = [
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class HeimerClientesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/HeimerClientesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HeimerClientesView

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
    const proxies = Controller !== HeimerClientesView ? transformProxies(this.props.children) : {

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
            <div className="af-class-modal af-class-borrar af-class-div-block-20">
              <div className="af-class-div-fondo-modal">
                <div data-w-id="3f8ca941-24e0-e52a-4b2b-70315092dd7c" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Borrar</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">¿Estás seguro de borrar este elemento?</h1><a href="#" className="af-class-boton af-class-principal af-class-popup af-class-borrar w-button">Si</a></div>
              </div>
              <div data-w-id="3f8ca941-24e0-e52a-4b2b-70315092dd84" className="af-class-div-general-close" />
            </div>
            <div style={{display: 'none', opacity: 0}} className="af-class-modal af-class-rtc">
              <div data-w-id="11afe3b2-1fba-9850-0efe-63338a551636" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div data-w-id="11afe3b2-1fba-9850-0efe-63338a551638" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">RTC</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Actual: Sábado 15:00 hrs.</h1>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-7" name="email-form-7" data-name="Email Form 7" className="af-class-form"><label htmlFor="name-7" className="af-class-field-label">Nombre</label><input type="text" className="af-class-text-field w-input" maxLength={256} name="name-6" data-name="Name 6" id="name-6" /><label htmlFor="name-7" className="af-class-field-label">Día</label><select id="field-7" name="field-7" className="af-class-select-field w-select"><option value="lunes">Lunes</option><option value="martes">Martes</option><option value="miercoles">Miércoles</option><option value="jueves">Jueves</option><option value="viernes">Viernes</option><option value="sábado">Sábado</option><option value="domingo">Domingo</option></select><label htmlFor="name-7" className="af-class-field-label">Hora</label>
                      <div className="af-class-text-field w-embed">
                        <div className="af-class-form-group">
                          <div className="af-class-input-group af-class-date" id="datetimepicker1">
                            <input type="text" className="af-class-form-control" />
                            <span className="af-class-input-group-addon">
                              <span className="af-class-glyphicon af-class-glyphicon-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-div-block-16">
                        <div className="af-class-checkbox-field w-checkbox"><input type="checkbox" id="checkbox-6" name="checkbox-6" data-name="Checkbox 6" className="w-checkbox-input" /><label htmlFor="checkbox-8" className="af-class-checkbox-label-3 w-form-label">Recurrente</label></div>
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
            <div data-w-id="000ff860-3d31-07a4-1a35-9630dff48b08" style={{display: 'none', opacity: 0}} className="af-class-modal af-class-config-cuenta">
              <div data-w-id="423cfb4b-e985-c4da-11af-c4d35f55663d" className="af-class-div-general-close" />
              <div className="af-class-div-fondo-modal">
                <div data-w-id="4ebaa151-b0b9-c198-fdbc-b98bf8adba62" className="af-class-div-fondo-modal-close" />
                <div className="af-class-div-container-modal">
                  <h1 className="af-class-titulomodal">Configuración de accesos</h1>
                  <h1 className="af-class-titulomodal af-class-subtitulo">Si deseas cerrar sesión en todos tus dispositivos, da click en el siguiente botón.<br /><br /><strong>Tip:</strong> Esta función te permitirá cerrar el acceso a tu app Heimer en caso de que pierdas tu celular o tablet.</h1><a href="#" className="af-class-boton af-class-principal af-class-popup w-button">Cerrar sesión</a></div>
              </div>
            </div>
            <div className="af-class-section-principal">
              <div className="af-class-container-dashboard w-container">
                <div className="af-class-resumen-ejecutivo af-class-titulo">
                  <h1 className="af-class-headline af-class-dash af-class-principal">¡Bienvenido!</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo">
                  <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo">Heimer control</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-menu"><img src="images/Info.svg" alt className="af-class-icono-menu" /></div>
                <div className="af-class-resumen-ejecutivo af-class-principal">
                  <div className="af-class-div-dashboard-container">
                    <div className="af-class-div-elemento-dashboard">
                      <h1 className="af-class-heading">Deluxe</h1>
                      <div className="af-class-label-dash">Tipo</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 className="af-class-heading">7</h1>
                      <div className="af-class-label-dash">Accesorios</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 className="af-class-heading">3</h1>
                      <div className="af-class-label-dash">Zonas</div>
                    </div>
                    <div className="af-class-div-elemento-dashboard">
                      <h1 className="af-class-heading">1</h1>
                      <div className="af-class-label-dash">RTC</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-titulo-dashboard">
                  <div className="af-class-div-menu-container af-class-cliente">
                    <div data-w-id="e1ca0b59-4604-9f78-645a-a553b31b84a0" className="af-class-div-boton-navegacion"><img src="images/Nuevo-RTC.svg" alt className="af-class-icono-dash" />
                      <div className="af-class-texto-nav-dashboard">rtc</div>
                    </div>
                    <div data-w-id="2cfd5c14-6c97-3810-34a3-5f13a6cd198e" className="af-class-div-boton-navegacion"><img src="images/configurar.svg" alt className="af-class-icono-dash" />
                      <div className="af-class-texto-nav-dashboard">Configuración</div>
                    </div>
                    <div className="af-class-div-boton-navegacion"><a href="#" className="af-class-linkblockdash w-inline-block"><img src="images/Cerrar-Sesion.svg" alt className="af-class-icono-dash" /><div className="af-class-texto-nav-dashboard">Cerrar Sesión</div></a></div>
                    <div className="af-class-div-configurar" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-contenido">
              <div className="af-class-container-contenido w-container">
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-container w-tabs">
                  <div className="af-class-tabs-menu w-tab-menu">
                    <a data-w-tab="Todos" className="af-class-tablink w-inline-block w-tab-link w--current">
                      <div>Todos</div>
                    </a>
                    <a data-w-tab="Zonas" className="af-class-tablink w-inline-block w-tab-link">
                      <div>Zonas</div>
                    </a>
                    <a data-w-tab="RTC" className="af-class-tablink w-inline-block w-tab-link">
                      <div>RTC</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div data-w-tab="Todos" className="af-class-tabpane w-tab-pane w--tab-active">
                      <div className="af-class-container-busqueda">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                      </div>
                      <div className="af-class-lista-wrapper af-class-listado">
                        <div className="af-class-list-row af-class-titulos">
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Nombre</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Tipo</h1>
                          </div>
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Control</h1>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Foco ON/OFF</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer">
                              <div className="af-class-html-embed w-embed"><label className="af-class-switch">
                                  <input className="af-class-switch-input" type="checkbox" />
                                  <span className="af-class-switch-label" data-on="On" data-off="Off" /> 
                                  <span className="af-class-switch-handle" /> 
                                </label>
                                <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-switch {\n\tposition: relative;\n\tdisplay: block;\n\tvertical-align: top;\n\twidth: 100px;\n\theight: 30px;\n\tpadding: 3px;\n\tmargin: 0 10px 10px 0;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n\tborder-radius: 18px;\n\tbox-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n\tcursor: pointer;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-input {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tbackground: #eceeef;\n\tborder-radius: inherit;\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before, .af-view .af-class-switch-label:after {\n\tposition: absolute;\n\ttop: 50%;\n\tmargin-top: -.5em;\n\tline-height: 1;\n\t-webkit-transition: inherit;\n\t-moz-transition: inherit;\n\t-o-transition: inherit;\n\ttransition: inherit;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before {\n\tcontent: attr(data-off);\n\tright: 11px;\n\tcolor: #aaaaaa;\n\ttext-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n.af-view .af-class-switch-label:after {\n\tcontent: attr(data-on);\n\tleft: 11px;\n\tcolor: #FFFFFF;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.2);\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label {\n\tbackground: rgba(0, 40, 87, 0.68);\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:before {\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:after {\n\topacity: 1;\n}\n.af-view .af-class-switch-handle {\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 4px;\n\twidth: 28px;\n\theight: 28px;\n\tbackground: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n\tbackground-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n\tborder-radius: 100%;\n\tbox-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-handle:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin: -6px 0 0 -6px;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n\tborder-radius: 6px;\n\tbox-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-handle {\n\tleft: 74px;\n\tbox-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n/* Transition\n========================== */\n.af-view .af-class-switch-label, .af-view .af-class-switch-handle {\n\ttransition: All 0.3s ease;\n\t-webkit-transition: All 0.3s ease;\n\t-moz-transition: All 0.3s ease;\n\t-o-transition: All 0.3s ease;\n}\n" }} />
                              </div>
                            </div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer">
                                <div className="af-class-html-embed w-embed"><label className="af-class-switch">
                                    <input className="af-class-switch-input" type="checkbox" />
                                    <span className="af-class-switch-label" data-on="On" data-off="Off" /> 
                                    <span className="af-class-switch-handle" /> 
                                  </label>
                                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-switch {\n\tposition: relative;\n\tdisplay: block;\n\tvertical-align: top;\n\twidth: 100px;\n\theight: 30px;\n\tpadding: 3px;\n\tmargin: 0 10px 10px 0;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n\tborder-radius: 18px;\n\tbox-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n\tcursor: pointer;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-input {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tbackground: #eceeef;\n\tborder-radius: inherit;\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before, .af-view .af-class-switch-label:after {\n\tposition: absolute;\n\ttop: 50%;\n\tmargin-top: -.5em;\n\tline-height: 1;\n\t-webkit-transition: inherit;\n\t-moz-transition: inherit;\n\t-o-transition: inherit;\n\ttransition: inherit;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before {\n\tcontent: attr(data-off);\n\tright: 11px;\n\tcolor: #aaaaaa;\n\ttext-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n.af-view .af-class-switch-label:after {\n\tcontent: attr(data-on);\n\tleft: 11px;\n\tcolor: #FFFFFF;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.2);\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label {\n\tbackground: rgba(0, 40, 87, 0.68);\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:before {\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:after {\n\topacity: 1;\n}\n.af-view .af-class-switch-handle {\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 4px;\n\twidth: 28px;\n\theight: 28px;\n\tbackground: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n\tbackground-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n\tborder-radius: 100%;\n\tbox-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-handle:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin: -6px 0 0 -6px;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n\tborder-radius: 6px;\n\tbox-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-handle {\n\tleft: 74px;\n\tbox-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n/* Transition\n========================== */\n.af-view .af-class-switch-label, .af-view .af-class-switch-handle {\n\ttransition: All 0.3s ease;\n\t-webkit-transition: All 0.3s ease;\n\t-moz-transition: All 0.3s ease;\n\t-o-transition: All 0.3s ease;\n}\n" }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Foco Dimmer</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer">
                              <div className="af-class-html-embed w-embed">
                                <div className="af-class-vertically-stacked-slider">
                                  <input type="range" defaultValue={0} />
                                </div>
                                <style dangerouslySetInnerHTML={{__html: "\n.af-view input[type=\"range\"] {\n    width: 100%;\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    -webkit-appearance: none; /*remove the line*/\n    outline: none;\n    border: 0; /*for firefox on android*/\n    padding: 0 8px; /*for IE*/\n    margin: 8px 0;\n}\n/*chrome and opera*/\n.af-view input[type=\"range\"]::-webkit-slider-runnable-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-runnable-track,\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n    background: rgba(240, 240, 240, 0.47); /*activeTrackColor*/\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #002857; /*thumbColor*/\n    width: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    border-radius: 50%;\n    margin-top: -12px; /* -[thumbHeight + (2 x thumbBorderWidth) - trackHeight]/2*/\n    cursor: pointer;\n    border: 4px solid #002857; /*border-width should be equal to thumbBorderWidth if you want same border width across all browsers and border-color should match the background*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-thumb,\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*firefox*/\n.af-view input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n.af-view input[type=\"range\"]::-moz-range-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    /*background isn't animatable, so can't use transition*/\n}\ninput[type=\"range\"]:hover::-moz-range-track,\ninput[type=\"range\"]:focus::-moz-range-track {\n    background: rgba(240, 240, 240, 0.47); /*activeTrackColor*/\n}\ninput[type=\"range\"]::-moz-range-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    cursor: pointer;\n    border: 4px solid #fff; /*border-width = thumbBorderWidth, border-color should match the background*/\n}\ninput[type=\"range\"]:hover::-moz-range-thumb,\ninput[type=\"range\"]:focus::-moz-range-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\ninput[type=\"range\"]::-moz-range-progress {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n    height: 4px; /*trackHeight*/\n}\ninput[type=\"range\"]:hover::-moz-range-progress,\ninput[type=\"range\"]:focus::-moz-range-progress {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*edge and IE*/\n.af-view input[type=\"range\"]::-ms-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    border: none;\n    color: transparent;\n}\n.af-view input[type=\"range\"]:hover::-ms-track,\n.af-view input[type=\"range\"]:focus::-ms-track {\n    background: rgba(240, 240, 240, 0.47); /*activeTrackColor*/\n}\n.af-view input[type=\"range\"]::-ms-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    border: none;\n    margin: 0 4px 0; /*0 thumbBorderWidth 0*/\n    box-shadow: 0 0 0 4px #fff; /*0 0 0 thumbBorderWidth #fff, box-shadow color should match the background*/\n    /*cursor:pointer; doesn't work*/\n}\n.af-view input[type=\"range\"]:hover::-ms-thumb,\n.af-view input[type=\"range\"]:focus::-ms-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view input[type=\"range\"]::-ms-tooltip {\n    display: none; /*tooltip makes thumb sliding lagy*/\n}\n.af-view input[type=\"range\"]::-ms-fill-lower {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n}\n.af-view input[type=\"range\"]:hover::-ms-fill-lower,\n.af-view input[type=\"range\"]:focus::-ms-fill-lower {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view .af-class-vertically-stacked-slider {\n    padding: 8px;\n}\n.af-view .af-class-vertically-stacked-slider > input[type=\"range\"] {\n    padding: 0;\n}\n" }} />
                              </div>
                            </div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer">
                                <div className="af-class-html-embed w-embed">
                                  <div className="af-class-vertically-stacked-slider">
                                    <input type="range" defaultValue={10} />
                                  </div>
                                  <style dangerouslySetInnerHTML={{__html: "\n.af-view input[type=\"range\"] {\n    width: 100%;\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    -webkit-appearance: none; /*remove the line*/\n    outline: none;\n    border: 0; /*for firefox on android*/\n    padding: 0 8px; /*for IE*/\n    margin: 8px 0;\n}\n/*chrome and opera*/\n.af-view input[type=\"range\"]::-webkit-slider-runnable-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-runnable-track,\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n    background: #777; /*activeTrackColor*/\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #002857; /*thumbColor*/\n    width: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    border-radius: 50%;\n    margin-top: -12px; /* -[thumbHeight + (2 x thumbBorderWidth) - trackHeight]/2*/\n    cursor: pointer;\n    border: 4px solid #002857; /*border-width should be equal to thumbBorderWidth if you want same border width across all browsers and border-color should match the background*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-thumb,\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*firefox*/\n.af-view input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n.af-view input[type=\"range\"]::-moz-range-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    /*background isn't animatable, so can't use transition*/\n}\ninput[type=\"range\"]:hover::-moz-range-track,\ninput[type=\"range\"]:focus::-moz-range-track {\n    background: #777; /*activeTrackColor*/\n}\ninput[type=\"range\"]::-moz-range-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    cursor: pointer;\n    border: 4px solid #fff; /*border-width = thumbBorderWidth, border-color should match the background*/\n}\ninput[type=\"range\"]:hover::-moz-range-thumb,\ninput[type=\"range\"]:focus::-moz-range-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\ninput[type=\"range\"]::-moz-range-progress {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n    height: 4px; /*trackHeight*/\n}\ninput[type=\"range\"]:hover::-moz-range-progress,\ninput[type=\"range\"]:focus::-moz-range-progress {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*edge and IE*/\n.af-view input[type=\"range\"]::-ms-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    border: none;\n    color: transparent;\n}\n.af-view input[type=\"range\"]:hover::-ms-track,\n.af-view input[type=\"range\"]:focus::-ms-track {\n    background: #777; /*activeTrackColor*/\n}\n.af-view input[type=\"range\"]::-ms-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    border: none;\n    margin: 0 4px 0; /*0 thumbBorderWidth 0*/\n    box-shadow: 0 0 0 4px #fff; /*0 0 0 thumbBorderWidth #fff, box-shadow color should match the background*/\n    /*cursor:pointer; doesn't work*/\n}\n.af-view input[type=\"range\"]:hover::-ms-thumb,\n.af-view input[type=\"range\"]:focus::-ms-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view input[type=\"range\"]::-ms-tooltip {\n    display: none; /*tooltip makes thumb sliding lagy*/\n}\n.af-view input[type=\"range\"]::-ms-fill-lower {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n}\n.af-view input[type=\"range\"]:hover::-ms-fill-lower,\n.af-view input[type=\"range\"]:focus::-ms-fill-lower {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view .af-class-vertically-stacked-slider {\n    padding: 8px;\n}\n.af-view .af-class-vertically-stacked-slider > input[type=\"range\"] {\n    padding: 0;\n}\n" }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Persiana</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ABRIR.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Stop.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/CERRAR_1.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer af-class-responsive"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ABRIR.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Stop.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/CERRAR_1.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Puerta</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Despedida</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">On/Off General</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ON.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ON.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Abrir / Cerrar</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">?</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Cerrar-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Cerrar-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Zonas" className="af-class-tabpane w-tab-pane">
                      <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-container w-tabs">
                        <div className="af-class-tabs-menu af-class-zonas w-tab-menu">
                          <a data-w-tab="Estancia" className="af-class-tablink w-inline-block w-tab-link w--current">
                            <div>Estancia</div>
                          </a>
                          <a data-w-tab="Cocina" className="af-class-tablink w-inline-block w-tab-link">
                            <div>Cocina</div>
                          </a>
                          <a data-w-tab="Recámara" className="af-class-tablink w-inline-block w-tab-link">
                            <div>Recámara</div>
                          </a>
                        </div>
                        <div className="w-tab-content">
                          <div data-w-tab="Estancia" className="af-class-tabpane w-tab-pane w--tab-active">
                            <div className="af-class-container-busqueda">
                              <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                            </div>
                            <div className="af-class-lista-wrapper af-class-listado">
                              <div className="af-class-list-row af-class-titulos">
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Nombre</h1>
                                </div>
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Tipo</h1>
                                </div>
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Control</h1>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">Foco ON/OFF</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer">
                                    <div className="af-class-html-embed w-embed"><label className="af-class-switch">
                                        <input className="af-class-switch-input" type="checkbox" />
                                        <span className="af-class-switch-label" data-on="On" data-off="Off" /> 
                                        <span className="af-class-switch-handle" /> 
                                      </label>
                                      <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-switch {\n\tposition: relative;\n\tdisplay: block;\n\tvertical-align: top;\n\twidth: 100px;\n\theight: 30px;\n\tpadding: 3px;\n\tmargin: 0 10px 10px 0;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n\tborder-radius: 18px;\n\tbox-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n\tcursor: pointer;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-input {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tbackground: #eceeef;\n\tborder-radius: inherit;\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before, .af-view .af-class-switch-label:after {\n\tposition: absolute;\n\ttop: 50%;\n\tmargin-top: -.5em;\n\tline-height: 1;\n\t-webkit-transition: inherit;\n\t-moz-transition: inherit;\n\t-o-transition: inherit;\n\ttransition: inherit;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before {\n\tcontent: attr(data-off);\n\tright: 11px;\n\tcolor: #aaaaaa;\n\ttext-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n.af-view .af-class-switch-label:after {\n\tcontent: attr(data-on);\n\tleft: 11px;\n\tcolor: #FFFFFF;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.2);\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label {\n\tbackground: rgba(0, 40, 87, 0.68);\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:before {\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:after {\n\topacity: 1;\n}\n.af-view .af-class-switch-handle {\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 4px;\n\twidth: 28px;\n\theight: 28px;\n\tbackground: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n\tbackground-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n\tborder-radius: 100%;\n\tbox-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-handle:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin: -6px 0 0 -6px;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n\tborder-radius: 6px;\n\tbox-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-handle {\n\tleft: 74px;\n\tbox-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n/* Transition\n========================== */\n.af-view .af-class-switch-label, .af-view .af-class-switch-handle {\n\ttransition: All 0.3s ease;\n\t-webkit-transition: All 0.3s ease;\n\t-moz-transition: All 0.3s ease;\n\t-o-transition: All 0.3s ease;\n}\n" }} />
                                    </div>
                                  </div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer">
                                      <div className="af-class-html-embed w-embed"><label className="af-class-switch">
                                          <input className="af-class-switch-input" type="checkbox" />
                                          <span className="af-class-switch-label" data-on="On" data-off="Off" /> 
                                          <span className="af-class-switch-handle" /> 
                                        </label>
                                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-switch {\n\tposition: relative;\n\tdisplay: block;\n\tvertical-align: top;\n\twidth: 100px;\n\theight: 30px;\n\tpadding: 3px;\n\tmargin: 0 10px 10px 0;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF 25px);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px);\n\tborder-radius: 18px;\n\tbox-shadow: inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05);\n\tcursor: pointer;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-input {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\topacity: 0;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tbackground: #eceeef;\n\tborder-radius: inherit;\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15);\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before, .af-view .af-class-switch-label:after {\n\tposition: absolute;\n\ttop: 50%;\n\tmargin-top: -.5em;\n\tline-height: 1;\n\t-webkit-transition: inherit;\n\t-moz-transition: inherit;\n\t-o-transition: inherit;\n\ttransition: inherit;\n\tbox-sizing:content-box;\n}\n.af-view .af-class-switch-label:before {\n\tcontent: attr(data-off);\n\tright: 11px;\n\tcolor: #aaaaaa;\n\ttext-shadow: 0 1px rgba(255, 255, 255, 0.5);\n}\n.af-view .af-class-switch-label:after {\n\tcontent: attr(data-on);\n\tleft: 11px;\n\tcolor: #FFFFFF;\n\ttext-shadow: 0 1px rgba(0, 0, 0, 0.2);\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label {\n\tbackground: rgba(0, 40, 87, 0.68);\n\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:before {\n\topacity: 0;\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-label:after {\n\topacity: 1;\n}\n.af-view .af-class-switch-handle {\n\tposition: absolute;\n\ttop: 4px;\n\tleft: 4px;\n\twidth: 28px;\n\theight: 28px;\n\tbackground: linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0);\n\tbackground-image: -webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0);\n\tborder-radius: 100%;\n\tbox-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n.af-view .af-class-switch-handle:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin: -6px 0 0 -6px;\n\twidth: 12px;\n\theight: 12px;\n\tbackground: linear-gradient(to bottom, #eeeeee, #FFFFFF);\n\tbackground-image: -webkit-linear-gradient(top, #eeeeee, #FFFFFF);\n\tborder-radius: 6px;\n\tbox-shadow: inset 0 1px rgba(0, 0, 0, 0.02);\n}\n.af-view .af-class-switch-input:checked ~ .af-class-switch-handle {\n\tleft: 74px;\n\tbox-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n}\n/* Transition\n========================== */\n.af-view .af-class-switch-label, .af-view .af-class-switch-handle {\n\ttransition: All 0.3s ease;\n\t-webkit-transition: All 0.3s ease;\n\t-moz-transition: All 0.3s ease;\n\t-o-transition: All 0.3s ease;\n}\n" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">Foco Dimmer</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer">
                                    <div className="af-class-html-embed w-embed">
                                      <div className="af-class-vertically-stacked-slider">
                                        <input type="range" defaultValue={0} />
                                      </div>
                                      <style dangerouslySetInnerHTML={{__html: "\n.af-view input[type=\"range\"] {\n    width: 100%;\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    -webkit-appearance: none; /*remove the line*/\n    outline: none;\n    border: 0; /*for firefox on android*/\n    padding: 0 8px; /*for IE*/\n    margin: 8px 0;\n}\n/*chrome and opera*/\n.af-view input[type=\"range\"]::-webkit-slider-runnable-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-runnable-track,\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n    background: rgba(240, 240, 240, 0.47); /*activeTrackColor*/\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #002857; /*thumbColor*/\n    width: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    border-radius: 50%;\n    margin-top: -12px; /* -[thumbHeight + (2 x thumbBorderWidth) - trackHeight]/2*/\n    cursor: pointer;\n    border: 4px solid #002857; /*border-width should be equal to thumbBorderWidth if you want same border width across all browsers and border-color should match the background*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-thumb,\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*firefox*/\n.af-view input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n.af-view input[type=\"range\"]::-moz-range-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    /*background isn't animatable, so can't use transition*/\n}\ninput[type=\"range\"]:hover::-moz-range-track,\ninput[type=\"range\"]:focus::-moz-range-track {\n    background: rgba(240, 240, 240, 0.47); /*activeTrackColor*/\n}\ninput[type=\"range\"]::-moz-range-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    cursor: pointer;\n    border: 4px solid #fff; /*border-width = thumbBorderWidth, border-color should match the background*/\n}\ninput[type=\"range\"]:hover::-moz-range-thumb,\ninput[type=\"range\"]:focus::-moz-range-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\ninput[type=\"range\"]::-moz-range-progress {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n    height: 4px; /*trackHeight*/\n}\ninput[type=\"range\"]:hover::-moz-range-progress,\ninput[type=\"range\"]:focus::-moz-range-progress {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*edge and IE*/\n.af-view input[type=\"range\"]::-ms-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    border: none;\n    color: transparent;\n}\n.af-view input[type=\"range\"]:hover::-ms-track,\n.af-view input[type=\"range\"]:focus::-ms-track {\n    background: rgba(240, 240, 240, 0.47); /*activeTrackColor*/\n}\n.af-view input[type=\"range\"]::-ms-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    border: none;\n    margin: 0 4px 0; /*0 thumbBorderWidth 0*/\n    box-shadow: 0 0 0 4px #fff; /*0 0 0 thumbBorderWidth #fff, box-shadow color should match the background*/\n    /*cursor:pointer; doesn't work*/\n}\n.af-view input[type=\"range\"]:hover::-ms-thumb,\n.af-view input[type=\"range\"]:focus::-ms-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view input[type=\"range\"]::-ms-tooltip {\n    display: none; /*tooltip makes thumb sliding lagy*/\n}\n.af-view input[type=\"range\"]::-ms-fill-lower {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n}\n.af-view input[type=\"range\"]:hover::-ms-fill-lower,\n.af-view input[type=\"range\"]:focus::-ms-fill-lower {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view .af-class-vertically-stacked-slider {\n    padding: 8px;\n}\n.af-view .af-class-vertically-stacked-slider > input[type=\"range\"] {\n    padding: 0;\n}\n" }} />
                                    </div>
                                  </div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer">
                                      <div className="af-class-html-embed w-embed">
                                        <div className="af-class-vertically-stacked-slider">
                                          <input type="range" defaultValue={10} />
                                        </div>
                                        <style dangerouslySetInnerHTML={{__html: "\n.af-view input[type=\"range\"] {\n    width: 100%;\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    -webkit-appearance: none; /*remove the line*/\n    outline: none;\n    border: 0; /*for firefox on android*/\n    padding: 0 8px; /*for IE*/\n    margin: 8px 0;\n}\n/*chrome and opera*/\n.af-view input[type=\"range\"]::-webkit-slider-runnable-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-runnable-track,\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n    background: #777; /*activeTrackColor*/\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background: #002857; /*thumbColor*/\n    width: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    height: 28px; /* thumbHeight + (2 x thumbBorderWidth)*/\n    border-radius: 50%;\n    margin-top: -12px; /* -[thumbHeight + (2 x thumbBorderWidth) - trackHeight]/2*/\n    cursor: pointer;\n    border: 4px solid #002857; /*border-width should be equal to thumbBorderWidth if you want same border width across all browsers and border-color should match the background*/\n    transition: 0.3s;\n}\ninput[type=\"range\"]:hover::-webkit-slider-thumb,\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*firefox*/\n.af-view input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n.af-view input[type=\"range\"]::-moz-range-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    /*background isn't animatable, so can't use transition*/\n}\ninput[type=\"range\"]:hover::-moz-range-track,\ninput[type=\"range\"]:focus::-moz-range-track {\n    background: #777; /*activeTrackColor*/\n}\ninput[type=\"range\"]::-moz-range-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    cursor: pointer;\n    border: 4px solid #fff; /*border-width = thumbBorderWidth, border-color should match the background*/\n}\ninput[type=\"range\"]:hover::-moz-range-thumb,\ninput[type=\"range\"]:focus::-moz-range-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\ninput[type=\"range\"]::-moz-range-progress {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n    height: 4px; /*trackHeight*/\n}\ninput[type=\"range\"]:hover::-moz-range-progress,\ninput[type=\"range\"]:focus::-moz-range-progress {\n    background: #e7cea0; /*activeThumbColor*/\n}\n/*edge and IE*/\n.af-view input[type=\"range\"]::-ms-track {\n    background: #ccc; /*trackColor*/\n    height: 4px; /*trackHeight*/\n    border-radius: 4px; /*trackHeight*/\n    border: none;\n    color: transparent;\n}\n.af-view input[type=\"range\"]:hover::-ms-track,\n.af-view input[type=\"range\"]:focus::-ms-track {\n    background: #777; /*activeTrackColor*/\n}\n.af-view input[type=\"range\"]::-ms-thumb {\n    background: #002857; /*thumbColor*/\n    width: 20px; /*thumbHeight*/\n    height: 20px; /*thumbHeight*/\n    border-radius: 50%;\n    border: none;\n    margin: 0 4px 0; /*0 thumbBorderWidth 0*/\n    box-shadow: 0 0 0 4px #fff; /*0 0 0 thumbBorderWidth #fff, box-shadow color should match the background*/\n    /*cursor:pointer; doesn't work*/\n}\n.af-view input[type=\"range\"]:hover::-ms-thumb,\n.af-view input[type=\"range\"]:focus::-ms-thumb {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view input[type=\"range\"]::-ms-tooltip {\n    display: none; /*tooltip makes thumb sliding lagy*/\n}\n.af-view input[type=\"range\"]::-ms-fill-lower {\n    background: #002857; /*thumbColor*/\n    border-radius: 4px; /*trackHeight*/\n}\n.af-view input[type=\"range\"]:hover::-ms-fill-lower,\n.af-view input[type=\"range\"]:focus::-ms-fill-lower {\n    background: #e7cea0; /*activeThumbColor*/\n}\n.af-view .af-class-vertically-stacked-slider {\n    padding: 8px;\n}\n.af-view .af-class-vertically-stacked-slider > input[type=\"range\"] {\n    padding: 0;\n}\n" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Cocina" className="af-class-tabpane w-tab-pane">
                            <div className="af-class-container-busqueda">
                              <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                            </div>
                            <div className="af-class-lista-wrapper af-class-listado">
                              <div className="af-class-list-row af-class-titulos">
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Nombre</h1>
                                </div>
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Tipo</h1>
                                </div>
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Control</h1>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">Persiana</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ABRIR.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Stop.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/CERRAR_1.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer af-class-responsive"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ABRIR.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Stop.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/CERRAR_1.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">Puerta</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-w-tab="Recámara" className="af-class-tabpane w-tab-pane">
                            <div className="af-class-container-busqueda">
                              <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
                            </div>
                            <div className="af-class-lista-wrapper af-class-listado">
                              <div className="af-class-list-row af-class-titulos">
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Nombre</h1>
                                </div>
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Tipo</h1>
                                </div>
                                <div className="af-class-list-column">
                                  <h1 className="af-class-listtitulosweb">Control</h1>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">Despedida</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">On/Off General</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ON.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/ON.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/OFF.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                  </div>
                                </div>
                              </div>
                              <div className="af-class-list-row">
                                <div className="af-class-list-column af-class-expandible-responsivo">
                                  <h1 className="af-class-list-heading">Nombre</h1>
                                  <div className="af-class-list-label">Abrir / Cerrar</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Tipo</h1>
                                  <div className="af-class-list-label">?</div>
                                </div>
                                <div className="af-class-list-column af-class-web">
                                  <h1 className="af-class-list-heading">Control</h1>
                                  <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Cerrar-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                </div>
                                <div className="af-class-accordion-content">
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Tipo</h1>
                                    <div className="af-class-list-label">?</div>
                                  </div>
                                  <div className="af-class-list-column">
                                    <h1 className="af-class-list-heading">Control</h1>
                                    <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Abrir-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a><a href="#" className="af-class-linkblockacciones af-class-cliente w-inline-block"><img src="images/Cerrar-Puerta.svg" width={37} alt className="af-class-imagen-linkblockacciones af-class-cliente" /></a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="RTC" className="af-class-tabpane w-tab-pane">
                      <div className="af-class-container-busqueda">
                        <form action="/search" className="af-class-search w-form"><input type="search" className="af-class-search-input w-input" maxLength={256} name="query" placeholder="Buscar accesorios..." id="search" required /><input type="submit" defaultValue="Buscar" className="af-class-boton af-class-principal af-class-buscar w-button" /></form>
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
                          <div className="af-class-list-column">
                            <h1 className="af-class-listtitulosweb">Control</h1>
                          </div>
                        </div>
                        <div className="af-class-list-row">
                          <div className="af-class-list-column af-class-expandible-responsivo">
                            <h1 className="af-class-list-heading">Nombre</h1>
                            <div className="af-class-list-label">Jardín</div><img src="images/down-arrow.svg" alt className="af-class-image-5" /></div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">Todos los días</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Tipo</h1>
                            <div className="af-class-list-label">18:00 hrs</div>
                          </div>
                          <div className="af-class-list-column af-class-web">
                            <h1 className="af-class-list-heading">Control</h1>
                            <div className="af-class-accionescontainer"><a data-w-id="ae19fe60-51d3-cd83-c374-90915fc25140" href="#" className="af-class-linkblockacciones w-inline-block"><img src="images/Editar.svg" alt className="af-class-imagen-linkblockacciones" /></a><a href="#" className="af-class-linkblockacciones af-class-borrar w-inline-block"><img src="images/Borrar.svg" alt className="af-class-imagen-linkblockacciones" /></a><a href="#" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt className="af-class-imagen-linkblockacciones" /></a></div>
                          </div>
                          <div className="af-class-accordion-content">
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Día</h1>
                              <div className="af-class-list-label">Todos los días</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Horario</h1>
                              <div className="af-class-list-label">18:00 hrs.</div>
                            </div>
                            <div className="af-class-list-column">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer"><a href="#" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" alt /></a></div>
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

module.exports = HeimerClientesView

/* eslint-enable */