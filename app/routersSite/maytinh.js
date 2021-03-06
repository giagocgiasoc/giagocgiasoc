const express =  require ('express')
const router = express.Router();
const MaytinhController = require('../controllers/site/maytinh');
var Cart = require('../models/cart');
 var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/lap-top',MaytinhController.maytinh_get_home);
router.get('/may-photocopy',MaytinhController.mayphoto_get_home);
router.get('/may-in',MaytinhController.mayin_get_home);
router.get('/cho-thue-may-photocopy-fuji-xerox',MaytinhController.thuemayphotocopy_get_home);
router.get('/bach-hoa-online',MaytinhController.bachhoaonline_get_home);
router.get('/lap-dat-camera',MaytinhController.camera_get_home);
router.get('/thiet-bi-suc-khoe',MaytinhController.thietbisuckhoe_get_home);
router.get('/ghe-massage-moi',MaytinhController.ghemassagemoi_get_home);
router.get('/ghe-massage-cu',MaytinhController.ghemassagecu_get_home);
router.get('/may-loc-khong-khi',MaytinhController.maylockhongkhi_get_home);
router.get('/may-hut-am',MaytinhController.mayhutam_get_home);
router.get('/camera-quan-sat-trong-nha',MaytinhController.cameratrongnha_get_home);
router.get('/camera-quan-sat-ngoai-troi',MaytinhController.camerangoaitroi_get_home);
router.get('/camera-ip',MaytinhController.cameraip_get_home);
router.get('/dau-ghi-hinh',MaytinhController.daughihinh_get_home);
router.get('/dich-vu-ghe-massage',MaytinhController.dichvughemassage_get_home);
router.get('/laptopdell',MaytinhController.laptopdell_get_home);
router.get('/laptopasus',MaytinhController.laptopasus_get_home);
router.get('/laptophp',MaytinhController.laptophp_get_home);
router.get('/laptopacer',MaytinhController.laptopacer_get_home);
router.get('/laptoplenovo',MaytinhController.laptoplenovo_get_home);
router.get('/laptop-hoc-tap-van-phong',MaytinhController.laptop_hoctapvanphong);
router.get('/laptop-do-hoa',MaytinhController.laptop_dohoa);
router.get('/laptop-gaming',MaytinhController.laptop_gaming);
router.get('/laptop-mong-nhe',MaytinhController.laptop_mongnhe);
router.get('/laptop-cao-cap',MaytinhController.laptop_caocap);
router.get('/may-tinh-de-ban',MaytinhController.desktop_get_home);
router.get('/phu-kien',MaytinhController.phukien_get_home);
router.get('/:maytinhnameseo',MaytinhController.maytinh_get_maytinhnameseo);

module.exports = router;
