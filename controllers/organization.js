const { sequelize } = require('../models/index');
const initModels = require('../models/init-models');

const { organization } = initModels(sequelize);

const { user: userModel } = initModels(sequelize);


exports.createOrganization = async (req, res) => {
    try {
        const { body: payload } = req;

        const findDoctor = await userModel.findOne({ where: { id: payload.created_by_id, userType: 'DOCTOR' } });

        if (!findDoctor) return res.status(404).json({ status: 404, error: 'Not found', message: 'Doctor not found with given doctor id' });

        const case_prefix = `${payload.name[0] + payload.name[1]}`.trim().toUpperCase();

        const case_start_no = 0;
        const newOrganisation = await organization.create({ ...payload, case_start_no, case_prefix: case_prefix });
        return res.status(200).json({ status: 200, message: 'new organization created', newOrganisation });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, error: 'Internal server error' });
    }
};


exports.updateDetails = async (req, res) => {
    try {
        const { body: payload } = req;

        const findOrganization = await organization.findOne({ where: { created_by_id : payload.created_by_id } })
        if (!findOrganization) return res.status(404).json({ status: 404, error: 'Not found!', message: 'Organization not found!' })

        const findDoctor = await userModel.findOne({ where: { id: payload.created_by_id } });

        if (!findDoctor) return res.status(404).json({ status: 404, error: 'Not found', message: 'Doctor not found with given doctor id' });

        await organization.update({ ...payload }, { where: { created_by_id: payload.created_by_id } });

        return res.status(200).json({ status: 200, message: 'details updated successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, error: 'Internal Server Error' });
    }
};
