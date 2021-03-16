import React from 'react';
import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function footer() {
	return (
		<footer className="footer">
			<div className="made__by">
				<h3>Project created by Mosae Litsoane</h3>
			</div>

			<nav>
				<a
					href="https://www.linkedin.com/in/mosae-litsoane/"
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/Mosae"
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub />
				</a>
				<a
					href="https://twitter.com/Mosae_Litsoane"
					target="_blank"
					rel="noopener noreferrer">
					<FaTwitter />
				</a>
			</nav>
		</footer>
	);
}

export default footer;
