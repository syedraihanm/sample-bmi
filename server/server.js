const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/bmi", (req,res)=>{

    const height = req.body.height;
    const weight = req.body.weight;

    const h = height / 100;

    const bmi = weight/(h*h);

    let category;

    if(bmi < 18.5)
        category="Underweight";
    else if(bmi < 24.9)
        category="Normal";
    else if(bmi < 29.9)
        category="Overweight";
    else
        category="Obese";

    res.json({
        bmi: bmi.toFixed(2),
        category: category
    });

});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});