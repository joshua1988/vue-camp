import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api-spec.json';
import { Router } from 'express';
const router = Router();

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/api/v1', router);

export default router;