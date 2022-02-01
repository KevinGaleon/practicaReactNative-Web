
export const TiposBasicos = () => {

  const nombre: string = 'Kevin';
  const edad: number = 21;
  const estadoActivo: boolean = false;

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
  <>
      <h3>Tipos Basicos</h3>
      {nombre}, { edad}, { (estadoActivo)?'activo':'inactivo'}
      <br />
      {poderes.join(', ')}
  </>)
}


