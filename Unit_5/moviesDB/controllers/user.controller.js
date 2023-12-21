/* 
! Challenge

-

*/

router.post('/signup',(req,res) => {

    try{
        res.status(200.json)({
            message: 'Connected'
        })
    }
    catch (err) {
        res.status(500).json({
            
        })
    }

})

module.exports = router;