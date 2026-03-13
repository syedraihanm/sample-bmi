const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("BMI API is running");
});

app.post("/bmi", (req,res)=>{

    const { weight, height } = req.body;
    if(!weight || !height){
        return res.status(400).json({ error: "Weight and height are required" });
    }
    if(weight <= 0 || height <= 0){
        return res.status(400).json({ error: "Weight and height must be positive numbers" });
    }
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
    let advice;
    if(category === "Underweight"){
        advice = "You are underweight. Consider eating a balanced diet and consult a healthcare provider.";
    }
    else if(category === "Normal"){
        advice = "You have a normal weight. Maintain a healthy lifestyle with regular exercise and a balanced diet.";
    }
    else if(category === "Overweight"){
        advice = "You are overweight. Consider a healthy diet and regular exercise to manage your weight.";
    }
    else{
        advice = "Consult a Doctor and reduce weight";

    res.json({
        bmi: bmi.toFixed(2),
        category: category,
        advice: advice

    });

});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});