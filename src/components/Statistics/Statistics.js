import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return (
    <section>
        {title && <h2>{title}</h2>}

        <ul>
            {stats.map(stat => (
                <li key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        labe: PropTypes.string,
        percentage: PropTypes.number,
    }),)
}

export default Statistics;