const router = require("express").Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");
const Place = require("../model/placementModel");
const Mock = require("../model/mock");
const Class = require("../model/class");
const AddClass = require("../model/addclass");
//register

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      console.log("yes");

      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    //pwd encrypt
    //console.log("no")
    // const salt = await bcrypt.getSalt(10);
    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    // console.log(req.body);

    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    //console.log(error);
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//login

router.post("/login", async (req, res) => {
  // console.log(req.body.email,req.body.password);
  try {
    const userlogin = await User.findOne({ email: req.body.email });

    if (!userlogin) {
      return res.send({
        success: false,
        message: "User does not exists",
      });
    }

    //pwd decrypt
    const validPassword = await bcrypt.compare(
      req.body.password,
      userlogin.password
    );

    if (!validPassword) {
      return res.send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ _id: userlogin._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });

    res.send({
      success: true,
      message: "user logged in successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// protected route
router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId).select("-password");

    res.send({
      success: true,
      message: "user details fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//placement

router.post("/place", async (req, res) => {

  try {
    const newPlace = new Place(req.body);
    await newPlace.save();

    res.send({
      success: true,
      message: "Placement Created Successfully",
    });
  } catch (error) {
    //console.log(error);
    res.send({
      success: false,
      message: error.message,
    });
  }
});


// protected route
router.get("/get-placed", authMiddleware, async (req, res) => {
  try {
    const placement = await Place.find();

    res.send({
      success: true,
      message: "fetched successfully",
      data: placement,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all mock
router.get("/get-mock", authMiddleware, async (req, res) => {
  try {
    const mock = await Mock.find();

    res.send({
      success: true,
      message: "fetched successfully",
      data: mock,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get class
router.get("/get-class", authMiddleware, async (req, res) => {
  try {
    const mock = await Class.find();

    res.send({
      success: true,
      message: "fetched successfully",
      data: mock,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
router.get("/get-add-class", authMiddleware, async (req, res) => {
  try {
    const mock = await AddClass.find();

    res.send({
      success: true,
      message: "fetched successfully",
      data: mock,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});




router.post("/mock", async (req, res) => {
  try {
     const newMock = new Mock(req.body);
     await newMock.save();

    res.send({
      success: true,
      message: "Success",
    });
  } catch (error) {
    
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/class", async (req, res) => {
  try {
     const newClass = new Class(req.body);
     await newClass.save();

    //  const cl = await Class.find();
    //  console.log(cl);

    res.send({
      success: true,
      message: "Success",
    });
  } catch (error) {
    
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/addclass", async (req, res) => {
  try {
     const newClass = new AddClass(req.body);
     await newClass.save();

  
    res.send({
      success: true,
      message: "Success",
    });
  } catch (error) {
    
    res.send({
      success: false,
      message: error.message,
    });
  }
});











module.exports = router;
