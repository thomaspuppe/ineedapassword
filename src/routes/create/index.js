import { h, Component } from 'preact';
import style from './style';

export default class Create extends Component {
	render() {
		return (
            <main class={style.home}>
                <h1>Create</h1>
                <p>This is the Create component.</p>

                <fieldset>
                    <input type="radio" id="easy" name="method" value="easy" />
                    <label for="easy">easy</label>
                    <input type="radio" id="medium" name="method" value="medium" />
                    <label for="medium">medium</label>
                    <input type="radio" id="hard" name="method" value="hard" />
                    <label for="hard">hard</label>
                </fieldset>
            </main>
		);
	}
}
