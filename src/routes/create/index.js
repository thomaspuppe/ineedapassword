import { h, Component } from 'preact';
import style from './style';

export default class Create extends Component {

    state = {
        passwords: [],
        count: 5,
    };

    createNumberPassword = () => {

        var array = new Uint32Array(10);
        window.crypto.getRandomValues(array);

        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }

        this.setState({ passwords: array });

    };

    create = ( evt ) => {
        console.log( evt.target.value );
        this.createNumberPassword();
        console.log(this.state.passwords)
        this.setState({ count: this.state.count+1 });
    };

	render({}, {passwords, count}) {
		return (
            <main class={style.home}>
                <h1>Create</h1>
                <p>This is the Create component.</p>

                <fieldset onChange={this.create}>
                    <input type="radio" id="easy" name="method" value="easy" />
                    <label for="easy">easy</label>
                    <input type="radio" id="medium" name="method" value="medium" />
                    <label for="medium">medium</label>
                    <input type="radio" id="hard" name="method" value="hard" />
                    <label for="hard">hard</label>
                </fieldset>

                <h2>Passwords:</h2>
                <pre>{ passwords }</pre>
                <ul>
                    { passwords.map(password => (
                        <li key={password}>{{ password }}</li>
                    )) }
                </ul>
                <pre>{ count }</pre>
            </main>
		);
	}
}
