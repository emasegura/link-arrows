const selection = figma.currentPage.selection

if (selection.length !== 2) {
    figma.closePlugin('Seleccioná exactamente 2 frames')
}

const [nodeA, nodeB] = selection

if (nodeA.type !== 'FRAME' || nodeB.type !== 'FRAME') {
    figma.closePlugin('Ambos elementos deben ser frames')
}

const centerA = {
    x: nodeA.x + nodeA.width / 2,
    y: nodeA.y + nodeA.height / 2
}

const centerB = {
    x: nodeB.x + nodeB.width / 2,
    y: nodeB.y + nodeB.height / 2
}

const line = figma.createLine()

line.x = centerA.x
line.y = centerA.y

const dx = centerB.x - centerA.x
const dy = centerB.y - centerA.y

line.resize(Math.sqrt(dx * dx + dy * dy), 2)

line.rotation = Math.atan2(dy, dx) * (180 / Math.PI)

figma.currentPage.appendChild(line)

figma.closePlugin('Conexión creada')