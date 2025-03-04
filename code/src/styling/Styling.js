import styled from "styled-components";


// HEADER //

export const StyledSection = styled.main`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-left: 1rem;
`

export const StyledDiv2 = styled.div`
    max-width: 767px;  
    margin: 0 auto; 
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 6rem;
    align-items: center;

    @media (min-width: 767px) {
        margin-bottom: 3rem;
     }

`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
`

export const StyledH2 = styled.h2`
    margin-right: 1rem;
    font-size: 2rem;
    line-height: 2.3rem;
    font-weight: 500;
    max-width: 150px;
    color: #dedede;

    @media (min-width: 767px) {
       font-size: 3rem;
       line-height: 3.2rem;
       max-width: 200px;
    }
`

export const Styledp = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #dedede;
    text-align: center;
    margin: 2rem 1rem 0 1rem;

    @media (min-width: 767px) {
        font-size: 3rem;
    }

`

export const StyledImg = styled.img`
    width: 72px;
    background-color: #333;
    padding: 1rem;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px -7px;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        width: 112px;
    }
`

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;

    @media (min-width: 767px) {
        padding-top: 8rem;
    }
`

export const StyledStartBtn = styled.button`
    background-color: #333;
    color: #80B477;
    border: none;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 5px -6px;

    @media (min-width: 767px) {
        width: 112px;
        height: 112px;
    }
`

