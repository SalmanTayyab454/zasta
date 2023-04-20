import { useQuery } from "react-query";
import axios from "axios";
import { Response } from "./";

const getAddressList = async () => {
  const response = await axios.get(
    "https://geo.sv.rostock.de/download/opendata/adressenliste_historisch/adressenliste_historisch.json"
  );
  return response.data;
};

export const useAddressList = (): Response => {
  const {
    isLoading,
    isFetched,
    data: addressList,
  } = useQuery("FETCH_ADDRESS_LIST", async () => await getAddressList(), {
     cacheTime: 1000 * 60 * 60, // 1 hour
  });

  return { isLoading, isFetched, addressList };
};
