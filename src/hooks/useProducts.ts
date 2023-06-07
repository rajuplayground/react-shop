import { useQuery } from "react-query";
import { gameService } from "../services";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: gameService.getAll,
  });
};

export default useProducts;
