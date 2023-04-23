import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 30px;
        padding: 1.5rem 0.5rem;
        max-height: 800px;
        overflow-y: auto; 
    }

    form{
        width: 90%;
        height: 10%;
    }
`

export const StyledMsg = styled.li`
    width: fit-content;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction:column;

    ${({ mine }) => {
        if (mine) {
        return css`
            align-items: flex-end;
        `;
        } 
    }}

    p{
        width: fit-content;
        padding: 8px;

        ${({ mine }) => {
            if (mine) {
            return css`
                background-color: var(--color-primary);
            `;
            } else {
            return css`
                background-color: var(--off-white);
            `;
            }
        }}

    }

`