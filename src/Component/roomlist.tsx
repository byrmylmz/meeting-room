import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
//@ts-ignore
import { roomList } from "../datas";
import { useEffect, useState } from "react";

function Roomlist() {
  
  const [rooms,setRooms] = useState<any>([])

  useEffect(() => {
    setRooms(roomList)
  },[])
  
  return (
    <>
      <Button variant="primary" type="button" href="../room">
        Add Room
      </Button>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Room Name</th>
            <th className=" w-6">Status</th>
            <th className=" w-6">Update</th>
          </tr>
        </thead>
        <tbody>
          {
            rooms.map((item:any,index:number) => {
              return  <tr key={index}>
              <td>{item.fruit}</td>
              <td> {item?.icon}
                {item.size}</td>
              <td>{item.color}</td>
            </tr>
            })
          }
        </tbody>
      </Table>
    </>
  );
}

export default Roomlist;
