// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
var result = require("../server.js");
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/admin.html"));    
  });   
  
  app.get("/emergency_contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/emergency.html"));    
  }); 

  app.get("/household", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/household.html"));    
  }); 

  app.get("/income", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/income.html"));    
  }); 

  app.get("/employment", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/employment.html"));    
  }); 
  app.get("/job_skills", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/job_skills.html"));    
  }); 
  app.get("/goals", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/goals.html"));    
  }); 
  app.get("/barriers", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/barriers.html"));    
  }); 
  app.get("/signature", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/signature.html"));    
  }); 
  app.get("/skills_survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/skills_survey.html"));    
  }); 
  app.get("/computer_survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/computer_survey.html"));    
  }); 
  app.get("/applicants", function(req, res) {
    db.Applicant.findAll({})
    .then(function(appPost) {
      console.log(appPost);
      res.render('applicants', {applicants: appPost});
    });
  }); 
}
