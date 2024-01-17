import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";


export const createCategoryContoller =async(req,res) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.status(401).send({message:'Name is required'})
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exists'
            })
        }
        const category = await new categoryModel({name , slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'New Category created',
            category
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in category'
        })
    }
} ;


//update category
export const updateCategoryContoller =async(req,res)  => {
    try{
        const {name} =req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category Upda"
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while updating category'
        })
    }
};


//getAll Catt
export const categoryContoller =async(req,res) => {
    try{
        const category = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"All Categories List",
            category,
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting all categories"
        })
    }
}

//single category
export const singleCategoryController = async(req,res) => {
    try{
        const category = await categoryModel.findOne({slug:req.paramsslug})
        res.status(200).send({
            success:true,
            message:'Get Single Category Successfully',
            category
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting single category'
        })
    }
};


//delete cattegory
export const deleteCategoryController = async(req,res) => {
    try{
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:' Category Deleted Successfully',
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while deleting'
        })
    }
};