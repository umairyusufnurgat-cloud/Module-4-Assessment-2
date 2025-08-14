const pieces = document.querySelectorAll('.puzzle-piece');
const cells = document.querySelectorAll('.grid-cell');

pieces.forEach(piece => {
  piece.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

cells.forEach(cell => {
  cell.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  cell.addEventListener('drop', (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const piece = document.getElementById(pieceId);
    cell.appendChild(piece);
    piece.style.position = 'static'; // Reset position inside cell
  });
});
