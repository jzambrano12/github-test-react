import { useQuery } from "react-query";
import api from "../api";

export const useGetPublicGists = (page) => {
  return useQuery(["PubliccGists", page], api().getPublicGists);
};

export const useGetAGist = (gist_id) => {
  return useQuery(["GetAGist", gist_id], api().getAGist);
};

export const useGetUserGists = (username) => {
  return useQuery(["UserGists", username], api().getUserGists);
};
