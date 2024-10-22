import styled from 'styled-components';

const BaseMenuItem = styled.li`
  padding: 20px 25px;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 0.5px;
  transition: background-color 0.4s, transform 0.4s, box-shadow 0.4s;
  display: flex;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px) scaleX(1.02);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }

  i {
    margin-right: 10px;
    transition: transform 0.4s, color 0.4s;
  }

  &:hover i {
    transform: scale(1.15);
    color: #ffcc00;
  }
`;

export default BaseMenuItem;
