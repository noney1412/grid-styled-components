import { Wrapper, Sec1, Sec2, Sec3 } from "./styled";

import Navbar from "../Navbar";

export default () => (
	<div style={{ width: "90%", margin: "auto" }}>
		<Wrapper>
			<Sec1>profile</Sec1>
			<Sec2>
				<Navbar />
			</Sec2>
			<Sec3>55555555</Sec3>
		</Wrapper>
	</div>
);
