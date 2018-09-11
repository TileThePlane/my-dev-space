import css from "styled-jsx/css";

export default css`
  .footer {
    background-color: #3490dc;
    padding: 0.5rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    font-size: 0.75rem;
    color: #fff;

  }
  
  @media (min-width: 992px) {
    .footer {
      margin-bottom: 1rem;
    }
  }


  a {
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 0.25rem;
    text-decoration: none;
    padding: 0.2rem;
  }
`;
