const router = require('express').Router();
const department = require('../../models/department');

// Updates department based on its department_id
router.put('/:department_id', async (req, res) => {
  //Calls the update method on the department model
  const updateddepartment = await department.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      name: req.body.name,
    },
    {
      // Gets a department based on the department_id given in the request parameters
      where: {
        department_id: req.params.department_id,
      },
    }
  );
  
  res.json(updateddepartment);
});

// Delete route for a department with a matching department_id
router.delete('/:department_id', async (req, res) => {
  // Looks for the department based on the department_id given in the request parameters
  const deleteddepartment = await department.destroy({
    where: {
      department_id: req.params.department_id,
    },
  });
  
  res.json(deleteddepartment);
});

module.exports = router;
