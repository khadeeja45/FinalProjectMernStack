const express = require("express"),
      router  = express.Router();

router.get("/",checkAdmin,(req, res) => {
      
    res.render("admin/attendance");
});

router.get("/login", (req, res) => {
    res.render("admin/login"); 
});

router.get("/register", (req, res) => {
     res.render("admin/register"); 
});

router.post("/register", (req, res)=> {
    const user = new User({
        email: req.body.email,
        password:req.body.password,
        isAdmin : true,
        isEmployee: false
    });

    
    user.save((err, createdUser) => {
        if(err) {
            console.log(err);
          return res.status(400).send(err);
            
        }
        res.status(200).send({message: "Successfully registered"});
    })
    
});

 
 // to check if user is Admins
function checkAdmin(req, res , next){
    // check if user is logged in
    if(req.isAuthenticated()){
        // find campground

        User.findById(req.user._id, function(err, foundUser){
           if(err){
               res.redirect("back");
           }
          else{
               if(foundUser != null){
               if(foundUser.isAdmin & !(foundUser.isEmployee)){
                 return next(); 
              }
            else{
              res.redirect("back");  
            }  
              
          }  else {
              console.log(`theere is not user ${req.user}`);
              res.redirect("back");
          } 
              
          }
        });
    }
    else{
        res.redirect("back");
    }
    
}


module.exports = router;
