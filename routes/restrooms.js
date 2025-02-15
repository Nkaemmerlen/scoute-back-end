import { Router } from "express"
import * as restroomsCtrl from '../controllers/restrooms.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/:lat/:lng', checkAuth, restroomsCtrl.getAll)

router.get('/restrooms/:id', checkAuth, restroomsCtrl.show)

router.post('/restrooms', checkAuth, restroomsCtrl.create)

router.put('/restrooms/:id', checkAuth, restroomsCtrl.update)

router.delete('/restrooms/:id', checkAuth, restroomsCtrl.delete)

export {
  router
}