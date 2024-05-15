### Building and running your database

When you're ready, start your database (mode detach) by running:
`docker compose -f compose.yaml up -d`.

Output dans next.config.js mis sur "standalone"
puis lancer la construction du build de l'image
`docker build . -t example-nextjs-app:latest --platform linux/amd64`
