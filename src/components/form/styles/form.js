import styled from 'styled-components/macro'

const generalInputStyles = `
	outline: none;
	width: 100%;
	border: 1px solid #eee;
	background-color: white;
	padding: 1.5rem 1rem;
	font-size: 1.2rem;
	border-radius: 5px;
	margin-bottom: 2rem;

	:focus {
		border-color: var(--primary-color);
	}
`


export const Container = styled.form`
	width: 100%
`

export const Title = styled.h3``

export const Group = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;

		input {
			width: calc(50% - 1rem);
		}
	}
`

export const Input = styled.input`
	${generalInputStyles}
`

export const TextArea = styled.textarea`
	${generalInputStyles}

`

export const Submit = styled.button`
	outline: none;
	border: 2px solid transparent;
	cursor: pointer;
	background-color: var(--primary-color);
	color: #fff;
	padding: 1.5rem 2.5rem;
	border-radius: 50rem;
	font-size: 1.4rem;
	transition: all 200ms linear;

	&:hover {
		background-color: transparent;
		border-color: var(--primary-color);
		color: var(--text-color);
	}
`