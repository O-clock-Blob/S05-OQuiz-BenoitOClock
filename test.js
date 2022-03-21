require("dotenv").config();

const { Answer, Level, Question, Quiz, User, Tag } = require("./app/models");

/*
User.findAll().then(users=>{
    console.log(users)
},(err)=>{
    console.log(err)
})
*/

User.findByPk(4).then(user=>console.log(user))



// const dataMapper = require("./app/dataMapper");
// const Level = require("./app/models/level");
// const User = require("./app/models/user");
// const Tag = require("./app/models/tag");
// const Question = require("./app/models/question");
// const Quiz = require("./app/models/quiz");

// User.findById(4, (err, user)=>{
//     user.email = "nibelune@gmail.com";
//     user.save((err, user)=>{
//         console.log(user)
//     });
// });

// const newUser = new User({
//     email:"bob@jamaica.org",
//     password: "sdfsdfs",
//     firstname:"Bob",
//     lastname: "Marley"
// });
// newUser.save((err,user)=>{
//     console.log(user)
// })

// Quiz.findBy({user_id:1, title:"Linux - I"},(err,results)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(results)
//     }
// })

/*
User.findAll((err, users)=>{
    if(err){
        console.log(err)
    } else {
        console.log(users)
    }
})

Question.findById(3,(err, question)=>{
    if(err){
        console.log(err)
    } else {
        console.log(question)
    }
})

const veryHardLevel = new Level({name:"Très difficile"});
veryHardLevel.insert((err, level)=> {
    if(err){
        console.log(err)
    } else {
        console.log(level)
    }
})

*/
// User.findAll((err,users)=>{
//     console.log(users)
// })

// User.findBy({email:"nib@free.fr"},(err,user)=>{})

// Tag.findById(16,(err,tag)=>{
//     console.log(tag);
//     tag.delete((err,result)=>{
//         console.log(result)
//     })
// })

// Question.findAll((err, items)=>{
//     console.log(items)
// })

/*
const myTag = new Tag({name:"je suis un nouveau tag"});
myTag.insert((err,result)=>{
    if(err){
        console.log(err);
    }else {
        console.log(result)
        myTag.name = "je ne suis plus un nouveau tag";
        myTag.update((err, result)=>{
            if(err){
                console.log(err)
            }else {
                console.log(result)
            }
        })
    }
})
*/

/*
dataMapper.getAllLevels((err, levels)=>{
    console.log(err, levels)
})

Level.findAll((err, levels)=>{
    console.log(err, levels)
})
*/

// dataMapper.getOneLevel(1, (err,level)=>{
//     console.log(err,level)
// })

// User.findAll((err,users)=>{
//     console.log(users)
// })
/*
const nib = new User({
  email: "nib@free.fr",
  password: "dfzegf123",
  firstname: "Ben",
  lastname: "Schiex",
});

console.log(nib);

nib.insert((err, user) => {
  console.log(user);
  nib.email = "nibelune@gmail.com";
  nib.update((err, user) => {
    console.log(user);
    nib.delete((err,result)=>{
        console.log(result)
    })
  });
});
*/
/*
User.findAll((err,users)=>{
    const phillipe = users[0];
    console.log(phillipe)
    phillipe.lastname = "emmet";
    phillipe.update((err,user)=>{
        console.log(user)
    })

})
*/
