import React from 'react';
import styled from 'styled-components';
import imagen from '../imagen.jpg';

const Card = () => {
   return (
      <StyledCard>
         <img src={imagen} alt="persona con hoja" />
         <footer>
            <h4>product name</h4>
            <p>$15</p>
         </footer>
      </StyledCard>
   );
};

const StyledCard = styled.article`
   width: 90vw;
   max-width: 300px;
   background: var(--white);
   border-radius: 0.25rem;

   img {
      width: 100%;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
   }

   footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      h4 {
         text-transform: capitalize;

         &::before {
            content: 'Name: ';
            color: red;
         }
      }
      p {
         color: var(--primary);
         font-weight: 700;
      }
   }

   transition: all 0.5s ease-in-out;
   /* hover en todo el styled component */
   &:hover {
      box-shadow: 5px 5px 13px rgb(97, 100, 98);
      cursor: pointer;
   }

   @media (min-width: 768px) {
      max-width: 600px;
   }
`;

export default Card;
