const FileTable = ({ monthsData, onFileUpload, onFileDelete, onCheckboxChange }) => {
    return (
      <div className="register-middle">
        <div className="table-container fixed-header">
          <div className="table-area">
            <table>
              <caption></caption>
              <colgroup>
                <col style={{ width: '80px' }} />
                <col style={{ width: '720px' }} />
                <col style={{ width: '58px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">월</th>
                  <th scope="col">파일첨부</th>
                  <th scope="col">노출</th>
                </tr>
              </thead>
              <tbody>
                {monthsData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.mm}월</td>
                    <td>
                      <div className="file-box">
                        <div className="file">
                          <label htmlFor={`file-select-${index}`}>
                            <span>파일 찾기</span>
                          </label>
                          <input
                            type="file"
                            name={`file-select-${index}`}
                            id={`file-select-${index}`}
                            onChange={(e) => onFileUpload(e, index)}
                          />
                        </div>
                        <div className="file-data">
                          {data.fileName ? (
                            <>
                              <span>{data.fileName}</span>
                              <button
                                type="button"
                                className="btn-delete"
                                onClick={() => onFileDelete(index)}
                              ></button>
                            </>
                          ) : (
                            <div className="file-nodata">
                              <span>No Files</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          name={`chk-${index + 1}`}
                          id={`chk-${index + 1}`}
                          checked={data.displayType === 'Y'}
                          onChange={() => onCheckboxChange(index)}
                        />
                        <label htmlFor={`chk-${index + 1}`} className="check-icon"></label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  

  export default FileTable;