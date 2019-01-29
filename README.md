# IIIF Image Server Shim

**THIS IS SOMEWHERE BETWEEN A PROOF-OF-CONCEPT AND A WORK IN PROGRESS.**

images.nypl.org is/was a PHP application.
Recently, we've been trying to serve our images from [our IIF Image Server](https://github.com/NYPL/cantaloupe).

## If We Have A IIIF Image Server What's This Repo?

There are too many places that reference the legacy PHP image server for
us to realistically hunt down. For example, a news organization could be hot-linking
to images.nypl.org (tut-tut). **This app is a shim that is (hopefully) API compliant with the old
images.nypl.org, but ultimately turns it into the appropriate IIIF request, and proxies
the IIIF image server's response.**

## Design

_TODO:...._

## Building & Running Locally

### Building

1.  `docker-compose build`
_fin_

### Running

1.  `docker-compose up`
2.  Go to `http://localhost:8000/images.php?....`
_fin_

## Git Workflow & Deployment

_TODO:...._
