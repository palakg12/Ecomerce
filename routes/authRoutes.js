import  express  from "express";
import {registerController,loginController,testController,forgotPasswordController} from '../controllers/authController.js'
import { requireSignIn ,isAdmin} from "../middlewares/authMiddleware.js";




const router = express.Router()

//register
router.post('/register',registerController)

//login
router.post('/login',loginController);

//forgot pass
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get('/test',requireSignIn,isAdmin ,testController);

//protected user route auth
router.get('/user-auth',requireSignIn,(req,res) => {
    res.status(200).send({ok:true});
})

//protectedadmin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res) => {
    res.status(200).send({ok:true});
})

export default router;