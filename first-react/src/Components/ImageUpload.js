import React, { useState } from 'react';

// const ImageUpload = () => {
//   const [month, setMonth] = useState('');
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     // try {
//       const formData = new FormData();
//       formData.append('month', month);
//       formData.append('image', image);

//     //   await axios.post('http://localhost:8080/api/images', formData, {
//     //     headers: {
//     //       'Content-Type': 'multipart/form-data',
//     //     },
//     //   });

//     //   // 이미지 업로드 후에 필요한 로직 추가
//     // } catch (error) {
//     //   console.error('Error uploading image:', error);
//     // }
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="month">Month:</label>
//         <input
//           type="text"
//           id="month"
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="image">Image:</label>
//         <input type="file" id="image" onChange={handleImageChange} />
//       </div>
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default ImageUpload;

const ImageUpload = () => {
  const [months, setMonths] = useState([]);

  // useEffect(() => {
  //     axios.get('/api/months')
  //         .then(response => setMonths(response.data))
  //         .catch(error => console.error('Error fetching months', error));
  // }, []);

  return (
      <div>
          <h1>Monthly Images</h1>
          <ul>
              {months.map(month => (
                  <li key={month.id}>
                      {month.month} - <img src={month.imageUrl} alt={`${month.month} Image`} />
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default ImageUpload;



