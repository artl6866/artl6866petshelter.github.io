const Pet = require('mongoose').model('Pet');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

module.exports = {

    getAll(req, res){
        Pet.find({}, function(err, pets){
            if(err){
                console.log(err)
                res.json(err)
            } else {
                res.json(pets)
            }
        })
    },

    getOne(req, res){
        console.log("req.params>", req.params)
        Pet.findOne({_id: req.params.id}, function(err, thisPet){
            if(err){
                console.log("Error retrieving pet", err)
                res.json(err)
            } else {
                res.json(thisPet)
            }
        })
    },
    

    create(req, res){
        console.log("Pet Controller> req.body", req.body)
        const pet = new Pet({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skillone: req.body.skillone,
            skilltwo: req.body.skilltwo,
            skillthree: req.body.skillthree
        })
        pet.save()
            .then(function(newPet){
                console.log("new pet created", newPet)
                res.json(newPet)
            })
            .catch(error => {
                const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
                console.log("+++++++",errors,"+++++++")
                res.json({error: errors})
            })
    },

    destroy(req, res){
        Pet.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log("Err in destroy", err)
                res.json(err)
            } else {
                console.log("successful destroy")
                res.json(true)
            }
        })
    },

    update(req, res){
        console.log(req.body)
        Pet.findById(req.body._id, function(err, pet){
            if(err){
                console.log("err in update", err)
                res.json(err)
            } else {
                pet.name = req.body.name;
                pet.type = req.body.type;
                pet.description = req.body.description;
                pet.skillone = req.body.skillone;
                pet.skilltwo = req.body.skilltwo;
                pet.skillthree = req.body.skillthree
                pet.save()
                .then(function(updatedPet){
                    console.log("pet updated", updatedPet)
                    res.json(updatedPet)
                })
                .catch(error => {
                    // mongoose error handling
                    const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message)
                    console.log("+++++++",errors,"+++++++")
                    res.json({error: errors})
                })
                console.log(pet)
            }
        })
    }


}