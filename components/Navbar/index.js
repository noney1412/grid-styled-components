import Link from "next/link";
import { Navbar } from "./styled";

export default () => (
	<Navbar>
		<Link>
			<div>Introduction</div>
		</Link>
		<Link>
			<div>Skill</div>
		</Link>
		<Link>
			<div>Achievement</div>
		</Link>
		<Link>
			<div>Project</div>
		</Link>
	</Navbar>
);
