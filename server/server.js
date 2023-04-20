const fastify = require('fastify')({ logger: true })
const path = require('path');
const fs = require('fs');
fastify.register(require("@fastify/view"), {
    engine: {
      pug: require("pug"),
    },
  });

fastify.register(require("fastify-markdown"), { src: true });
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../public'),
    prefix: '/', // optional: default '/'
  })
  
// This is an async function
fastify.get("/", async (req, reply) => {
  // We are awaiting a function result
  const md = await reply.markdown(
    path.join(__dirname, "..", "/markdown/index.md")
  );

  // Note the return statement
  return reply.view("/templates/index.pug", { markdown: md});
});

// demo list for debugging exercises
fastify.get("/demo/facts", async (req, reply) => {
  // Note the return statement
  return reply.send([{"status":{"verified":true,"feedback":"","sentCount":1},"_id":"5887e1d85c873e0011036889","user":"5a9ac18c7478810ea6c06381","text":"Cats make about 100 different sounds. Dogs make only about 10.","__v":0,"source":"user","updatedAt":"2020-09-03T16:39:39.578Z","type":"cat","createdAt":"2018-01-15T21:20:00.003Z","deleted":false,"used":true},{"status":{"verified":true,"sentCount":1},"_id":"588e746706ac2b00110e59ff","user":"588e6e8806ac2b00110e59c3","text":"Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.","__v":0,"source":"user","updatedAt":"2020-08-26T20:20:02.359Z","type":"cat","createdAt":"2018-01-14T21:20:02.750Z","deleted":false,"used":true},{"status":{"verified":true,"sentCount":1},"_id":"58923f2fc3878c0011784c79","user":"5887e9f65c873e001103688d","text":"I don't know anything about cats.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","type":"cat","createdAt":"2018-02-25T21:20:03.060Z","deleted":false,"used":false},{"status":{"verified":true,"sentCount":1},"_id":"5894af975cdc7400113ef7f9","user":"5a9ac18c7478810ea6c06381","text":"The technical term for a cat’s hairball is a bezoar.","__v":0,"source":"user","updatedAt":"2020-11-25T21:20:03.895Z","type":"cat","createdAt":"2018-02-27T21:20:02.854Z","deleted":false,"used":true},{"status":{"verified":true,"sentCount":1},"_id":"58e007cc0aac31001185ecf5","user":"58e007480aac31001185ecef","text":"Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.","__v":0,"source":"user","updatedAt":"2020-08-23T20:20:01.611Z","type":"cat","createdAt":"2018-03-01T21:20:02.713Z","deleted":false,"used":false}]);
});
// Exercises
fastify.get("/exercises", async (req, reply) => {

  // Note the return statement
  return reply.view("/templates/exercises.pug");
});

fastify.get("/exercise/:exerciseId", async (req, reply) => {
  const id = req.params.exerciseId;
  const markdown = await reply.markdown(
    path.join(__dirname, "..", `/markdown/exercises/${id}.md`)
  );

  let script, link;

  // Check for static files
  let jsPath = path.join(__dirname, "..", `public/js/${id}.js`);
  let cssPath = path.join(__dirname, "..", `public/css/${id}.css`);

  if (fs.existsSync(jsPath)) {
    script = `/js/${id}.js`;
  }

  if (fs.existsSync(cssPath)) {
    link = `/css/${id}.css`;
  }

  return reply.view(`/templates/index.pug`, {
    markdown,
    script,
    link,
  });
});

const start = () => {
    try {
        fastify.listen({ port: 3001 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();

