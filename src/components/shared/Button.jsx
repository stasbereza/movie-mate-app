// Core
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, name, onClick, cls }) => (
	<button type={type} name={name} onClick={onClick} className={cls}>
		{text}
	</button>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	name: PropTypes.string,
	cls: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	type: 'button',
	name: 'button',
	cls: '',
	onClick: () => null,
};

export default Button;
