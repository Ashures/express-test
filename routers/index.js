import express from 'express';

const router = express.Router();

router.use((res, req, next) => {
    next();
});

router.get('/', (req, res) => {
    res.send('Homepage');
})

export default router;