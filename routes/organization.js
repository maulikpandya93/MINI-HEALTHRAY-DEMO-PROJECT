const router = require("express")();
const { getOrg, getAllOrgs } = require("../controllers/familyMember");
const {
  createOrganization,
  updateDetails,
} = require("../controllers/organization");

router.post("/addorganization", createOrganization);
router.put("/updateorganization", updateDetails);
router.get("/getorg/:id", getOrg);
router.get("/allorgs", getAllOrgs);

module.exports = router;
