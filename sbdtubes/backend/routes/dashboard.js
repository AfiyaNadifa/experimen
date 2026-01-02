const express = require("express");
const router = express.Router();

const rbac = require("../middleware/rbac");
const dashboardController = require("../controllers/dashboardController");

// RBAC DI SINI (INI KUNCI)
router.get("/", rbac(["Admin", "Viewer"]), dashboardController.getEmployees);

module.exports = router;
