import styled from "styled-components";

export const Navbar = styled.nav`
	display: flex;
	padding: 0.9em;
	justify-content: space-around;
	font-family: kanit;
	background-color: #fff;
	border-bottom: solid 2px;
	color: rgba(00, 00, 00, 0.2);

	a {
		border: none;
	}

	a:first-child {
		color: rgba(00, 00, 00, 0.9);
	}

	a:hover {
		border-bottom: 1px solid #bbb;
		color: #060606;
	}

	a:active {
		border-bottom: 1px solid #bbb;
		color: #060606;
	}
`;
