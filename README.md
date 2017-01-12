##Intro
This is an example of Redux file upload middleware. It contains 2 pages for:
- entering new file
- list of all uploaded files

Files are uploaded locally in ./uploads directory.

Additionally this project contain also middleware for async api calls to node server.

## Run
```
npm install
```

### Start web
```
npm run react
```

### Start node backend
```
DEBUG=express:* npm run server
```

### Run tests
```
mocha
```
