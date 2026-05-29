const palabrasProhibidas = ['puta', 'mierda', 'cabron', 'pendejo', 'idiota'];

export function contienePalabraProhibida(texto) {
  const lower = texto.toLowerCase();
  return palabrasProhibidas.some(p => lower.includes(p));
}

export function mostrarAdvertencia() {
  alert('⚠️ Tu mensaje contiene contenido inapropiado.');
}
