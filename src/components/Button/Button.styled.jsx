import styled from "@emotion/styled";

export const LoadMore = styled.button`
display:block;
    margin: 0 auto;
    width: 200px;
    min-height: 50px;
    background-color: blue;
    font-size: 25px;
    color: white;
    transition: color 0.3s ease;

    &&:hover{
        color: blue;
        background-color: white;
    }
`