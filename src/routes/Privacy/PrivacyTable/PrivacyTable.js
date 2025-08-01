import './PrivacyTable.css';

function PrivacyTable() {
    return (
        <table className="privacy">
            <thead>
                <tr>
                    <th scope="col">Reasons we can share your personal information</th>
                    <th scope="col">Do we share?</th>
                    <th scope="col">Can you limit this sharing?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p><b>For our everyday business purposes:</b></p>
                        <p>To process your loan, verify your identity, income and employment, obtain you credit report from the credit bureaus</p>
                    </td>
                    <td><b>Yes</b></td>
                    <td><b>No</b></td>
                </tr>
                <tr>
                    <td>
                        <p><b>For our marketing purposes:</b></p>
                        <p>To offer our products and services to you</p>
                    </td>
                    <td><b>No</b></td>
                    <td><b>Not shared</b></td>
                </tr>
                <tr>
                    <td><p><b>For joint marketing with other financial companies</b></p></td>
                    <td><b>No</b></td>
                    <td><b>Not shared</b></td>
                </tr>
                <tr>
                    <td>
                        <p><b>For our affiliates' everyday business purposes:</b></p>
                        <p>Information about your transactions and experiences</p>
                    </td>
                    <td><b>No</b></td>
                    <td><b>Not shared</b></td>
                </tr>
                <tr>
                    <td><p><b>For our affiliates to market to you</b></p></td>
                    <td><b>No</b></td>
                    <td><b>Not shared</b></td>
                </tr>
                <tr>
                    <td><p><b>For our non-affiliates to market to you</b></p></td>
                    <td><b>No</b></td>
                    <td><b>Not shared</b></td>
                </tr>
            </tbody>
        </table>
    );
}

export default PrivacyTable;
