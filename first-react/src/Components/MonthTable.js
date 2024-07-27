const MonthTable = ({ years, selectedYear, onYearChange, onAddYear }) => {
    return (
      <div className="button-box">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            className={`btn-years ${selectedYear === year ? 'selected' : ''}`}
            onClick={() => onYearChange(year)}
          >
            <span>{`${year}년`}</span>
          </button>
        ))}
        <button type="button" className="btn-years btn-years-add" onClick={onAddYear}>
          <span>년도추가</span>
        </button>
      </div>
    );
  };

  export default MonthTable;