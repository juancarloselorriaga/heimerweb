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

class SearchView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SearchController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SearchView

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
    const proxies = Controller !== SearchView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/heimerweb.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="w-container">
            <h1>Search results</h1>
            <form action="/search" className="w-form"><input type="search" className="w-input" maxLength={256} autofocus="true" name="query" placeholder="Search…" id="search" /><input type="submit" defaultValue="Search" className="w-button" /></form>
          </div>
          {/* [if lte IE 9]><![endif] */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
        </span>
      </span>
    )
  }
}

module.exports = SearchView

/* eslint-enable */