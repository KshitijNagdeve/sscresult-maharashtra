import Result from '../models/Result.js';

export const getResult = async (req, res) => {
    try {
        const { seat, mname } = req.body;

        if (!seat || !mname) {
            return res.status(400).json({
                success: false,
                message: "Please enter all details"
            });
        }

        const result = await Result.findOne({
            seat: seat,
            mname: { $regex: mname, $options: "i" }
        });
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Invalid seat number"
            });
        }

        // FIXED comparison
        if (
            result.mname.toLowerCase().trim() !==
            mname.toLowerCase().trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Incorrect mother name"
            });
        }

        // SEND FULL DATA (VERY IMPORTANT)
        res.status(200).json({
            success: true,
            data: {
                name: result.name,
                seat: result.seat,
                mname: result.mname,
                division: result.division,
                subjects: result.subjects,   // 🔥 FIX
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