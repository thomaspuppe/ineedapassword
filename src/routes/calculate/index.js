import { h, Component } from 'preact';
import style from './style';

export default class Calculate extends Component {
    render() {
        return (
            <main class={style.home}>
                <h1>Calculate</h1>
                <p>This is the Calculate component.</p>
            </main>
        );
    }
}
