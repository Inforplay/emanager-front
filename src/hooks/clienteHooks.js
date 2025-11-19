import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from './../services/index';

export const useBuscarCliente = () => {
    return useQuery({
        queryKey: ["clientes"],
        queryFn: async () => {
            const response = await API.get("/clientes");
            return response.data;
        }
    });
}

export const useCriarCliente = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.post("/clientes", dados);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["clientes"]
            })
        }
    });
}

export const useEditarCliente = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.put(`/clientes/${dados.id}`, dados);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["clientes"]
            })
        }
    });
}

export const useDeletarCliente = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await API.delete(`/clientes/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["clientes"]
            })
        }
    });
}