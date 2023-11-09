

const TableData = ({ tableData }) => {
    const { title, marks, status, givenMark, feedback } = tableData;
    return (
        <tr className="hover">
            <td>
                {title}
            </td>
            <td>
                {status}
            </td>
            <td>
                {marks}
            </td>
            <td>
                {givenMark}
            </td>
            <td>
                {feedback}
            </td>
        </tr>
    );
};

export default TableData;