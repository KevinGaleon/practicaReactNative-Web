interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    ciudad: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Kevin',
        edad: 21,
        direccion: {
            pais: 'Ecuador',
            ciudad: 'Machala'
        }
    }

    persona.nombreCompleto = '123456'

    return <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify(persona, null , 2)}
            </pre>
        </code>
    </>;
};
