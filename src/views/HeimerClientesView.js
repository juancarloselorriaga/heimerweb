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
          <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-navbar-3 w-nav">
            <div className="w-container"><a href="index.html" className="af-class-brand-2 w-nav-brand"><img src="images/Logo-Heimer3x.png" width={55} alt /></a>
              <nav role="navigation" className="af-class-nav-menu-3 w-nav-menu"><a href="index.html" className="af-class-nav-link-3 w-nav-link">Inicio</a><a href="#" className="af-class-nav-link-4 w-nav-link">Cerrar Sesión</a></nav>
              <div className="af-class-menu-button-2 w-nav-button">
                <div className="w-icon-nav-menu">
                </div>
              </div>
            </div>
            <div className="af-class-section-principal">
              <div className="af-class-container-dashboard w-container">
                <div className="af-class-resumen-ejecutivo af-class-titulo">
                  <h1 className="af-class-headline af-class-dash af-class-principal">¡Bienvenido!</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-subtitulo">
                  <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo">Heimer web</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-titulo af-class-menu">
                  <h1 className="af-class-headline af-class-dash af-class-principal af-class-subtitulo af-class-menu">?</h1>
                </div>
                <div className="af-class-resumen-ejecutivo af-class-principal">
                  <div className="af-class-dashboard">
                    <div className="af-class-div-datos-dashboard">
                      <h1 className="af-class-heading">2</h1>
                      <div className="af-class-label-dash">Zonas</div>
                    </div>
                  </div>
                  <div className="af-class-dashboard">
                    <div className="af-class-div-datos-dashboard">
                      <h1 className="af-class-heading">2</h1>
                      <div className="af-class-label-dash">Modos</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-titulo-dashboard af-class-clientes">
                  <div className="af-class-div-accesos-directos af-class-cliente">
                    <div className="af-class-div-estatus"><a href="#" className="af-class-linkblockacciones af-class-estatus w-inline-block"><img src="images/Activo.png" width={53} alt className="af-class-image-3" /></a>
                      <div className="af-class-label-dash af-class-clientes">Estatus de la cuenta</div>
                    </div>
                    <div className="af-class-div-configurar">
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-section-contenido">
                <div className="af-class-container-contenido w-container">
                  <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-container w-tabs">
                    <div className="af-class-tabs-menu w-tab-menu">
                      <a data-w-tab="Tab 1" className="af-class-tablink w-inline-block w-tab-link w--current">
                        <div>Todos</div>
                      </a>
                      <a data-w-tab="Tab 2" className="af-class-tablink w-inline-block w-tab-link">
                        <div>Zonas</div>
                      </a>
                      <a data-w-tab="Tab 3" className="af-class-tablink w-inline-block w-tab-link">
                        <div>Modos</div>
                      </a>
                      <a data-w-tab="Tab 4" className="af-class-tablink w-inline-block w-tab-link">
                        <div>RTC</div>
                      </a>
                    </div>
                    <div className="w-tab-content">
                      <div data-w-tab="Tab 1" className="af-class-tabpane w-tab-pane w--tab-active">
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
                              <div className="af-class-list-label">Luz Vestíbulo</div>
                            </div>
                            <div className="af-class-list-column af-class-web">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column af-class-web">
                              <h1 className="af-class-list-heading">Control</h1>
                              <div className="af-class-accionescontainer">
                                <div className="af-class-html-embed w-embed">
                                  {/*  Rounded switch  */}
                                  <label className="af-class-switch">
                                    <input type="checkbox" />
                                    <span className="af-class-slider af-class-round">
                                    </span></label>
                                  <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  top: 5px;\n}\n/* Hide default HTML checkbox */\n.af-view .af-class-switch input {display:none;}\n/* The slider */\n.af-view .af-class-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.af-view .af-class-slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.af-view input:checked + .af-class-slider {\n  background-color: #002857;\n}\n.af-view input:focus + .af-class-slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n.af-view input:checked + .af-class-slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.af-view .af-class-slider.af-class-round {\n  border-radius: 34px;\n}\n.af-view .af-class-slider.af-class-round:before {\n  border-radius: 50%;\n}\n" }} />
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
                                    {/*  Rounded switch  */}
                                    <label className="af-class-switch">
                                      <input type="checkbox" />
                                      <span className="af-class-slider af-class-round">
                                      </span></label>
                                    <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  top: 5px;\n}\n/* Hide default HTML checkbox */\n.af-view .af-class-switch input {display:none;}\n/* The slider */\n.af-view .af-class-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.af-view .af-class-slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.af-view input:checked + .af-class-slider {\n  background-color: #002857;\n}\n.af-view input:focus + .af-class-slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n.af-view input:checked + .af-class-slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.af-view .af-class-slider.af-class-round {\n  border-radius: 34px;\n}\n.af-view .af-class-slider.af-class-round:before {\n  border-radius: 50%;\n}\n" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-list-row">
                            <div className="af-class-list-column af-class-expandible-responsivo">
                              <h1 className="af-class-list-heading">Nombre</h1>
                              <div className="af-class-list-label">Luz Vestíbulo</div>
                            </div>
                            <div className="af-class-list-column af-class-web">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column af-class-web">
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
                              <div className="af-class-list-label">Luz Vestíbulo</div>
                            </div>
                            <div className="af-class-list-column af-class-web">
                              <h1 className="af-class-list-heading">Tipo</h1>
                              <div className="af-class-list-label">?</div>
                            </div>
                            <div className="af-class-list-column af-class-web">
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
                      <div data-w-tab="Tab 2" className="af-class-tabpane w-tab-pane">
                        <div data-w-tab="Tab 3" className="af-class-tabpane w-tab-pane">
                          <div data-w-tab="Tab 4" className="af-class-tabpane w-tab-pane">
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* [if lte IE 9]><![endif] */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
                  </div></div></div></div></div></span>
      </span>
    )
  }
}

module.exports = HeimerClientesView

/* eslint-enable */