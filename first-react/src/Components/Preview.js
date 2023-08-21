import React, { useState } from "react";

const Preview = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);

  const onUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFile(files);
    console.log(selectedFile);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // 파일 유형 검사 또는 추가 처리를 수행할 수 있음
      // 예: if (selectedFile.type === 'application/pdf') { ... }
      // 이곳에서 선택된 문서 파일을 서버로 업로드하는 로직을 구현
      // 예를 들어, FormData를 사용하여 AJAX 또는 API 호출을 수행할 수 있음
    }
  };

  return (
    <div>
      <div>
        <input
          accept="image/*"
          multiple
          type="file"
          onChange={(e) => onUpload(e)}
        />
        <div>
          <img width={"30%"} src={imageSrc} />
        </div>
      </div>
      <div>
        <input
          width={"100%"}
          type="file"
          accept=".pdf,.doc,.docx"
          multiple onChange={handleFileChange}
        />
        {selectedFile.map((file)=> <div>{file.name}</div> )}
        <button onClick={handleUpload}>Upload Document</button>
      </div>
    </div>
  );
};

export default Preview;
