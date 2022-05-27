import styled from 'styled-components';

export const Heading = styled.h1`
   text-align: center;
   color: green;
`;

export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 90%;
   bottom: 40px;
   height: 20px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color:   #299DA8

  ;  /* fallback for old browsers */
  color: -webkit-linear-gradient(to right, # #4dd2ff, red);  /* Chrome 10-25, Safari 5.1-6 */
  color: linear-gradient(to right, #434343,  #4dd2ff   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `;