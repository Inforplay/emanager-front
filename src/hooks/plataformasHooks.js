import { useMutation, useQuery } from "@tanstack/react-query";
import { API, queryClient } from './../services/index';

export const useBuscarPlataforma = () => {
    return useQuery({
        queryKey: ["plataformas"],
        queryFn: async () => {
            const response = await API.get("/plataformas");
            return response.data;
        }
    });
}

export const useCriarPlataforma = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.post("/plataformas", dados);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["plataformas"]
            })
        }
    });
}

export const useEditarPlataforma = () => {
    return useMutation({
        mutationFn: async (dados) => {
            const response = await API.put(`/plataformas/${dados.id}`, dados);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["plataformas"]
            })
        }
    });
}

export const useDeletarPlataforma = () => {
    return useMutation({
        mutationFn: async (id) => {
            const response = await API.delete(`/plataformas/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["plataformas"]
            })
        }
    });
}