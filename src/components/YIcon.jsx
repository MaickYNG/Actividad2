
import * as allIcons from 'react-icons/fa6';


function YIcon({ iconoNombre }) {
  const IconoAUsar = allIcons[iconoNombre];

  if (!IconoAUsar) {
    console.error(`El icono ${iconoNombre} no se encontró en react-icons/fa`);
    return <div>Icono no encontrado</div>;
  }

  return <IconoAUsar />;
}

export default YIcon;