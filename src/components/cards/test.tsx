import React from 'react';
import { courseData } from '../../data';

function test() {
	return (
		<div>
			<p>MO</p>
			{courseData.forEach((info) => {
				<h2>{info.name}</h2>;
			})}
		</div>
	);
}

export default test;
