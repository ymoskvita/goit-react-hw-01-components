import styled from "styled-components";

export const Section = styled.section`
    width: 300px;
    border: 1px solid #DCDCDC;
    margin: 50px auto 0;
`;
export const Wrapper = styled.div`
    padding-bottom: 20px;

`;
export const Avatar = styled.img`
    display: block;
    width: 150px;
    border-radius: 50%;
    margin: 0 auto;
    padding-top: 35px;
`;
export const Username = styled.p`
    font-size: 24px;
    text-align: center;
    margin: 15px;
`;
export const Tag = styled.p`
    font-size: 16px;
    text-align: center;
    color: #686461;
    margin: 10px;
`;

export const StatsList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;
export const StatsItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 20px;
    background-color: #F0F8FF;
    border: 1px solid #DCDCDC;
`;
export const Label = styled.span`
    color: #686461;
`;
export const Quantity = styled.span`
    font-size: 16px;
`;