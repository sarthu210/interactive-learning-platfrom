import mongoose from 'mongoose';
import User from '../models/user.js';
import Course from '../models/course.js';
import Enroll from '../models/enrolls.js';
import verifyToken from '../middleware/AuthMiddleWare.js';

async function enrollCourse(req, res) {
    try {
        const token = req.body.accessToken;
        const user = await verifyUser(token);
        if (user) {
            const userId = req.user._id;
            const courseId = req.body.courseId;

            // Check if the user is already enrolled in the course
            Enroll.findOne({ user: userId, course: courseId })
                .then(existingEnrollment => {
                    if (existingEnrollment) {
                        return res.status(400).json({ error: "User already enrolled in this course" });
                    }

                    const newEnrollment = new Enroll({
                        user: userId,
                        course: courseId,
                    });

                    newEnrollment.save()
                        .then(enrollment => {
                            // Add the courseId to the user's courses
                            User.findByIdAndUpdate(userId, { $push: { course: courseId } }, { new: true })
                                .then(updatedUser => {
                                    res.status(200).json({
                                        email: updatedUser.email,
                                        course: updatedUser.course
                                    });
                                })
                                .catch(err => {
                                    console.error(err);
                                    res.status(500).json({ error: "Internal server error" });
                                });
                        })
                        .catch(err => {
                            console.error(err);
                            res.status(500).json({ error: "Internal server error" });
                        });
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ error: "Internal server error" });
                });
        }
        else {
            res.status(401).json({ error: "User not authenticated" });
        }
    } catch (error) {
        return res.status(500).json({
            "message": "Internal Server Error"
        })
    }
}
