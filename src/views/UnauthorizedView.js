/* eslint-disable */

const React = require('react')
const { createScope, map, transformProxies } = require('./helpers')

const scripts = [
  Promise.resolve("/[?&]e=1(&|$)/.test(document.location.search)&&(document.querySelector(\".w-password-page.w-form-fail\").style.display=\"block\");"),
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

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
    const proxies = Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

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
            <div className="af-class-utility-page-wrap">
              <div className="af-class-utility-page-content w-password-page w-form">
                <form method="post" action="/.wf_auth" className="af-class-utility-page-form w-password-page"><img src="https://d3e54v103j8qbb.cloudfront.net/static/password-page-lock.832ca8e2c9.svg" alt />
                  <h2>Protected page</h2>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div><input type="password" name="pass" placeholder="Enter your password" maxLength={256} autofocus="true" className="w-password-page w-input" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-password-page w-button" /></form>
                <div className="w-password-page w-form-fail">
                  <div>Incorrect password. Please try again.</div>
                </div>
                <div style={{display: 'none'}} className="w-password-page w-embed w-script">
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

module.exports = UnauthorizedView

/* eslint-enable */