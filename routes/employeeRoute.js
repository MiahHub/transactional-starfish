const router = require('express').Router();
const employee = require('../../models/employee');

// Updates employee based on its employee_id
router.put('/:employee_id', async (req, res) => {
  //Calls the update method on the employee model
  const updatedemployee = await employee.update(
    {
      // All the fields you can update and the data attached to the request body.
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role_id: req.body.role_id,
      manager_id: req.body.manager_id,
    },
    {
      // Gets a employee based on the employee_id given in the request parameters
      where: {
        employee_id: req.params.employee_id,
      },
    }
  );
  
  res.json(updatedemployee);
});

// Delete route for a employee with a matching employee_id
router.delete('/:employee_id', async (req, res) => {
  // Looks for the employee based on the employee_id given in the request parameters
  const deletedemployee = await employee.destroy({
    where: {
      employee_id: req.params.employee_id,
    },
  });
  
  res.json(deletedemployee);
});

module.exports = router;
