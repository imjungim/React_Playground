import React, {useState} from "react";
import MonthTable from "./MonthTable";
import FileTable from "./FileTable";

const Popup = () => {
    const [selectedYear, setSelectedYear] = useState(2023);
  
    const [monthsData, setMonthsData] = useState([
      {
        seq: 14,
        yyyy: 2023,
        mm: '3',
        displayType: 'Y',
        iptId: 'hji',
        iptDt: '2023-11-11',
        udtId: 'test',
        udtDt: '2023-11-11',
        filePath: '파일23',
        fileName: 'fileName😩',
        fileSeq: 22,
      },
      {
        seq: 15,
        yyyy: 2023,
        mm: '2',
        displayType: 'Y',
        iptId: 'hji',
        iptDt: '2023-11-11',
        udtId: 'test',
        udtDt: '2023-11-11',
        filePath: '파일22',
        fileName: 'fileName😩',
        fileSeq: 22,
      },
      {
        seq: 16,
        yyyy: 2023,
        mm: '1',
        displayType: 'Y',
        iptId: 'hji',
        iptDt: '2023-11-11',
        udtId: 'test',
        udtDt: '2023-11-11',
        filePath: '파일21',
        fileName: 'fileName😩',
        fileSeq: 22,
      },
      // 나머지 월도 추가
    ]);
  
    const years = [2023, 2022, 2021]; // 가능한 년도들
  
    const handleYearChange = (year) => {
      setSelectedYear(year);
      // 년도에 따른 데이터를 서버에서 가져오는 등의 로직 추가 가능
    };
  
    const handleAddYear = () => {
      const latestYear = Math.max(...years);
      const updatedYears = [...years, latestYear + 1];
      const updatedMonthsData = [
        ...monthsData,
        // 새로운 년도에 해당하는 빈 데이터 추가
        {
          seq: null,
          yyyy: latestYear + 1,
          mm: '',
          displayType: 'N',
          iptId: '',
          iptDt: '',
          udtId: '',
          udtDt: '',
          filePath: '',
          fileName: '',
          fileSeq: null,
        },
      ];
      setMonthsData(updatedMonthsData);
    };
  
    const handleFileUpload = (e, index) => {
      const file = e.target.files[0];
      const updatedMonthsData = [...monthsData];
      updatedMonthsData[index].fileName = file ? file.name : null;
      setMonthsData(updatedMonthsData);
    };
  
    const handleFileDelete = (index) => {
      const updatedMonthsData = [...monthsData];
      updatedMonthsData[index].fileName = null;
      setMonthsData(updatedMonthsData);
    };
  
    const handleCheckboxChange = (index) => {
      const updatedMonthsData = [...monthsData];
      updatedMonthsData[index].displayType = updatedMonthsData[index].displayType === 'Y' ? 'N' : 'Y';
      setMonthsData(updatedMonthsData);
    };
  
    const handleSave = () => {
      // 저장 로직 추가
    };
  
    return (
      <div className="popup">
        <div className="popup-content">
          <MonthTable
            years={years}
            selectedYear={selectedYear}
            onYearChange={handleYearChange}
            onAddYear={handleAddYear}
          />
          <FileTable
            monthsData={monthsData}
            onFileUpload={handleFileUpload}
            onFileDelete={handleFileDelete}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className="popup-bottom">
          <div className="button-box">
            <button type="button" className="btn btn-line-primary">
              <span>취소</span>
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              <span>저장</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  

  export default Popup;