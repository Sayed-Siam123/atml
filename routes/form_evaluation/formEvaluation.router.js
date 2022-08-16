var express = require('express');
const auth = require("../../middlewares/auth.middleware");
const role = require("../../middlewares/role.middleware");
const evaluationController = require("../../controllers/form_evaluation/formevaluation.controller");
var router = express.Router();

/* GET home page. */
router.post('/create-evaluation', auth, role, evaluationController.create_evaluation_form);
router.post('/generate-evaluation', auth, evaluationController.generate_evaluation_form);

module.exports = router;