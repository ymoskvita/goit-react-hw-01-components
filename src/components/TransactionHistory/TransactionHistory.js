import PropTypes from "prop-types";
import { Table, TableHead, TableHeadCaption, Row, Cell } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
    return (
    <Table>
        <TableHead>
            <tr>
                <TableHeadCaption>Type</TableHeadCaption>
                <TableHeadCaption>Amount</TableHeadCaption>
                <TableHeadCaption>Currency</TableHeadCaption>
            </tr>
        </TableHead>
        <tbody>
            {items.map(item => (
                <Row key={item.id}>
                    <Cell>{item.type}</Cell>
                    <Cell>{item.amount}</Cell>
                    <Cell>{item.currency}</Cell>
                </Row>
            ))}
        </tbody>
</Table>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }),)
}

export default TransactionHistory;