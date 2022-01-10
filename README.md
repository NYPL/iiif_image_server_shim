# IIIF Image Server Shim

images.nypl.org is/was a PHP application.
Recently, we've been trying to serve our images from [our IIF Image Server](https://github.com/NYPL/cantaloupe).

## If We Have A IIIF Image Server What's This Repo?

There are too many places that reference the legacy PHP image server for
us to realistically hunt down. For example, a news organization could be hot-linking
to images.nypl.org (tut-tut). **This app is a shim that is (hopefully) API compliant with the old
images.nypl.org, but ultimately turns it into the appropriate IIIF request, and proxies
the IIIF image server's response.**

## Building & Running Locally

### Building

1.  `docker-compose build`

### Running

1.  `docker-compose up`
2.  Go to `http://localhost:8000/images.php?....`

## Git Workflow & Deployment

This project is meant only for local development and points to our dev iiif instance. In order to deploy work tested here, please copy it into the [IIIF Image Server](https://github.com/NYPL/cantaloupe) under `./nginx-configs`. Upon deployment of the IIIF server, changes to the configs will be picked up by symlinks from the server. 