import { useEffect, useState } from 'react';
import { fetchProfesiones } from '../services/profesionesService';

export const useProfesiones = () => {

    const [profesiones, setProfesiones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const obtenerProfesiones = async () => {
            try {
                const data = await fetchProfesiones();
                setProfesiones(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        obtenerProfesiones();

    }, []);

    return {
        profesiones,
        loading,
        error
    };
};