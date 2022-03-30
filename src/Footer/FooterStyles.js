import styled from 'styled-components';

export const Box = styled.div`
padding: 50px 30px;
background: rgb(33, 37, 41);
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 40px 25px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const CopyRight = styled.div`
padding:30px 0;
font-size:14px;
text-align: center;
color: rgba(255,255,255,.55);
`;


export const FooterLink = styled.a`
color: rgba(255,255,255,.55);;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 16px;
color: rgba(255,255,255,.55);;
margin-bottom: 40px;
font-weight: bold;
`;
