import Result from '../models/Result.js';

export const getResult = async (req, res) => {
    try {

        const { seat, mname } = req.body;

        // Check empty fields
        if (!seat || !mname) {
            return res.status(400).json({
                success: false,
                message: "Please enter all details"
            });
        }

        // Find result using seat number + partial mother name
        const result = await Result.findOne({
            seat: seat,
            mname: { $regex: "^" + mname, $options: "i" }
        });

        // If result not found
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Invalid seat number or mother name"
            });
        }

        // Send result data
        res.status(200).json({
            success: true,
            data: {
                name: result.name,
                seat: result.seat,
                mname: result.mname,
                division: result.division,
                subjects: result.subjects,
                total: result.total,
                percentage: result.percentage,
                status: result.status
            }
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};