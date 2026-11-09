const URL = 'http://localhost:8080/api/profesiones';

export const fetchProfesiones = async () => {

    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error('Error al obtener profesiones');
    }

    return await response.json();
};