import styled from 'styled-components';

export const DefaultButton = styled.button`
   background: #645cff;
   color: #fff;
   border: none;
   border-radius: 0.25rem;
   cursor: pointer;
   text-transform: capitalize;
   padding: 0.25rem;
   display: block;
   width: 200px;
   margin: 1rem auto;
`;

// modifica sobre el anterior 👍👍
export const HipsterButton = styled(DefaultButton)`
   width: 150px;
   background: transparent;
   color: #645cff;
   border: 1px solid #645cff;
   padding: 1rem;
   display: inline-block;
   margin-right: 1rem;

   /* para el q se va a renderizar como link (a element) */
   text-decoration: none;
   text-align: center;
   font-size: 1rem;
`;
// npm install @mui/material @emotion/react @emotion/styled
