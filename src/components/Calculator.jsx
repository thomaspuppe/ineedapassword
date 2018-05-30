import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Calculator extends Component {

    // https://www.webbjocke.com/javascript-web-encryption-and-hashing-with-the-crypto-api/
    
    // Base64 encode
    encode64 (buff) {
        return btoa(new Uint8Array(buff).reduce((s, b) => s + String.fromCharCode(b), ''));
    }
    
    // Hash function in javascript
    hash (str) {
        return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    }
    
    constructor(props){
        super(props)
        this.state = {
          display: '',
          domain: '',
          masterpassword: ''
        }

        // TODO: Why do I need to do this???
        this.onDomainChange = this.onDomainChange.bind(this)
        this.onMasterpasswordChange = this.onMasterpasswordChange.bind(this)
      }

      calculateHash() {

      }

      onDomainChange(evt) {
        this.setState({domain: evt.target.value})
        this.calculateHash()
      }

      onMasterpasswordChange(evt) {
        this.setState({masterpassword: evt.target.value})
        this.calculateHash()
      }

    calculateHash () {
        // TODO: self=this, in modernen JS-Zeiten??
        var self = this;

        this.hash( self.state.domain + self.state.masterpassword).then(hashed => {
            self.setState({
                display: self.encode64(hashed).substr(5,21)
            })
        })
    }

    render() {

        return (
            <section>
                <form>
                    <input name="domain" onChange={this.onDomainChange} />
                    <input name="masterpassword" onChange={this.onMasterpasswordChange} />
                </form>
                <p>
                    Input: { this.state.domain } + { this.state.masterpassword }
                </p>
                <p>
                    Result: <strong>{ this.state.display }</strong>
                </p>
            </section>
        )
    }
}

export default Calculator


// TODO: Try alternatives
// - https://www.npmjs.com/package/string-hash
// - simply md5 ?
// - https://www.webbjocke.com/javascript-web-encryption-and-hashing-with-the-crypto-api/
// - https://github.com/h2non/jshashes
// - https://github.com/bitwiseshiftleft/sjcl/blob/master/sjcl.js
// - 