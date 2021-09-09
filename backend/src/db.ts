const Pool = require('pg').Pool
import { DATABASE } from './config/config'

const pool = new Pool(DATABASE)

export default pool