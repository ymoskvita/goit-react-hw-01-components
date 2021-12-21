import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
export const Item = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid #DCDCDC;
    max-width: 350px;
    padding: 5px 15px;
    box-shadow: 10px 5px 5px #DCDCDC;
    margin: 10px;
    border-radius: 5px;
}
`;
export const Status = styled.span`
    width: 20px;
    height: 20px;
    background-color: ${props => {
    return (props.itemprop ? 'green' : 'red') ;
    }};
    border-radius: 50%;
    margin-right: 15px;
`;
export const Avatar = styled.img`
    margin-right: 15px;
`;
export const Name = styled.p`
    font-size: 24px;
    margin-right: 15px;
`;