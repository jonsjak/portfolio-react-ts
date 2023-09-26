import styled from "styled-components";

export const DemoButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 200px;
    
    @media (min-width: 668px) and (max-width: 1024px) {
        flex-direction: row-reverse;
        width: 372px;
    }
`