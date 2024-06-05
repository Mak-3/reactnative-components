const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/api/file/:folderName/:fileName', (req, res) => {
    const { folderName, fileName } = req.params;

    const absolutePath = path.join(__dirname, 'src', 'reactnative-components', folderName, fileName);

    fs.access(absolutePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'File not found or invalid path' });
        }

        fs.readFile(absolutePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Error reading file' });
            }
            res.json({ contents: data });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});