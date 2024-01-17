import express from 'express'
import { categoryContoller, createCategoryContoller, deleteCategoryController, singleCategoryController, updateCategoryContoller } from '../controllers/categoryContoller.js'
import { isAdmin,requireSignIn } from '../middlewares/authMiddleware.js'


const router = express.Router()


//routes


//create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryContoller)


//getAllCategory
router.get('/get-category',categoryContoller)


//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryContoller)


//single category
router.get('/single-category/:slug',singleCategoryController)


//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)


export default router
