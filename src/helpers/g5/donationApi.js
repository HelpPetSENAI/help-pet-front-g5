import { useEffect, useState } from "react";
import axios from "axios";

export const useDonation = (id) => {
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDonation = async () => {
            try {
                const res = await axios.get(
                    `https://help-pet-back-g2.azurewebsites.net/donations/view/${id}`
                );

                setPet(res.data.results);
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDonation();
        }
    }, [id]);

    return { pet, loading, error };
};