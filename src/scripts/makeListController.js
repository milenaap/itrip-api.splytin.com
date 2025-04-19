// scripts/makeListController.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entityRaw = process.argv[2];

if (!entityRaw) {
  console.error('❌ Debes indicar un nombre de entidad. Ej: npm run make:list User');
  process.exit(1);
}

const entity = entityRaw.toLowerCase(); // user
const Entity = entityRaw.charAt(0).toUpperCase() + entityRaw.slice(1); // User
const folderPath = path.join(__dirname, `../src/${entity}s`);
const fileName = `${entity}ListController.js`;
const filePath = path.join(folderPath, fileName);

const content =
`// src/${entity}s/${fileName}
import ${Entity} from '../../models/${entity}s.js';

export const ${entity}ListController = async (req, res) => {
  try {
    const ${entity}s = await ${Entity}.findAll();
    return res.json(${entity}s);
  } catch (error) {
    console.error('❌ Error al listar ${Entity}s:', error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};
`;

fs.mkdirSync(folderPath, { recursive: true });

if (fs.existsSync(filePath)) {
  console.warn(`⚠️ Ya existe: ${fileName}`);
} else {
  fs.writeFileSync(filePath, content);
  console.log(`✅ Controlador generado: src/${entity}s/${fileName}`);
}
