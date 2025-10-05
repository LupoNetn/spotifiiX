import {Router} from 'express'
import { getAdmin } from '../controller/admin.controller.js';
import { requireAdmin,protectRoute } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', protectRoute, requireAdmin, getAdmin)


export default router