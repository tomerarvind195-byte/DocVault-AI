const Opportunity = require("../models/Opportunity");

// ===============================
// CREATE OPPORTUNITY
// ===============================
const createOpportunity = async (req, res, next) => {
    try {
        const {
            title,
            company,
            description,
            opportunityType,
            location,
            applicationLink,
            deadline,
            requiredSkills
        } = req.body;

        if (!title || !company || !description) {
            return res.status(400).json({
                message: "Title, company and description are required."
            });
        }

        const opportunity = await Opportunity.create({
            title,
            company,
            description,
            opportunityType: opportunityType || "Job",
            location: location || "Remote",
            applicationLink: applicationLink || "",
            deadline: deadline || null,
            requiredSkills: requiredSkills || []
        });

        res.status(201).json({
            message: "Opportunity created successfully.",
            opportunity
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// GET ALL OPPORTUNITIES
// ===============================
const getOpportunities = async (req, res, next) => {
    try {
        const opportunities = await Opportunity.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            count: opportunities.length,
            opportunities
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// GET SINGLE OPPORTUNITY
// ===============================
const getOpportunityById = async (req, res, next) => {
    try {
        const opportunity = await Opportunity.findById(
            req.params.id
        );

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found."
            });
        }

        res.status(200).json({
            opportunity
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// UPDATE OPPORTUNITY
// ===============================
const updateOpportunity = async (req, res, next) => {
    try {
        const opportunity = await Opportunity.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found."
            });
        }

        res.status(200).json({
            message: "Opportunity updated successfully.",
            opportunity
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// DELETE OPPORTUNITY
// ===============================
const deleteOpportunity = async (req, res, next) => {
    try {
        const opportunity = await Opportunity.findByIdAndDelete(
            req.params.id
        );

        if (!opportunity) {
            return res.status(404).json({
                message: "Opportunity not found."
            });
        }

        res.status(200).json({
            message: "Opportunity deleted successfully."
        });

    } catch (error) {
        next(error);
    }
};


module.exports = {
    createOpportunity,
    getOpportunities,
    getOpportunityById,
    updateOpportunity,
    deleteOpportunity
};