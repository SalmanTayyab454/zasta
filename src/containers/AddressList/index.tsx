import React, { useEffect, useState } from "react";
import { useAddressList } from "../../services/address-list";
import SearchField from "../../components/SearchField";
import DataTable from "../../components/DataTable";
import { Address } from "../../services/address-list";
import useDebounce from "../../hooks/use-debounce";

function AddressList() {
  const [addressListdata, setAddressListData] =  useState<Address[]>();
  const [searchTerm, setSearchTerm] =  useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { addressList, isFetched, isLoading } = useAddressList();

    //search func
    useEffect(() => {
    if (isFetched && addressList) {
      if (debouncedSearchTerm) {
        const filteredData = addressList.filter(address => {
          return (
            address.strasse_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            address.postleitzahl.toString().includes(debouncedSearchTerm.toString())
          );
        });
        setAddressListData(filteredData);
      } else {
        setAddressListData(addressList);
      }
    }
  }, [debouncedSearchTerm, isFetched, addressList]);
  
  return (  
      <div className="container">
        <SearchField inputValue={(value: string) => (setSearchTerm(value))} />
        {isLoading ? (
              <p>Loading...</p>
            ) : (
              addressListdata && addressListdata.length > 0 ? <DataTable addressList={addressListdata}/> : <p>Data not found</p>
         )}
      </div>
  );
}

export default AddressList;
