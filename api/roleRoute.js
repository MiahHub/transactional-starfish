const router = require('express').Router();
const role = require('../../models/role');

// Updates role based on its role_id
router.put('/:role_id', async (req, res) => {
  //Calls the update method on the role model
  const updatedrole = await role.update(
    {
      // All the fields you can update and the data attached to the request body.
      role_id: req.body.role_id,
      title: req.body.title,
      salary: req.body.salary,
      department_id: req.body.department_id
    },
    {
      // Gets a role based on the role_id given in the request parameters
      where: {
        role_id: req.params.role_id,
      },
    }
  );
  
  res.json(updatedrole);
});

// Delete route for a role with a matching role_id
router.delete('/:role_id', async (req, res) => {
  // Looks for the role based on the role_id given in the request parameters
  const deletedrole = await role.destroy({
    where: {
      role_id: req.params.role_id,
    },
  });
  
  res.json(deletedrole);
});

module.exports = router;
