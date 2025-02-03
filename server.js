const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

const pythonCommand = process.platform === "win32" ? "python" : "python3"; 

app.get("/generate", (req, res) => {
    const scriptPath = path.join(__dirname, "generator.py"); 

    console.log("Executing:", `${pythonCommand} "${scriptPath}"`);

    exec(`${pythonCommand} "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error("Execution Error:", error.message);
            return res.status(500).send(`Error generating title: ${error.message}`);
        }
        if (stderr) {
            console.error("Python Script Error:", stderr);
        }

        console.log("Python Output:", stdout.trim());
        res.send(stdout.trim());
    });
});
    

app.post("/save", async (req, res) => {
    const { title } = req.body;
    
    try{
        const response = await axios.post("http://localhost:3001/save.php", new URLSearchParams({ title }));
        res.send(response.data);

    }catch (error){
        res.status(500).send("Error saving title.");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); 