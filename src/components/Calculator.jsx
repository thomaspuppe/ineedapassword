import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import bcryptjs from 'bcryptjs'

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
          display: 'todo'
        }
      }

    componentDidMount() {

        // TODO: self=this, in modernen JS-Zeiten??
        var self = this;

        this.hash('Wurstbrot').then(hashed => {
            self.setState({
                display: self.encode64(hashed).substr(5,21)
            })
        })

    }

    render() {

        return (
        <p>Hi there! { this.state.display }
            </p>
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