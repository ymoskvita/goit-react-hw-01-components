import styled from "styled-components";

export const Section = styled.section`
    width: 375px;
    border: 1px solid #DCDCDC;
    margin: 50px auto 0;
`;
export const Title = styled.h2`
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
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
    padding-top: 10px;
    padding-bottom: 15px;
`;
export const Label = styled.span`
    color:#ffffff;
`;
export const Percentage = styled.span`
    font-size: 22px;
    margin-top: 5px;
    color: #ffffff;
`;