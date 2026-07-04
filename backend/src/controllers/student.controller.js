import { Student } from "../models/student.model.js";
console.log("GET STUDENTS HIT");

export const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    return res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
     
      
    });
  }
};