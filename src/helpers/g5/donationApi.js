import {useEffect, useState} from "react";
import axios from "axios";

export const useDonation = (id) => {
    const [pet, setPet] = useState(null);
    const token = import.meta.env.VITE_API_TOKEN;
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        axios.get(
            `https://help-pet-back-g2.azurewebsites.net/donations/view/${id}`,
            {headers: {'Authorization': `Bearer ${token}`}}
        )
            .then(response => {
                setPet(response.data.results);
            })
            .catch(error => {
                setErr(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return {pet, loading, err}
};

export const useAllDonations = () => {
    const token = import.meta.env.VITE_API_TOKEN;
    const [donations, setDonations] = useState([]);

    useEffect(() => {

        axios.get(
            "https://help-pet-back-g2.azurewebsites.net/donations/viewAll",
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(response => {
                setDonations(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar doações:", error);
            });

    }, []);

    return donations;
};