import { h, Component } from 'preact';
import style from './style';

export default class Create extends Component {

    state = {
        passwords: [],
        length: 16,
        method: 'medium',
    };

    truncate = (str) => {
        return str.toString().substr(0, this.state.length);
    };

    createNumberPassword = () => {
        var array = new Uint32Array(10);
        window.crypto.getRandomValues(array);
        // Uint32Array -> Array (which is iterable by map)
        array = Array.from(array);
        return array;
    };

    // TODO: move to "utils" somewhere
    // TODO: real randomness via webcrypto
    // TODO: maybe "get from string" if used on vowels/consonants and so on
    getRandomItemFromArray = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    }

    // easy = "mnemonic" ... maybe restrict the length here?
    createEasyPassword = () => {
        // TODO: filling to be able to iterate is shit.
        var array = new Array(10).fill('');

        var vowels = 'aeioe'.split('');
        var consonants = 'bcdfghklmnpqrstvwxzy'.split('');

        // TODO: arrow function endlich mal verstehen und benutzen
        var that = this;
        array = array.map( function() {
            var password = '';
            // TODO: read this.state.length here
            for(var i = 0; i < 32; i++) {
                password += that.getRandomItemFromArray(consonants);
                password += that.getRandomItemFromArray(vowels);
            }
            return password;
        });
        return array;
    };

    createMediumPassword = () => {
        // TODO: filling to be able to iterate is shit.
        var array = new Array(10).fill('');

        array = array.map(function() {
            // TODO: longer, better, some uppercase(?)
            return Math.random().toString(36).substring(2, 15);
        });
        return array;
    };

    createHardPassword = () => {
        
        // TODO: filling to be able to iterate is shit.
        var array = new Array(10).fill('');

        // TODO: Remove similar looking characters like O0, Il ???
        var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?[];,./~';

        array = array.map(function() {
            var password = '';
            if(window.crypto && window.crypto.getRandomValues)
            {
                var values = new Uint32Array(64);
                window.crypto.getRandomValues(values);
                // TODO: read this.state.length here
                for(var i=0; i<64; i++) {
                    password += charset[values[i] % charset.length];
                }
                return password;
            }
            return 'TODO: wastun?'
        });
        return array;
    };

    create = () => {
        var passwords;
        console.log(this.state.method);
        switch (this.state.method) {
            case 'number':
                passwords = this.createNumberPassword();
                break;
            case 'easy':
                passwords = this.createEasyPassword();
                break;
            case 'medium':
                passwords = this.createMediumPassword();
                break;
            case 'hard':
                passwords = this.createHardPassword();
                break;
        }
        
        passwords = passwords.map(this.truncate);
        this.setState({ passwords });
    };

    onMethodChange = ( evt ) => {
        this.setState({ method: evt.target.value }); 
        this.create();
    };

    onLengthChange = ( evt ) => {
        this.setState({ length: evt.target.value }); 
        this.create();
    };

	render({}, {passwords, length}) {
		return (
            <main class={style.home}>
                <h1>Create</h1>
                <p>Create random passwords inside your browser.</p>

                <fieldset onChange={this.onMethodChange} class={style.buttongroup}>
                    <input type="radio" id="easy" name="method" value="easy" class={style.button_input} />
                    <label for="easy" class={style.button_label}>easy</label>
                    <input type="radio" id="number" name="method" value="number" class={style.button_input} />
                    <label for="number" class={style.button_label}>number</label>
                    <input type="radio" id="medium" name="method" value="medium" class={style.button_input} />
                    <label for="medium" class={style.button_label}>medium</label>
                    <input type="radio" id="hard" name="method" value="hard" class={style.button_input} />
                    <label for="hard" class={style.button_label}>hard</label>
                </fieldset>

                <fieldset>
                    <input name="length" id="length" type="range" min="4" max="32" step="1"
                        value={this.state.length}
                        onInput={this.onLengthChange} />
                        <span>{this.state.length}</span>
                </fieldset>

                <ul>
                    { passwords.map(password => (
                        <li key={password}>{ password }</li>
                    )) }
                </ul>
            </main>
		);
	}
}
