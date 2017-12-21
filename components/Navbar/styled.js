import styled from "styled-components";

export const Navbar = styled.nav`
	display: flex;
	padding: 0.9em;
	justify-content: space-around;
	font-family: kanit;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: solid 2px;
	color: #ebebeb;

	div {
		border: none;
		background: orange;
		box-shadow: 0px 0px 1px #777;
		height: 100%;
	}

	div:active {
		border-bottom: 1px solid #bbb;
		color: #060606;
	}

	div:hover {
		border-bottom: 1px solid #bbb;
		color: #060606;
	}
`;
