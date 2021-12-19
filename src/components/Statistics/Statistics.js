import PropTypes from "prop-types";
import { Section, Title, StatsList, StatsItem, Label, Percentage } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
    return (
    <Section>
        {title && <Title>{title}</Title>}

        <StatsList>
            {stats.map(stat => (
                <StatsItem
                    key={stat.id} style={{
                    backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                    }}>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                </StatsItem>
            ))}
        </StatsList>
    </Section>);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),)
}

export default Statistics;