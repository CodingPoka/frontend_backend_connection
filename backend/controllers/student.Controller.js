const Student = require("../models/student.Model");




exports.studentRegisterController= async (req,res)=>{
    try{
        const {name,age,university,phone,email,password}=req.body;
        //validation
        if(!name || !age || !university || !phone || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

        //if student already exists by email
        const existingStudent= await Student.findOne({email});

        if(existingStudent){
            return res.status(400).json({
                success:false,
                message:"Student already exists with this email"
            });
        }

        const student = await Student.create({
            name,
            age,
            university,
            phone,
            email,
            password
        })

        // Exclude password from response
    const { password: pwd, ...studentData } = student._doc

        return res.status(201).json({
            success:true,
            message:"Student registered successfully",
            student: studentData
        });


    }catch(error){
       
        return res.status(500).json({
            success:false,
            message:"Student registration failed",
            error:error.message
        });
    }
}




exports.studentLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find student by email
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Email Address",
      });
    }

    // Check password
    if (student.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Exclude password from response
    const { password: pwd, ...studentData } = student._doc;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      student: studentData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};


