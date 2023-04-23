import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 90%;
    max-width: 800px;
    height: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    .header{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    figure{
        display: none;
        width: 100%;
    }

    img{
        width: 100%;
        opacity: 0.7;
    }


    form{
        display: flex;
        flex-direction: column;
        gap:1rem;
        background-color: var(--white);
    }

    @media(min-width: 500px){
        figure{
            display: block;
        }
    }

    @media(min-width: 768px){
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        .header{
            width:50%;
        }

        form{
            width: 50%;
        }
       
    }





`