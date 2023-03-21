import { useState,  useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { DataState } from '../Context/DataProvider';
import axios from "axios"

const Report = () => {
  let navigate = useNavigate();
  const { files, user } = DataState()
  const [publicFiles, setPublicFiles] = useState([])
  const [people, setPeople] = useState([])
  const [externalFiles, setExternalFiles] = useState([])
  const sizeHandler = (size) => {
    if (size < 1000) return size + "B"
    else if (size < 10 ** 6) return parseFloat(size / 1000).toFixed(2) + "KB"
    else if (size < 10 ** 9) return parseFloat(size / 10 ** 6).toFixed(2) + "MB"
    else if (size < 10 ** 12) return parseFloat(size / 10 ** 9).toFixed(2) + "GB"
    return size
  }

  const revoke = async () => {
    try {
      const { data } = await axios.post('/revokeAccess', { id: user.id })
      console.log(data);
    navigate("/", { replace: true })
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    const Public = files.filter((ele) => ele.shared && ele.permissions && ele.permissions.find((item) => item.id === "anyoneWithLink"));
    const external = files.filter((ele) => ele.shared && ele.permissions && !ele.permissions.find((item) => item.id === "anyoneWithLink"));
    setPublicFiles(Public);
    setExternalFiles(external);
    let arr = []
    files.forEach((ele) => {
      if (ele.permissions) {
        ele.permissions.forEach((item) => {
          arr.push(item.id)
        })
      }
    })
    setPeople([...new Set(arr)])
  }, [files]);


  return (
    <>
      {files ?
        <div>
          {(publicFiles.length > 0) && <h3>number of PublicFiles: {publicFiles.length}</h3> }
          { (people.length > 0) && <h3>number of People accessing files: {people.length}</h3> }
          { (externalFiles.length > 0) && <h3>number of files shared externally: {externalFiles.length}</h3> }

          <table>
            <thead>
              <tr>
                <th>Kind</th>
                <th>Item</th>
                <th>storage</th>
              </tr>
            </thead>
            <tbody>
              {files.map((ele, index) =>
                <tr key={index}>
                  <td>< img src={ele.iconLink} alt="iconLink" /></td>
                  <td><Link to={ele.webViewLink}>{ele.name}</Link> </td>
                  <td>{sizeHandler(ele.quotaBytesUsed)}</td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={revoke}>Revoke Access to Gdrive</button>


        </div>
        :
        <></>
      }</>
  )
}

export default Report
