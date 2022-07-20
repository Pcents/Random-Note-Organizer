const router = require('express').Router();
// Import our modular router for /notes
const notesRouter = require('./note');
const homeRoutes = require('./home');

router.use('/api/notes', notesRouter);
router.use('/', homeRoutes);

module.exports = router;