const DataDisplayer = ({ fetchedData }) => (
    <div>
        <h3>Fetched data for user asafda:</h3>
        <ul>
            {Object.keys(fetchedData).map((key, index) => (
                <li key={index}>{`${key}: ${fetchedData[key]}`}</li>
            ))}
        </ul>
    </div>
);

export default DataDisplayer;