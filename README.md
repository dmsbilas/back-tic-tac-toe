# back-tic-tac-toe
git clone https://github.com/dmsbilas/back-tic-tac-toe.git

cd back-tic-tac-toe

# Create Docker Image form Dockerfile
docker build -t back-tic .


# Run from Docker build
docker run -it -p 3001:3000 back-tic

The project will start running at localhost:3001 port


# Menual Commands for running without Docker
1. git clone git clone https://github.com/dmsbilas/back-tic-tac-toe.git
2. cd back-tic-tac-toe (Make sure you are in the directory where package.json file located)
3. npm install
4. npm run build
5. npm start
6. inside ./src/index.ts  change the port number according Frontends 

The project will start running at localhost:3000 port
