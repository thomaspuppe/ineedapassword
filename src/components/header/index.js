import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>ineedapassword.com</h1>
				<nav>
                    <Link activeClassName={style.active} href="/">PW</Link>
                    <Link activeClassName={style.active} href="/calculate">C</Link>
					<Link activeClassName={style.active} href="/info">i</Link>
				</nav>
			</header>
		);
	}
}
