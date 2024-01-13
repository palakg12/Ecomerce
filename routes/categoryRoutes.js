import express from 'express'
import { createCategoryContoller } from '../controllers/categoryContoller.js'
import { isAdmin,requireSignIn } from '../middlewares/authMiddleware.js'


const router = express.Router()


//routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryContoller)

export default router
