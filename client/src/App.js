import './App.css';
import { useEffect } from "react"
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Components/Home';
import Report from './Components/Report';
import { DataState } from './Context/DataProvider';
function App() {
 
  const {  setFiles, setUser }=DataState()
  let navigate = useNavigate();
useEffect(() => {
  if (window.location.href.includes("=")) {
    const key = (window.location.href).split("=")[1].slice(0, -4)
    getFiles(key);

    navigate("/Report", { replace: true })
  }
// eslint-disable-next-line 
}, [])


  const getFiles = async (key) => {
    try {
      const { data } = await axios.post(`/`, { code: key })
      const { files, user } = data
      setFiles(files)
      setUser(user)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Report' element={<Report />} />
      </Routes>
  );
}

export default App;


// setFiles([
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/11SmE_YxXdmpL8bsntGTJ2_KVOc-rQR-NYOGVsRhsgNA/edit?usp=drivesdk",
//     "size": "2555",
//     "name": "code qualities",
//     "quotaBytesUsed": "2555",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/1PfG80py8Vuz8qETwU4oZ2blx1_cvpfFJ1ylB0Wy3Yx0/edit?usp=drivesdk",
//     "size": "12449",
//     "name": "Algorithms",
//     "quotaBytesUsed": "12449",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/1KfXs3egiCmCax6OCXCjJuGAghwplOOHVWSf3_DZptcE/edit?usp=drivesdk",
//     "size": "2602",
//     "name": "quick read",
//     "quotaBytesUsed": "2602",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.spreadsheet",
//     "webViewLink": "https://docs.google.com/spreadsheets/d/1DTmeniC9apuBpq3JDyviNNSNauwbBH5E1DAWY3lLibk/edit?usp=drivesdk",
//     "size": "19852",
//     "name": "tinywow_usa visa sucess rate_16907436",
//     "quotaBytesUsed": "19852",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.spreadsheet",
//     "webViewLink": "https://docs.google.com/spreadsheets/d/120EeTmYkdfgcaylqEIFleKtpzrLMMYoeOSsNTPE5z-c/edit?usp=drivesdk",
//     "size": "1024",
//     "name": "Untitled spreadsheet",
//     "quotaBytesUsed": "1024",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/1MHt6OMlezdEnSk9gC-WHkWMHRFcOp8cepdfhuQlv6PM/edit?usp=drivesdk",
//     "size": "754765",
//     "name": "tata steel aep",
//     "quotaBytesUsed": "754765",
//     "permissionIds": [
//       "anyoneWithLink",
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/16-WetBZPrKeMQVYwZvs8vaOMdE3GQR-bEEdlWiIaYUc/edit?usp=drivesdk",
//     "size": "2058",
//     "name": "vishnu's cover letter",
//     "quotaBytesUsed": "2058",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/18Z5gjqC1Xf6c5s2nlJtOUNafw8TqL_m3DjoNQxxe-jM/edit?usp=drivesdk",
//     "size": "9496",
//     "name": "vishnu's Infosys",
//     "quotaBytesUsed": "9496",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/1xxkShtguzIll0QbWinpO5ivhQZxe0rKGUjbZodEvs3s/edit?usp=drivesdk",
//     "size": "9542",
//     "name": "vishnu's resume",
//     "quotaBytesUsed": "9542",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   },
//   {
//     "iconLink": "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.google-apps.document",
//     "webViewLink": "https://docs.google.com/document/d/1zvUrV3m4oWCQmfNpPdHVcqNjKc7WB6wYASBholZgyTU/edit?usp=drivesdk",
//     "size": "1024",
//     "name": "Untitled document",
//     "quotaBytesUsed": "1024",
//     "permissionIds": [
//       "06456212810320403648"
//     ]
//   }
// ])