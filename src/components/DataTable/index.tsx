import React from "react";
import { Address } from "../../services/address-list";

interface Props {
  addressList: Address[];
}
const DataTable: React.FC<Props> = ({ addressList }) => {
  return (
    <div className="row">
      <div className="App-header table-responsive-sm table-responsive-md">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">UUID</th>
              <th scope="col">Postleitzahl</th>
              <th scope="col">Gemeindeteil Name</th>
              <th scope="col">Gemeinde Name</th>
              <th scope="col">Straße Name</th>
              <th scope="col">Hausnummer</th>
            </tr>
          </thead>
          <tbody>
            {addressList?.map((item: Address) => (
              <tr key={item.uuid}>
                <td>{item.uuid}</td>
                <td>{item.postleitzahl}</td>
                <td>{item.gemeindeteil_name}</td>
                <td>{item.gemeinde_name}</td>
                <td>{item.strasse_name}</td>
                <td>{item.hausnummer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
