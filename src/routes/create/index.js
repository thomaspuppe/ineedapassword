import { h, Component } from 'preact';
import style from './style';

export default class Create extends Component {

    state = {
        passwords: [],
        length: 16,
        method: '',
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

    create = () => {
        var passwords = this.createNumberPassword(); 
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

                <fieldset onChange={this.create}>
                    <input type="radio" id="easy" name="method" value="easy" />
                    <label for="easy">easy</label>
                    <input type="radio" id="numbers" name="method" value="numbers" />
                    <label for="numbers">numbers</label>
                    <input type="radio" id="medium" name="method" value="medium" />
                    <label for="medium">medium</label>
                    <input type="radio" id="hard" name="method" value="hard" />
                    <label for="hard">hard</label>
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
