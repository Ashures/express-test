import express from 'express';

const router = express.Router();

router.use((res, req, next) => {
    next();
});

router.get('/', (req, res) => {
    res.send({
        "status": res.status,
        "data": {
            "name": "John Wilson",
            "dob": "03-11-2004",
            "age": 18,
            "email": "ashuresyt@gmail.com",
        }
    });
})

router.get('/pc', (req, res) => {
    res.send({
        "status": res.status,
        "data": {
            "case": {
                "name": "Phanteks Eclipse P300A",
                "url": "https://www.pbtech.co.nz/product/CHAPHA0310/Phanteks-Eclipse-P300A-Black-ATX-MidTower-Gaming-C"
            },
            "motherboard": {
                "name": "ASUS PRIME B550M-K",
                "url": "https://www.pbtech.co.nz/product/MBDASU25511/ASUS-PRIME-B550M-KCSM-mATX-Motherboard-For-AMD-Ryz"
            },
            "cpu": {
                "name": "AMD Ryzen 5 3500X 3.6GHz",
                "url": ""
            },

        }
    })
})

export default router;